import { SortOrder } from "../../util/SortOrder";

export type ProcessedArticleOrderByInput = {
  articleId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  processedAt?: SortOrder;
  updatedAt?: SortOrder;
};
