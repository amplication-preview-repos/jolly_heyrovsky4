import { Employee } from "../employee/Employee";
import { Equipment } from "../equipment/Equipment";
import { Material } from "../material/Material";
import { Report } from "../report/Report";

export type Mine = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  employees?: Array<Employee>;
  equipmentItems?: Array<Equipment>;
  materials?: Array<Material>;
  reports?: Array<Report>;
};
