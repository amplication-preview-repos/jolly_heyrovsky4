import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type EquipmentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
  mine?: MineWhereUniqueInput;
};
