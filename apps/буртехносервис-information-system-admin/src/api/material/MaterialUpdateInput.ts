import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type MaterialUpdateInput = {
  name?: string | null;
  quantity?: number | null;
  mine?: MineWhereUniqueInput | null;
};
