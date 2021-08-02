import React from 'react';
import { Button, BackButton } from './index';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['green', 'blue'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  color: 'blue',
  value: 'back',
  width: '72',
  height: '32',
};
