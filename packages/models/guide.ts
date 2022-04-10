export interface IGuide {
  id: string;
  slug: string;
  title: string;
  published: "published" | "draft" | "deleted";
  content: string;
}
