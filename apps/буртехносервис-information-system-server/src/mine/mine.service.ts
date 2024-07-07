import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MineServiceBase } from "./base/mine.service.base";

@Injectable()
export class MineService extends MineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
