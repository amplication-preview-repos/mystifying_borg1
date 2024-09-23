import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  articleId?: SortOrder;
  authorName?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
