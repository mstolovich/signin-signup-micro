/* eslint-disable */
import React from 'react';

import Button from './Button';

export default {
    component: Button,
    title: 'Design System/Primitives/Button',
}

const Template = args => <Button { ...args } />

export const SubmitButton = Template.bind({})
SubmitButton.args = {
    children:"LogIn",
    size:'medium',
    type:'submit',
    color: 'primary',
    variant: 'contained'
}
