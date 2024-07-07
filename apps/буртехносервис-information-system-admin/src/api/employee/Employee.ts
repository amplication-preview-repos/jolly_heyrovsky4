import { Mine } from "../mine/Mine";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  position: string | null;
  mine?: Mine | null;
};
