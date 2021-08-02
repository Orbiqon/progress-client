import React from 'react';
import { MobileForm, TextField } from './index';

export default {
  title: 'Form',
  component: MobileForm,
  argTypes: {
    icon: {
      options: ['email', 'phone', 'name', ''],
      control: { type: 'select' },
    },
    border: {
      options: ['border', 'none'],
      control: { type: 'radio' },
    },
    indent: {
      options: ['59', '20'],
      control: { type: 'radio' },
    },
  },
};

export const mobileForm = () => <MobileForm />;

const Template = (args) => <TextField {...args} />;

export const textField = Template.bind({});

textField.args = {
  placeholder: 'Email',
  icon: 'email',
  height: '59',
  indent: '59',
  border: 'border',
  pb: '0',
  pt: '0',
};
