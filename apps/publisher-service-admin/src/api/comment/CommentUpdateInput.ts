import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type CommentUpdateInput = {
  article?: ArticleWhereUniqueInput | null;
  authorName?: string | null;
  content?: string | null;
};
