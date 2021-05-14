export type SearchActionType = (query: string) => { type: string, payload: string };
export type MoreActionType = (query: string, page: number) => {
  type: string, payload: { query: string, page: number }
};
