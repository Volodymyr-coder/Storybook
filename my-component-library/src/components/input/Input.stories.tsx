import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Input } from './Input';
import './input.module.css';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input
};
export default meta;

type Story = StoryObj<typeof Input>;

const ControlledWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const TextInput: Story = {
  render: (args) => <ControlledWrapper {...args} />,
  args: {
    type: 'text',
    value: 'something...',
    clearable: true
  }
};

export const PasswordInput: Story = {
  render: (args) => <ControlledWrapper {...args} />,
  args: {
    type: 'password',
    value: '123password'
  }
};

export const NumberInput: Story = {
  render: (args) => <ControlledWrapper {...args} />,
  args: {
    type: 'number',
    value: '09'
  }
};
