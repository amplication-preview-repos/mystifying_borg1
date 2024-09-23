import { ArticleWhereUniqueInput } from "../article/ArticleWhereUniqueInput";

export type CommentCreateInput = {
  article?: ArticleWhereUniqueInput | null;
  authorName?: string | null;
  content?: string | null;
};
