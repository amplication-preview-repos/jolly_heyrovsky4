import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type ReportUpdateInput = {
  content?: string | null;
  title?: string | null;
  mine?: MineWhereUniqueInput | null;
};
