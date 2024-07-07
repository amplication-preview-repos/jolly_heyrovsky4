import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  mineId?: SortOrder;
};
