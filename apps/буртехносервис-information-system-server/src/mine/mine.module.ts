import { Module } from "@nestjs/common";
import { MineModuleBase } from "./base/mine.module.base";
import { MineService } from "./mine.service";
import { MineController } from "./mine.controller";
import { MineResolver } from "./mine.resolver";

@Module({
  imports: [MineModuleBase],
  controllers: [MineController],
  providers: [MineService, MineResolver],
  exports: [MineService],
})
export class MineModule {}
