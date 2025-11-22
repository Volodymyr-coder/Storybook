import { SidebarMenu } from './SidebarMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SidebarMenu> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenu
};
export default meta;

type Story = StoryObj<typeof SidebarMenu>;

export const Default: Story = {
  args: {
    isOpen: true,
    items: [
      { label: 'Home' },
      {
        label: 'Products',
        children: [{ label: 'Product 1' }, { label: 'Product 2' }]
      }
    ]
  }
};
