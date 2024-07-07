import { EmployeeUpdateManyWithoutMinesInput } from "./EmployeeUpdateManyWithoutMinesInput";
import { EquipmentUpdateManyWithoutMinesInput } from "./EquipmentUpdateManyWithoutMinesInput";
import { MaterialUpdateManyWithoutMinesInput } from "./MaterialUpdateManyWithoutMinesInput";
import { ReportUpdateManyWithoutMinesInput } from "./ReportUpdateManyWithoutMinesInput";

export type MineUpdateInput = {
  name?: string | null;
  location?: string | null;
  employees?: EmployeeUpdateManyWithoutMinesInput;
  equipmentItems?: EquipmentUpdateManyWithoutMinesInput;
  materials?: MaterialUpdateManyWithoutMinesInput;
  reports?: ReportUpdateManyWithoutMinesInput;
};
