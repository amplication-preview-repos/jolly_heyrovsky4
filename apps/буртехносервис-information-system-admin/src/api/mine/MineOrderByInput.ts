import { SortOrder } from "../../util/SortOrder";

export type MineOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
};
