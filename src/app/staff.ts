/**
 * スタッフ紹介スライダーのデータ。
 * 1件追加するとスライドとドットが1つずつ増える（2件以上でスワイプ・ドット操作が有効になる）。
 *
 * photo: 背景を切り抜いた透過PNG（public/images/ 配下）。
 *   left / top / width は看板スライド（幅470px × 高さ602px、見本基準のpx）上の配置。
 *   省略時は森行さんと同じ位置・サイズ（看板中央に立つ構図）になる。
 * hobby / skill / comment: 看板に表示する文言。配列の要素ごとに改行する。
 */
export type StaffMember = {
  name: string;
  kana: string;
  photo: {
    src: string;
    width: number;
    height: number;
    left?: number;
    top?: number;
  };
  hobby: string[];
  skill: string[];
  comment: string[];
};

export const STAFF: StaffMember[] = [
  {
    name: "森行 啓太",
    kana: "モリユキ ケイタ",
    photo: { src: "/images/staff-moriyuki.png", width: 220, height: 328 },
    hobby: ["キャンプ、サップ、サッカー、", "スノボー、ダイビング"],
    skill: ["お客様を笑顔にできる！"],
    comment: ["お客様にとって最高の１台をご", "提案します！"],
  },
];

/** 初期表示するスライド（見本では5人中の中央＝3人目が表示されている） */
export const STAFF_INITIAL_INDEX = Math.floor((STAFF.length - 1) / 2);
