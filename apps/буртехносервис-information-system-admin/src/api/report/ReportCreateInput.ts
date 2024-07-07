import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type ReportCreateInput = {
  content?: string | null;
  title?: string | null;
  mine?: MineWhereUniqueInput | null;
};
