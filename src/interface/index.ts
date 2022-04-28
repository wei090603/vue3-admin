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
      id: number | string;
      roleName: string;
      remark: string;
      mark: string;
    };
    type RoleState = CommonState & {
      formVisible: boolean;
      rolesData: RoleItem[];
      resourcesData: Resources.ResourcesItem[];
      resourcesVisible: boolean;
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
  namespace Category {
    type CategoryItem = {
      id: string;
      title: string;
      grade: number;
      children: CategoryItem[];
    };
    type CategoryAdd = {
      id: string;
      parentId: number;
      title: string;
      grade: number;
    };
    type CategoryState = CommonState & {
      formVisible: boolean;
      parentName: string;
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
  namespace Advertise {
    enum Type {
      HOME = 'home',
    }
    type AdvertiseItem = {
      id: string;
      title: string;
      picture: string;
      type: Type;
      status: boolean;
      describe: string;
    };
    type AdvertiseState = CommonState & {
      formVisible: boolean;
    };
  }
  namespace Menu {
    type MenuItem = {
      id: string;
      title: string;
      link: string;
      sort: number | string;
    };
    type Search = {
      [propName: string]: any;
    };
    type MenuState = {
      formVisible: boolean;
      searchForm: Search;
    };
  }
  namespace LoginLogger {
    type LoginLoggerItem = {
      id: string;
      account: string;
      loginAddress: string;
      loginIp: string;
    };
  }
  namespace Notice {
    type NoticeItem = {
      id: string;
      title: string;
      type: number;
      status: boolean;
    };

    type NoticeFormItem = NoticeItem & {
      content: string;
    };

    type NoticeTableItem = NoticeItem & {
      createBy: string;
    };

    type NoticeState = CommonState & {};
  }

  namespace Resources {
    type ResourcesItem = {
      title: string;
      id: number | string;
      parentId: number | string;
      path: string;
      icon: string;
      type: string;
      status: boolean;
    };

    type State = {
      formVisible: boolean;
      resourcesData: ResourcesItem[];
      parentName: string;
    };
  }

  namespace Article {
    type State = CommonState & {};
  }
}
