declare namespace API {
  type RequestPage = {
    limit: number;
    page: number;
    [propName: string]: any;
  };
  type CommonState = {
    searchForm: RequestPage;
  };
  namespace Role {
    type RoleItem = {
      id?: number;
      roleName: string;
      remark: string;
    };
    type RoleState = CommonState & {
      formVisible: boolean;
      rolesData: RoleItem[];
    };
  }
  namespace Manager {
    type ManagerItem = {
      id: string;
      name: string;
      account: string;
      email: string;
      phone: string;
      remark: string;
    };
    type ManagerFormItem = ManagerItem & {
      roles: number[];
    };
    type ManagerTableItem = ManagerItem & {
      roles: Role.RoleItem[];
    };
    type ManagerState = CommonState & {
      formVisible: boolean;
      rolesData: Role.RoleItem[];
    };
  }
  namespace Tag {
    type TagItem = {
      id: string;
      name: string;
    };
    type TagState = CommonState & {
      formVisible: boolean;
    };
  }
}
