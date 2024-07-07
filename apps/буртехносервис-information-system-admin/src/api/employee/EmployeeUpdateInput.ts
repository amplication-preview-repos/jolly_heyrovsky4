import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type EmployeeUpdateInput = {
  name?: string | null;
  position?: string | null;
  mine?: MineWhereUniqueInput | null;
};
