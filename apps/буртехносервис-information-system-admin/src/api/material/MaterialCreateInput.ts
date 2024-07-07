import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type MaterialCreateInput = {
  name?: string | null;
  quantity?: number | null;
  mine?: MineWhereUniqueInput | null;
};
