export interface MenuItem {
  key: string;
  url: string;
  submenuItems?: SubMenuItem[];
  isActive?: boolean;
}

export interface SubMenuItem {
  key: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}
