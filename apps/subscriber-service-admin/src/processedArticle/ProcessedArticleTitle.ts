import { ProcessedArticle as TProcessedArticle } from "../api/processedArticle/ProcessedArticle";

export const PROCESSEDARTICLE_TITLE_FIELD = "articleId";

export const ProcessedArticleTitle = (record: TProcessedArticle): string => {
  return record.articleId?.toString() || String(record.id);
};
