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

declare namespace API {
  type RequestPage = {
    limit: number;
    page: number;
  };
  namespace Tag {
    type TagItem = {
      title: string;
    };
  }
}
