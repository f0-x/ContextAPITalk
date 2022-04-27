export interface ISubMenu extends IMenuLink {
  subMenu: ISubMenu[];
}

export interface IMenuLink {
  id: string;
  label: string;
  link: string;
}

export interface IPrimaryMenu extends IMenuLink {
  subMenu: ISubMenu[];
}

export interface IHeader {
  primaryMenu: IPrimaryMenu[];
  secondaryMenu: IMenuLink[];
  productMenu: IMenuLink[];
  footerMenu: IMenuLink[];
}
