export interface Crud {
  create: (resource: any) => Promise<any>;
  list: (limit: number, page: number) => Promise<any>;
  readById: (id: string) => Promise<any>;
  putById: (id: string, resource: any) => Promise<string>;
  patchById: (id: string, resource: any) => Promise<string>;
  deleteById: (id: string) => Promise<any>;
}
