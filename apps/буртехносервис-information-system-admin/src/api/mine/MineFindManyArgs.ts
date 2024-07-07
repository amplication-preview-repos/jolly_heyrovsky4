import { MineWhereInput } from "./MineWhereInput";
import { MineOrderByInput } from "./MineOrderByInput";

export type MineFindManyArgs = {
  where?: MineWhereInput;
  orderBy?: Array<MineOrderByInput>;
  skip?: number;
  take?: number;
};
