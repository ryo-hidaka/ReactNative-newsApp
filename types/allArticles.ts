import { Article } from "./article";

export type AllArticles = {
  status?: string;
  totalResults?: number;
  articles: Article[];
};
