import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  title?: SortOrder;
  mineId?: SortOrder;
};
