import { Mine } from "../mine/Mine";

export type Material = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  quantity: number | null;
  mine?: Mine | null;
};
