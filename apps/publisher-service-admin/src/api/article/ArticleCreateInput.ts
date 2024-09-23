import { CommentCreateNestedManyWithoutArticlesInput } from "./CommentCreateNestedManyWithoutArticlesInput";

export type ArticleCreateInput = {
  comments?: CommentCreateNestedManyWithoutArticlesInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
