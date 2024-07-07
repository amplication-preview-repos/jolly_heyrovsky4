import * as graphql from "@nestjs/graphql";
import { MineResolverBase } from "./base/mine.resolver.base";
import { Mine } from "./base/Mine";
import { MineService } from "./mine.service";

@graphql.Resolver(() => Mine)
export class MineResolver extends MineResolverBase {
  constructor(protected readonly service: MineService) {
    super(service);
  }
}
