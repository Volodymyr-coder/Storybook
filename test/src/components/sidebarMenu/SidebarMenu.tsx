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

export const SidebarMenu = ({ items, isOpen, onClose }: SidebarMenuProps) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <>
      {isOpen && <div className={css.overlay} onClick={onClose} />}
      <div className={`${css.sidebar} ${isOpen ? css.open : ''}`}>
        <ul className={css.menuList}>
          {items.map((item, index) => (
            <li key={index} className={css.menuItem}>
              <div onClick={() => item.children && toggleExpand(item.label)}>
                {item.label}
              </div>
              {item.children && expandedItems.includes(item.label) && (
                <ul className={css.submenuList}>
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex} className={css.submenuItem}>
                      {child.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
