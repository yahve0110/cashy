export type BackgroundItem = {
  id: string;
  name: string;
  image: string;
  status: "buy" | "owned" | "locked" | "selected";
  price?: number;
  note?: string;
};
