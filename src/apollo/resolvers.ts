import { Query, Resolver } from "type-graphql";
import { RESUME_DATA } from "../data/resume-data";
import { resumeDataToGraphQL } from "../lib/types";
import { Me } from "./type-defs";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    return resumeDataToGraphQL(RESUME_DATA);
  }
}
