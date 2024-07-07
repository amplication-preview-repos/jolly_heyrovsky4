import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type ReportWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  title?: StringNullableFilter;
  mine?: MineWhereUniqueInput;
};
