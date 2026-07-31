export interface NavLink {
  label: string;
  href: string;
  icon?: string;
  description?: string;
}

export interface MegaMenuItem {
  label: string;
  href?: string;
  icon?: string;
  description?: string;
  columns?: NavLink[][];
  children?: NavLink[];
}

export interface NavItem {
  label: string;
  href?: string;
  mega?: MegaMenuItem;
  children?: NavItem[];
}
