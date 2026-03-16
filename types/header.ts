// ─── Header Types ─────────────────────────────────────────────────────────────
// All TypeScript interfaces for the Header mega-menu component.
// When connecting Supabase, these types map 1-to-1 with your DB row shapes.

export interface NavItem {
  title: string;
  description?: string;
  href: string;
}

export interface NavSection {
  colTitle?: string;
  items: NavItem[];
  /** Makes the column title span full width (used for wide label sections) */
  stretch?: boolean;
  /** Adds a visual left border separator on desktop */
  separator?: boolean;
}

export interface ResourcePanel {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
}

export interface SubMenu {
  title?: string;
  titleHref?: string;
  titleDescription?: string;
  titleButtonLabel?: string;
  columns: NavSection[];
  resource?: ResourcePanel;
}

/** Items inside the Products "promo sidebar" */
export interface PromoItem {
  type: "title" | "item" | "divider" | "link";
  label?: string;
  subMenu?: SubMenu;
  href?: string;
}

/** Top-level navigation entries */
export interface TopNavItem {
  label: string;
  href?: string;
  /** simple = plain link | mega = full-width dropdown | promo-mega = sidebar + content panel */
  type: "simple" | "mega" | "promo-mega";
  megaMenu?: SubMenu;
  promoItems?: PromoItem[];
}

export interface UtilityLink {
  label: string;
  href: string;
}

export interface Language {
  label: string;
  href: string;
}