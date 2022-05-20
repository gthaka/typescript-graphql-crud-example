import { User } from "../entity/User";
import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field
} from "type-graphql";
import { LogTrails } from "../entity/LogTrails";

@InputType()
class LogTrailsInput {
  @Field(() => Int)
  user: User;
}

@InputType()
class LogTrailsUpdateInput {
  @Field(() => Int)
  user: User;
}

@Resolver()
export class LogTrailsResolver {
  @Mutation(() => LogTrails)
  async createLogTrails(@Arg("options", () => LogTrailsInput) options: LogTrailsInput) {
    const logTrail = await LogTrails.create(options).save();
    return logTrail;
  }

  @Mutation(() => Boolean)
  async updateLogTrails(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => LogTrailsUpdateInput) input: LogTrailsUpdateInput
  ) {
    await LogTrails.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteLogTrails(@Arg("id", () => Int) id: number) {
    await LogTrails.delete({ id });
    return true;
  }

  @Query(() => [LogTrails])
  logTrails() {
    return LogTrails.find();
  }
}
