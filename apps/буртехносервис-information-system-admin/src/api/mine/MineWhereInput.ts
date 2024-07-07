import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { EquipmentListRelationFilter } from "../equipment/EquipmentListRelationFilter";
import { MaterialListRelationFilter } from "../material/MaterialListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type MineWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  equipmentItems?: EquipmentListRelationFilter;
  materials?: MaterialListRelationFilter;
  reports?: ReportListRelationFilter;
};
