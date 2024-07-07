import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type MaterialWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: IntNullableFilter;
  mine?: MineWhereUniqueInput;
};
