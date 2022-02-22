export interface PaginationSearch {
  page: number;
  limit: number;
  [propName: string]: any;
}

export interface Roles {
  id?: number;
  roleName: string;
  remark: string;
}
