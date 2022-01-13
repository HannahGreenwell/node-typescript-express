export interface BaseItem {
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface Item extends BaseItem {
  id: number;
}

export interface Items {
  [key: number]: Item;
}

export enum ItemPermissions {
  CreateItems = "create:items",
  UpdateItems = "update:items",
  DeleteItems = "delete:items",
}
