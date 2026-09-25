"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { StaffMember } from "../staff";
import s from "./StaffSlider.module.css";

/*
 * 見本（幅596px）上の寸法
 *   スライド間隔 485px / カード幅 439.5px（586px の素材を 0.75 倍）/ 中央カードの左端 x=75
 */
const VIEW = 596;
const PITCH = 485;
const CARD = 439.5;
const SLIDE_LEFT = 75 - (PITCH - CARD) / 2;
/** 選択中スライドの左端をビューポート幅に対する割合で揃える */
const align = (viewSize: number) => viewSize * (SLIDE_LEFT / VIEW);

type Props = {
  staff: StaffMember[];
  initialIndex?: number;
};

/**
 * スタッフ紹介スライダー（embla-carousel）。
 * ループ・自動再生（操作で停止）・スワイプ / ドラッグ・ドットクリックに対応。
 * 枝と葉は固定し、吊り下げ看板のカードだけがスライドする。
 */
export function StaffSlider({ staff, initialIndex = 0 }: Props) {
  const [reduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align, startIndex: initialIndex },
    reduceMotion ? [] : [Autoplay({ delay: 4500, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(initialIndex);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={s.slider}>
      <Image
        className={s.branch}
        src="/images/staff-branch.jpg"
        width={596}
        height={100}
        sizes="(max-width: 450px) 100vw, 450px"
        alt=""
      />
      {/* 枝から垂れる葉（カードの上に重ねて固定表示） */}
      <Image className={s.leaf} src="/images/staff-leaf.png" width={70} height={45} alt="" aria-hidden="true" />

      <div className={s.viewport} ref={emblaRef} role="region" aria-roledescription="carousel" aria-label="スタッフ紹介">
        <div
          className={s.container}
          // JS 初期化前（SSR）も見本と同じ位置に表示する
          style={{ transform: `translate3d(${((SLIDE_LEFT - initialIndex * PITCH) / VIEW) * 100}%, 0, 0)` }}
        >
          {staff.map((m, i) => (
            <div
              key={m.name}
              className={s.slide}
              style={{ flexBasis: `${(PITCH / VIEW) * 100}%` }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${staff.length}`}
            >
              <Image
                src={m.src}
                alt={`スタッフ紹介：${m.name}（${m.kana}）`}
                className={s.card}
                style={{ width: `${(CARD / PITCH) * 100}%` }}
                sizes="(max-width: 450px) 74vw, 332px"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={s.dots}>
        {staff.map((m, i) => (
          <button
            key={m.name}
            type="button"
            className={`${s.dot} ${i === selected ? s.dotActive : ""}`}
            aria-label={`${m.name}を表示`}
            aria-current={i === selected ? "true" : undefined}
            onClick={() => emblaApi?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
