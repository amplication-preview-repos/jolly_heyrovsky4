import { Mine } from "../mine/Mine";

export type Report = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  title: string | null;
  mine?: Mine | null;
};
