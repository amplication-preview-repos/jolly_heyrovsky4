import { MineWhereUniqueInput } from "../mine/MineWhereUniqueInput";

export type EquipmentUpdateInput = {
  name?: string | null;
  typeField?: string | null;
  mine?: MineWhereUniqueInput | null;
};
