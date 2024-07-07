import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type EquipmentCreateInput = {
  name?: string | null;
  typeField?: string | null;
  mine?: MineWhereUniqueInput | null;
};
