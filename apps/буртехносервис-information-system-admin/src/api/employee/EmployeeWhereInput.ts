import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type EmployeeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
  mine?: MineWhereUniqueInput;
};
