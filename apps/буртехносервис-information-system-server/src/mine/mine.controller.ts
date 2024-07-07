import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MineService } from "./mine.service";
import { MineControllerBase } from "./base/mine.controller.base";

@swagger.ApiTags("mines")
@common.Controller("mines")
export class MineController extends MineControllerBase {
  constructor(protected readonly service: MineService) {
    super(service);
  }
}
