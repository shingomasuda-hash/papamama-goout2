import Image from "next/image";
import { Cta } from "./components/Cta";
import { StaffSlider } from "./components/StaffSlider";
import { STAFF, STAFF_INITIAL_INDEX } from "./staff";
import s from "./page.module.css";

const FULL = "(max-width: 450px) 100vw, 450px";

const WHAT_ITEMS = [
  { no: "01", label: "購入" },
  { no: "02", label: "乗り換え" },
  { no: "03", label: "カスタム" },
  { no: "04", label: "家族利用" },
  { no: "05", label: "支払い" },
];

const MERITS = [
  {
    no: "01",
    title: "その場で質問",
    text: ["疑問はその場で解決。", "気になることをすぐ質問できるから、理解が深ま", "る。"],
  },
  {
    no: "02",
    title: "実車でわかる",
    text: ["触れて、座って、初めて分かる。写真では", "伝わらないサイズ感や乗り心地を、その場で体感"],
  },
  {
    no: "03",
    title: "その場で比べられる",
    text: ["複数台を一度にチェック。", "価格・装備・広さを横並びで見て、違いがすぐ分", "かる。"],
  },
  {
    no: "04",
    title: "同伴相談",
    text: ["家族やパートナーもと同時に確認。", "意見のズレをその場で解消して、納得して選べ", "る。"],
  },
  {
    no: "05",
    title: "現地で下取り査定",
    text: ["当日のお車をその場で査定！"],
  },
];

const FLOW = [
  { no: "01", text: "日時送信" },
  { no: "02", text: "LINE追加" },
  { no: "03", text: "当日案内" },
];

const FAQ = [
  {
    q: "Q1.話だけでも可能か",
    a: "A1.もちろん可能です。ぜひ実際に車を見て、乗って、楽しんでください。",
  },
  {
    q: "Q2.同伴可能か",
    a: "A2.可能です。中学生以下は無料のため、ご家族様もご一緒にご来場いただけます。",
  },
  {
    q: "Q3.特典受け取り方法",
    a: "A3.LINE追加後、相談予約まで完了いただけましたら当日入口にて担当者からチケットをお渡しします。",
  },
];

const SWATCHES = ["#dfd4c2", "#a9bbc9", "#db9c8d", "#ead19b", "#799b8b"];

function OutlineTitle({ en, ja, className }: { en: string; ja: string; className?: string }) {
  return (
    <hgroup className={`${s.secTitle} ${className ?? ""}`}>
      <h2 className={s.secTitleEn}>{en}</h2>
      <p className={s.secTitleJa}>{ja}</p>
    </hgroup>
  );
}

export default function Home() {
  return (
    <main className={s.lp}>
      {/* ===== FV ===== */}
      <section className={s.fv}>
        <Image
          className={s.fvBg}
          src="/images/fv-bg.jpg"
          width={596}
          height={777}
          sizes={FULL}
          alt=""
          preload
        />
        <Image
          className={s.fvLogo}
          src="/images/logo-fv.jpg"
          width={312}
          height={60}
          sizes="(max-width: 450px) 53vw, 240px"
          alt="PAPAMAMA CAR'S"
          preload
        />
        <h1 className={s.fvTitle}>
          <span className={s.fvTitleEn}>PAPAMAMA CAR’S</span>
          <Image
            className={s.fvGoout}
            src="/images/logo-goout.jpg"
            width={396}
            height={52}
            sizes="(max-width: 450px) 67vw, 300px"
            alt="GOOUT CAMP"
            preload
          />
          <span className={s.fvTitleJa}>出店決定!</span>
        </h1>
        <p className={s.fvDate}>
          <span className={s.fvDateNum}>10.2</span>
          <span className={s.fvDateDay}>(金)</span>
          <span className={s.fvDateNum}>〜10.4</span>
          <span className={s.fvDateDay}>(日)</span>
        </p>
        <p className={s.fvPlace}>
          ふもとっぱら
          <br />
          （静岡県富士宮市麓156）
        </p>
      </section>

      {/* ===== 塗装体験イベント告知 ===== */}
      <section className={s.intro}>
        <p className={s.introText}>
          <span className={s.introSmall}>家族で楽しめる</span>
          <span className={s.introBig}>塗装体験</span>
          <span className={s.introSmall}>イベントも開催！</span>
        </p>
        <Image
          className={s.introPhoto}
          src="/images/collage.jpg"
          width={420}
          height={157}
          sizes="(max-width: 450px) 71vw, 318px"
          alt="塗装体験イベントの様子とスタッフ"
          preload
        />
      </section>

      {/* ===== 相談OK / 下取りOK ===== */}
      <section className={s.points}>
        <div className={s.point}>
          <Image className={s.pointIcon} src="/images/icon-car.png" width={90} height={90} alt="" />
          <p className={s.pointText}>
            <span className={s.pointSmall}>愛車の</span>
            <span className={s.pointBig}>相談OK!</span>
          </p>
        </div>
        <div className={s.point}>
          <Image className={s.pointIcon} src="/images/icon-yen.png" width={90} height={90} alt="" />
          <p className={s.pointText}>
            <span className={s.pointSmall}>下取り査定も</span>
            <span className={s.pointBig}>OK!</span>
          </p>
        </div>
      </section>

      {/* ===== 入場チケット無料 ===== */}
      <section className={s.ticket}>
        <div className={s.ticketBox}>
          <span className={s.ticketCircle}>
            相談
            <br />
            予約で
          </span>
          <p className={s.ticketText}>
            <span className={s.ticketSmall}>入場チケット</span>
            <span className={s.ticketBig}>無料プレゼント！</span>
          </p>
          <Image
            className={s.ticketImg}
            src="/images/ticket.jpg"
            width={148}
            height={124}
            sizes="(max-width: 450px) 25vw, 112px"
            alt="TICKET 入場チケット FREE!"
          />
        </div>
      </section>

      {/* ===== CTA + WHAT WE CAN ===== */}
      <section className={s.what}>
        <div className={s.btnPair}>
          <Cta type="consultation" position="hero" className={`${s.btnSmall} ${s.btnOrange}`}>
            相談予約
          </Cta>
          <Cta type="paint-event" position="hero" className={`${s.btnSmall} ${s.btnLime}`}>
            塗装体験予約
          </Cta>
        </div>

        <OutlineTitle en="WHAT WE CAN" ja="何を相談できるの？" className={s.whatTitle} />

        <ul className={s.whatList}>
          {WHAT_ITEMS.map((item, i) => (
            <li key={item.no} className={s.whatItem}>
              <Image
                src={`/images/what-${item.no}.jpg`}
                width={230}
                height={288}
                sizes="(max-width: 450px) 39vw, 174px"
                alt=""
                className={s.whatImg}
                loading={i < 2 ? "eager" : "lazy"}
              />
              <span className={s.whatNo} aria-hidden="true">
                {item.no}
              </span>
              <span className={s.whatLabel}>{item.label}</span>
            </li>
          ))}
        </ul>

        <div className={s.btnStack}>
          <Cta type="consultation" position="middle" className={`${s.btnWide} ${s.btnOrange}`}>
            まずは説明を聞く
          </Cta>
          <Cta type="consultation" position="middle" className={`${s.btnWide} ${s.btnLime}`}>
            相談予約をする
          </Cta>
        </div>
      </section>

      {/* ===== 車両 ===== */}
      <Image
        className={s.cars}
        src="/images/cars.jpg"
        width={596}
        height={362}
        sizes={FULL}
        alt="PAPAMAMA CAR'S カスタム車両（ブルー・ベージュ・ブルーグレー）"
      />

      {/* ===== MERIT ===== */}
      <section className={s.merit}>
        <OutlineTitle en="MERIT" ja="会場相談のメリットは？" className={s.meritTitle} />
        <ol className={s.meritList}>
          {MERITS.map((m) => (
            <li key={m.no} className={s.meritItem} data-no={m.no}>
              <h3 className={s.meritHead}>
                <span className={s.meritNo}>{m.no}</span>
                <span className={s.meritName}>{m.title}</span>
              </h3>
              <p className={s.meritText}>
                {m.text.map((t, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {t}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== BOOTH ===== */}
      <section className={s.booth}>
        <OutlineTitle en="BOOTH" ja="ブース紹介" className={s.boothTitle} />
        <Image
          className={s.boothImg}
          src="/images/booth.jpg"
          width={590}
          height={368}
          sizes={FULL}
          alt="PAPAMAMA CAR'S ブースイメージ"
        />
      </section>

      {/* ===== 塗装体験 ===== */}
      <section className={s.paint}>
        <Image
          className={s.paintBg}
          src="/images/paint-bg.jpg"
          width={596}
          height={2338}
          sizes={FULL}
          alt=""
        />
        <h2 className={s.paintHead}>実際に塗装体験！</h2>
        <p className={s.paintLabel}>イベント開催中</p>
        <p className={s.paintCatch}>
          <span>●安心安全なインク！</span>
          <span>●実際の車に！</span>
          <span>●親子の思い出作りにも最適！</span>
        </p>

        <h3 className={s.paintOverview}>塗装概要</h3>
        <dl className={s.paintBox}>
          <dt>●開催日程</dt>
          <dd>
            <span className={s.paintYear}>2026年</span>
            <span className={s.paintDate}>10月2日(金)〜4日(日)</span>
          </dd>
          <dt>●予約受付期間</dt>
          <dd className={s.paintTimes}>
            <span>2日(金) 15:00〜23:00</span>
            <span>3日(土) 10:00〜17:00</span>
            <span>4日(日) 09:00〜12:00</span>
          </dd>
          <dt>●予約について</dt>
          <dd className={s.paintNote}>
            相談予約には塗装体験が含まれており、
            <br />
            塗装体験のみの予約も承っております。
          </dd>
        </dl>
        <Cta type="paint-event" position="paint" className={`${s.btnWide} ${s.btnOrange} ${s.paintBtn}`}>
          LINEから予約
        </Cta>

        <div className={s.safety}>
          <h3 className={s.safetyHead}>
            お子様の
            <br />
            安全面にも配慮
          </h3>
          <ul className={s.safetyList}>
            <li>●無害・無臭の安全な塗料</li>
            <li>●スタッフが丁寧にご案内</li>
            <li>●親子で参加しやすい</li>
          </ul>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className={s.about}>
        <OutlineTitle en="ABOUT" ja="イベント概要" className={s.aboutTitle} />
        <dl className={s.aboutList}>
          <div className={s.aboutRow}>
            <dt className={s.aboutHead}>
              <Image src="/images/icon-cal.png" width={50} height={49} alt="" className={s.aboutIcon} />
              開催日
            </dt>
            <dd>
              <p className={s.aboutYear}>2026年</p>
              <p className={s.aboutDate}>10月2日(金)〜4日(日)</p>
              <p className={s.aboutPill}>2日(金)</p>
              <p className={s.aboutTime}>15:00〜23:00(来場者入場)</p>
              <p className={s.aboutPill}>3日(土)</p>
              <p className={s.aboutTime}>10:00〜17:00(ブースOPEN)</p>
              <p className={s.aboutPill}>4日(日)</p>
              <p className={s.aboutTime}>09:00〜12:00(ブースOPEN)</p>
            </dd>
          </div>
          <div className={`${s.aboutRow} ${s.aboutVenue}`}>
            <dt className={s.aboutHead}>
              <Image src="/images/icon-pin.png" width={50} height={49} alt="" className={s.aboutIcon} />
              会場
            </dt>
            <dd>
              <p className={s.aboutLead}>ふもとっぱら</p>
              <p className={s.aboutAddr}>
                静岡県富士宮市麓156
                <br />
                富士オートキャンプ場ふもと村
              </p>
            </dd>
          </div>
          <div className={`${s.aboutRow} ${s.aboutTheme}`}>
            <dt className={s.aboutHead}>
              <Image src="/images/icon-mountain.png" width={50} height={49} alt="" className={s.aboutIcon} />
              イベントテーマ
            </dt>
            <dd>
              <p className={s.aboutLead}>
                音楽×キャンプのフェス
                <br />
                ティバル
              </p>
              <p className={s.aboutBody}>
                広大な敷地内にてオールインワ
                <br />
                ン（ステージも宿泊場所も出展
                <br />
                ブースもコンテンツも
                <br />
                全て１箇所 ！）で開催されます
              </p>
            </dd>
          </div>
          <div className={`${s.aboutRow} ${s.aboutContents}`}>
            <dt className={s.aboutHead}>
              <Image src="/images/icon-tent.png" width={50} height={49} alt="" className={s.aboutIcon} />
              注目コンテンツ
            </dt>
            <dd>
              <ul className={s.contentsGrid}>
                <li>
                  最新アウトドア
                  <br />
                  ギア・ウェア
                </li>
                <li>モビリティ展示</li>
                <li>
                  エコロジーエリ
                  <br />ア
                </li>
                <li>
                  アクティビティ
                  <br />
                  体験
                </li>
                <li>
                  アウトドア
                  <br />
                  テクノロジーエ
                  <br />
                  リア(新設予定)
                </li>
                <li>キッズエリア</li>
              </ul>
            </dd>
          </div>
          <div className={`${s.aboutRow} ${s.aboutRecommend}`}>
            <dt className={s.aboutHead}>
              <Image src="/images/icon-good.png" width={50} height={49} alt="" className={s.aboutIcon} />
              こんな方におすすめ
            </dt>
            <dd>
              <ul className={s.tags}>
                <li>#車中泊・キャンピングカー検討者</li>
                <li>#ペットとアウトドアを楽しみたい方</li>
                <li>#アクティビティ好き/ファミリー層</li>
              </ul>
            </dd>
          </div>
        </dl>
      </section>

      {/* ===== STAFF ===== */}
      <section className={s.staff}>
        <OutlineTitle en="STAFF" ja="スタッフ紹介" className={s.staffTitle} />
        <StaffSlider staff={STAFF} initialIndex={STAFF_INITIAL_INDEX} />
      </section>

      {/* ===== EXTERIOR ===== */}
      <section className={s.exterior}>
        <Image
          className={s.exteriorBg}
          src="/images/exterior-bg.jpg"
          width={596}
          height={1298}
          sizes={FULL}
          alt="PAPAMAMA CAR'S カスタム車両の外観"
        />
        <OutlineTitle en="EXTERIOR" ja="車の外観" className={s.exteriorTitle} />
        <div className={`${s.exItem} ${s.ex01}`}>
          <h3 className={s.exHead}>
            <span className={s.exNo}>01</span>
            <span className={s.exName}>BODY COLOR</span>
          </h3>
          <ul className={s.swatches} aria-label="ボディカラー">
            {SWATCHES.map((c) => (
              <li key={c} style={{ background: c }} />
            ))}
          </ul>
          <p className={s.exText}>
            自分らしいカラーで、
            <br />
            車との時間をより楽し
            <br />
            く！
          </p>
        </div>
        <div className={`${s.exItem} ${s.ex02}`}>
          <h3 className={s.exHead}>
            <span className={s.exNo}>02</span>
            <span className={s.exName}>
              COSTOM
              <br />
              FRONT FACE
            </span>
          </h3>
          <p className={s.exText}>
            社用車とは思えない、タ
            <br />
            フでワイルドなフロント
            <br />
            フェイス
          </p>
        </div>
        <div className={`${s.exItem} ${s.ex03}`}>
          <h3 className={s.exHead}>
            <span className={s.exNo}>03</span>
            <span className={s.exName}>
              CUSTOM
              <br />
              HEAD LIGHT
            </span>
          </h3>
          <p className={s.exText}>
            商用バンからSUVへ。
            <br />
            ヘッドライトカスタムで
            <br />
            アウトドア感を演出しま
            <br />
            す。
          </p>
        </div>
        <div className={`${s.exItem} ${s.ex04}`}>
          <h3 className={s.exHead}>
            <span className={s.exNo}>04</span>
            <span className={s.exName}>LIFT-UP</span>
          </h3>
          <p className={s.exText}>
            商用車の取り回しの良さ
            <br />
            に、リフトアップで走破
            <br />
            性をプラス
          </p>
        </div>
        <div className={`${s.exItem} ${s.ex05}`}>
          <h3 className={s.exHead}>
            <span className={s.exNo}>05</span>
            <span className={s.exName}>RACK</span>
          </h3>
          <p className={s.exText}>
            「組み立てが面倒」「音がうるさそう」そんなルーフ
            <br />
            ラックのイメージを覆す、パパママカーズこだわりの
            <br />
            オリジナルモデル。
          </p>
        </div>
      </section>

      {/* ===== FLOW ===== */}
      <section className={s.flow}>
        <OutlineTitle en="Flow" ja="予約から来場までの流れ" className={s.flowTitle} />
        <ol className={s.flowList}>
          {FLOW.map((f) => (
            <li key={f.no} className={s.flowItem}>
              <span className={s.flowNo}>{f.no}</span>
              <span className={s.flowText}>{f.text}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== FAQ ===== */}
      <section className={s.faq}>
        <OutlineTitle en="FAQ" ja="Q&A" className={s.faqTitle} />
        <dl className={s.faqList}>
          {FAQ.map((f) => (
            <div key={f.q} className={s.faqItem}>
              <dt className={s.faqQ}>{f.q}</dt>
              <dd className={s.faqA}>{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ===== PREMIUM SELECTION ===== */}
      <section className={s.premium}>
        <Image
          className={s.premiumBg}
          src="/images/premium-bg.jpg"
          width={596}
          height={743}
          sizes={FULL}
          alt="PREMIUM SELECTION"
        />
        <p className={s.premiumText}>
          <span className={s.premiumStrong}>特選車</span>も
          <br />
          ご覧になれます!
        </p>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={s.footer}>
        <div className={s.btnPair}>
          <Cta type="consultation" position="footer" className={`${s.btnSmall} ${s.btnOrange}`}>
            相談予約
          </Cta>
          <Cta type="paint-event" position="footer" className={`${s.btnSmall} ${s.btnLime}`}>
            塗装体験予約
          </Cta>
        </div>

        <Image
          className={s.footerLogo}
          src="/images/logo-footer.jpg"
          width={441}
          height={85}
          sizes="(max-width: 450px) 74vw, 333px"
          alt="PAPAMAMA CAR'S"
        />

        <div className={s.store}>
          <h3 className={s.storeName}>【ららぽーと堺店】</h3>
          <p className={s.storeText}>
            大阪府堺市美原区黒山　22-1
            <br />
            営業時間：10:00〜21:00
            <br />
            ※営業時間・定休日はららぽーと堺に準じます。詳し
            <br />
            くはホームページなどでご確認ください。
          </p>
        </div>
        <div className={s.store}>
          <h3 className={s.storeName}>【ららぽーと湘南平塚店】</h3>
          <p className={s.storeText}>
            神奈川県平塚市天沼　10-1-15130
            <br />
            営業時間：10:00〜21:00
            <br />
            ※営業時間・定休日はららぽーと湘南平塚に準じま
            <br />
            す。詳しくはホームページなどでご確認ください。
          </p>
        </div>

        <div className={s.eventBox}>
          <p className={s.eventName}>
            GO OUT CAMP
            <br />
            vol.22
          </p>
          <p className={s.eventDate}>
            <span className={s.eventYear}>2026</span>
            <span className={s.eventDays}>
              2<i className={s.dayFri}>金</i>·3<i className={s.daySat}>土</i>·4<i className={s.daySun}>日</i>
            </span>
          </p>
        </div>

        <p className={s.follow}>Follow Us</p>
        <ul className={s.sns}>
          <li>
            <span className={s.snsCircle} aria-label="Instagram" role="img">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <rect x="6" y="6" width="36" height="36" rx="10" fill="none" stroke="#fff" strokeWidth="4" />
                <circle cx="24" cy="24" r="8.5" fill="none" stroke="#fff" strokeWidth="4" />
                <circle cx="34.5" cy="13.5" r="2.6" fill="#fff" />
              </svg>
            </span>
          </li>
          <li>
            <span className={s.snsCircle} aria-label="Facebook" role="img">
              <svg viewBox="0 0 48 48" aria-hidden="true">
                <path
                  fill="#fff"
                  d="M26.8 46V27.6h6.2l.9-7.2h-7.1v-4.6c0-2.1.6-3.5 3.6-3.5H34V5.9c-.7-.1-2.9-.3-5.5-.3-5.5 0-9.2 3.3-9.2 9.4v5.4H13v7.2h6.3V46h7.5Z"
                />
              </svg>
            </span>
          </li>
          <li>
            <Cta type="consultation" position="footer-sns" className={s.snsLine}>
              <svg viewBox="0 0 88 88" aria-hidden="true">
                <circle cx="44" cy="44" r="44" fill="#fff" />
                <path
                  fill="#1b1b1b"
                  transform="translate(44 44) scale(1.06) translate(-44 -44)"
                  d="M44 20c-14.4 0-26 9.4-26 21 0 10.4 9.2 19.1 21.7 20.7.8.2 2 .6 2.3 1.3.3.7.2 1.7.1 2.4l-.4 2.2c-.1.7-.5 2.6 2.3 1.4 2.8-1.2 15-8.8 20.4-15.1 3.8-4.1 5.6-8.3 5.6-12.9 0-11.6-11.6-21-26-21Z"
                />
                <text x="44" y="48" textAnchor="middle" fontSize="14.5" fontWeight="800" fill="#fff" fontFamily="Arial, sans-serif">
                  LINE
                </text>
              </svg>
              <span className="visually-hidden">LINE</span>
            </Cta>
          </li>
        </ul>

        <p className={s.copyright}>COPYRIGHT(C) 2022 PapaMama CAR&apos;S All Rights Reserved.</p>
      </footer>
    </main>
  );
}
