import React from 'react';
import { Meta, Story } from '@storybook/react';
import Basic from '../src/Basic';

const meta: Meta = {
  title: 'Basic',
  component: Basic,
};

export default meta;

const Template: Story = args => <Basic {...args} />;

export const Default = Template.bind({});

Default.args = {};
