import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import './toast.module.css';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const SuccessToast: Story = {
  args: {
    message: 'Success! Your changes have been saved.',
    type: 'success',
    duration: 3000
  }
};

export const ErrorToast: Story = {
  args: {
    message: 'Error! Something went wrong.',
    type: "info",
    duration: 5000
  }
};
