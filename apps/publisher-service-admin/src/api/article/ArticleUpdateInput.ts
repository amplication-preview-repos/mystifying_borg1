import { CommentUpdateManyWithoutArticlesInput } from "./CommentUpdateManyWithoutArticlesInput";

export type ArticleUpdateInput = {
  comments?: CommentUpdateManyWithoutArticlesInput;
  content?: string | null;
  publishedAt?: Date | null;
  title?: string | null;
};
