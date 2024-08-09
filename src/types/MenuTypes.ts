// Define the type for a menu item
export interface MenuItem {
  id: string; // Unique identifier for the menu item
  title: string; // Title of the menu item
}

// Define the type for render item props
export interface RenderItemProps {
  item: MenuItem; // The menu item to render
}

// Define the type for Menu props
export interface MenuProps {}
