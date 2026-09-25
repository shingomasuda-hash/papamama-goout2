import type { StaticImageData } from "next/image";
import imgStaff1 from "../../public/images/staff/staff-01.png";
import imgStaff2 from "../../public/images/staff/staff-02.png";
import imgStaff3 from "../../public/images/staff/staff-03.png";
import imgStaff4 from "../../public/images/staff/staff-04.png";
import imgStaff5 from "../../public/images/staff/staff-05.png";
import imgStaff6 from "../../public/images/staff/staff-06.png";

/**
 * スタッフ紹介スライダーのデータ（前回LPと同じスタッフカード素材）。
 * カード画像には看板・写真・名前・プロフィールが含まれる（586×816px の透過PNG）。
 * 並び替え・追加はこの配列を編集するだけでスライドとドットに反映される。
 */
export type StaffMember = { src: StaticImageData; name: string; kana: string };

export const STAFF: StaffMember[] = [
  { src: imgStaff2, name: "飯沼 蒼太郎", kana: "イイヌマ ソウタロウ" },
  { src: imgStaff3, name: "後藤 朱里", kana: "ゴトウ アカリ" },
  { src: imgStaff1, name: "森行 啓太", kana: "モリユキ ケイタ" },
  { src: imgStaff4, name: "高木 流星", kana: "タカギ リュウセイ" },
  { src: imgStaff5, name: "山田 零音", kana: "ヤマダ レオト" },
  { src: imgStaff6, name: "松浦 加奈", kana: "マツウラ カナ" },
];

/** 初期表示（見本では森行さんが3番目のドットで表示されている） */
export const STAFF_INITIAL_INDEX = 2;
