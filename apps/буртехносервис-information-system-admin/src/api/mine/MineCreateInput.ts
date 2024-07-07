import { EmployeeCreateNestedManyWithoutMinesInput } from "./EmployeeCreateNestedManyWithoutMinesInput";
import { EquipmentCreateNestedManyWithoutMinesInput } from "./EquipmentCreateNestedManyWithoutMinesInput";
import { MaterialCreateNestedManyWithoutMinesInput } from "./MaterialCreateNestedManyWithoutMinesInput";
import { ReportCreateNestedManyWithoutMinesInput } from "./ReportCreateNestedManyWithoutMinesInput";

export type MineCreateInput = {
  name?: string | null;
  location?: string | null;
  employees?: EmployeeCreateNestedManyWithoutMinesInput;
  equipmentItems?: EquipmentCreateNestedManyWithoutMinesInput;
  materials?: MaterialCreateNestedManyWithoutMinesInput;
  reports?: ReportCreateNestedManyWithoutMinesInput;
};
