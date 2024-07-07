import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type EmployeeCreateInput = {
  name?: string | null;
  position?: string | null;
  mine?: MineWhereUniqueInput | null;
};
