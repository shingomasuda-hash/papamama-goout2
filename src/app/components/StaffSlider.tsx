"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import type { StaffMember } from "../staff";
import s from "./StaffSlider.module.css";

const PX = (n: number) => `${n / 100}rem`;
const DEFAULT_PHOTO = { left: 122, top: 28, width: 220 };

type Props = {
  staff: StaffMember[];
  initialIndex?: number;
};

/**
 * スタッフ紹介スライダー。
 * - スマホ: 横スワイプ（CSS scroll-snap）
 * - PC: マウスドラッグ / ドットクリック / ← → キー
 * 枝と葉は固定し、吊り下げ看板部分だけがスライドする。
 */
export function StaffSlider({ staff, initialIndex = 0 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(initialIndex);
  const drag = useRef<{ x: number; left: number; moved: boolean } | null>(null);
  const multiple = staff.length > 1;

  const targetLeft = useCallback((i: number) => {
    const track = trackRef.current;
    const slide = track?.children[i] as HTMLElement | undefined;
    if (!track || !slide) return 0;
    return slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
  }, []);

  const goTo = useCallback(
    (i: number, smooth = true) => {
      const track = trackRef.current;
      if (!track) return;
      const idx = Math.max(0, Math.min(staff.length - 1, i));
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({ left: targetLeft(idx), behavior: smooth && !reduce ? "smooth" : "auto" });
      setActive(idx);
    },
    [staff.length, targetLeft],
  );

  // 初期スライドへ移動（画面幅が変わっても表示中のスライドを中央に保つ）
  useEffect(() => {
    goTo(initialIndex, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onResize = () => goTo(active, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, goTo]);

  // スクロール位置から表示中のスライドを判定
  const onScroll = () => {
    const track = trackRef.current;
    if (!track || drag.current) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((el, i) => {
      const c = (el as HTMLElement).offsetLeft + (el as HTMLElement).offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    if (best !== active) setActive(best);
  };

  // PC のマウスドラッグ（タッチはブラウザ標準のスワイプに任せる）
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (!multiple || e.pointerType !== "mouse" || e.button !== 0) return;
    const track = trackRef.current!;
    drag.current = { x: e.clientX, left: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
    track.dataset.dragging = "true";
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.x;
    if (Math.abs(dx) > 3) d.moved = true;
    trackRef.current!.scrollLeft = d.left - dx;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d) return;
    const track = trackRef.current!;
    drag.current = null;
    delete track.dataset.dragging;
    track.releasePointerCapture(e.pointerId);
    const dx = e.clientX - d.x;
    const threshold = track.clientWidth * 0.12;
    goTo(dx < -threshold ? active + 1 : dx > threshold ? active - 1 : active);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <div className={s.slider} aria-roledescription="carousel" aria-label="スタッフ紹介">
      <Image
        className={s.branch}
        src="/images/staff-branch.jpg"
        width={596}
        height={100}
        sizes="(max-width: 450px) 100vw, 450px"
        alt=""
      />

      {/* 枝から垂れる葉（看板の上に重ねて固定表示） */}
      <Image className={s.leaf} src="/images/staff-leaf.png" width={70} height={45} alt="" aria-hidden="true" />

      <div className={s.viewport}>
        {/* 見本どおり、左右に隣の看板の端をのぞかせる（先頭・末尾でも途切れないよう常に背面に配置） */}
        <Image className={`${s.ghost} ${s.ghostPrev}`} src="/images/staff-board.jpg" width={470} height={602} sizes="(max-width: 450px) 79vw, 355px" alt="" aria-hidden="true" />
        <Image className={`${s.ghost} ${s.ghostNext}`} src="/images/staff-board.jpg" width={470} height={602} sizes="(max-width: 450px) 79vw, 355px" alt="" aria-hidden="true" />

        <div
          ref={trackRef}
          className={`${s.track} ${multiple ? "" : s.trackStatic}`}
          tabIndex={multiple ? 0 : -1}
          aria-live="polite"
          onScroll={onScroll}
          onKeyDown={multiple ? onKeyDown : undefined}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {staff.map((m, i) => {
            const photo = { ...DEFAULT_PHOTO, ...m.photo };
            return (
              <article
                key={m.name}
                className={s.slide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${staff.length}`}
                aria-hidden={multiple && i !== active ? true : undefined}
              >
                <Image
                  className={s.board}
                  src="/images/staff-board.jpg"
                  width={470}
                  height={602}
                  sizes="(max-width: 450px) 79vw, 355px"
                  alt=""
                  draggable={false}
                />
                <Image
                  className={s.photo}
                  src={photo.src}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 450px) 37vw, 170px"
                  alt={`スタッフ ${m.name}`}
                  draggable={false}
                  style={{ left: PX(photo.left), top: PX(photo.top), width: PX(photo.width) }}
                />
                <h3 className={s.name}>
                  {m.name}
                  <br />
                  {m.kana}
                </h3>
                <dl className={s.profile}>
                  {(
                    [
                      ["趣味", m.hobby],
                      ["特技", m.skill],
                      ["一言", m.comment],
                    ] as const
                  ).map(([label, lines]) => (
                    <div key={label} className={s.row}>
                      <dt>{label}</dt>
                      <dd>
                        {lines.map((line, j) => (
                          <span key={j}>
                            {j > 0 && <br />}
                            {line}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      </div>

      <div className={s.dots}>
        {multiple &&
          staff.map((m, i) => (
            <button
              key={m.name}
              type="button"
              className={`${s.dot} ${i === active ? s.dotActive : ""}`}
              aria-label={`${i + 1}人目（${m.name}）を表示`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
      </div>
    </div>
  );
}
