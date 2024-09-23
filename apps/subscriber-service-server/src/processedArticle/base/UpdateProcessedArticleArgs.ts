/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcessedArticleWhereUniqueInput } from "./ProcessedArticleWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProcessedArticleUpdateInput } from "./ProcessedArticleUpdateInput";

@ArgsType()
class UpdateProcessedArticleArgs {
  @ApiProperty({
    required: true,
    type: () => ProcessedArticleWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProcessedArticleWhereUniqueInput)
  @Field(() => ProcessedArticleWhereUniqueInput, { nullable: false })
  where!: ProcessedArticleWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProcessedArticleUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProcessedArticleUpdateInput)
  @Field(() => ProcessedArticleUpdateInput, { nullable: false })
  data!: ProcessedArticleUpdateInput;
}

export { UpdateProcessedArticleArgs as UpdateProcessedArticleArgs };