import { useState } from 'react';
import css from './sidebarMenu.module.css';

type MenuItem = {
  label: string;
  children?: MenuItem[];
};

type SidebarMenuProps = {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
};

export const SidebarMenu = ({ items, onClose }: SidebarMenuProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className={css.container}>
      <div className={css.sidebarOverlay} onClick={onClose} />
      <div className={css.menuList}>
        <ul className={css.menuList}>
          {items.map((item, index) => (
            <li key={index}>
              <div onClick={() => item.children && toggleExpand(item.label)}>
                {item.label}
              </div>
              {item.children && expandedItems.includes(item.label) && (
                <ul className={css.menuList}>
                  {item.children.map((child, childIndex) => (
                    <li className={css.menuItem} key={childIndex}>
                      {child.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
