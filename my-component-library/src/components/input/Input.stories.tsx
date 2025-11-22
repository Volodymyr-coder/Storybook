import { Input } from './Input';
import './input.css';
import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

export default {
  title: 'Components/Input',
  component: Input
} as Meta;

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: 'text',
  value: 'something...',
  clearable: true
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  value: '123password'
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: 'number',
  value: '09'
};
