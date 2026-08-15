export type WindowId = 
  | 'services-app' 
  | 'products-app'
  | 'portfolio-app'
  | 'blog-app' 
  | 'contact-app' 
  | 'appointment-app' 
  | 'about-app'
  | 'ai-terminal';

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface ShortcutItem {
  id: WindowId;
  label: string;
  type: 'app' | 'folder' | 'copilot' | 'recycle';
  iconType: string;
  badge?: string;
}
