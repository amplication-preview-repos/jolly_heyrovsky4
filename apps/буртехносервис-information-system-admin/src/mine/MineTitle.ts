import { Mine as TMine } from "../api/mine/Mine";

export const MINE_TITLE_FIELD = "name";

export const MineTitle = (record: TMine): string => {
  return record.name?.toString() || String(record.id);
};
