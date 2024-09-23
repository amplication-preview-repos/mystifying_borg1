import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ProcessedArticleWhereInput = {
  articleId?: StringNullableFilter;
  id?: StringFilter;
  processedAt?: DateTimeNullableFilter;
};