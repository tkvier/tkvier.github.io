// data/models.ts
export interface Model {
  family: string;
  version: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
}

export const models: Model[] = [
  {
    family: "SD1.5",
    version: "v2-realistic",
    title: "SD1.5 v2 Realistic",
    description: "高品質なリアル系表現に特化したSD1.5の第2世代モデルです。",
    tags: ["Realistic", "High-Res", "Portrait"],
    images: [
      "/images/sd15-v2-realistic/1.jpg",
      "/images/sd15-v2-realistic/2.jpg",
      "/images/sd15-v2-realistic/3.jpg",
      // ...5〜20枚
    ],
  },
  // 他のモデルも同様に定義
];
