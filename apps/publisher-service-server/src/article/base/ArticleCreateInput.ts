/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentCreateNestedManyWithoutArticlesInput } from "./CommentCreateNestedManyWithoutArticlesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ArticleCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutArticlesInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutArticlesInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutArticlesInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutArticlesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  publishedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { ArticleCreateInput as ArticleCreateInput };
