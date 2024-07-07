import { Mine } from "../mine/Mine";

export type Equipment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField: string | null;
  mine?: Mine | null;
};
