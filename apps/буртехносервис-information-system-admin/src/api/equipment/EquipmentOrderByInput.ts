import { SortOrder } from "../../util/SortOrder";

export type EquipmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  mineId?: SortOrder;
};
