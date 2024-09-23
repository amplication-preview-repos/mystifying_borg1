import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentWhereInput = {
  article?: ArticleWhereUniqueInput;
  authorName?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
};
