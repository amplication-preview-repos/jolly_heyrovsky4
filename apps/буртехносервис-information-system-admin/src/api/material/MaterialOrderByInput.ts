import { SortOrder } from "../../util/SortOrder";

export type MaterialOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  mineId?: SortOrder;
};
