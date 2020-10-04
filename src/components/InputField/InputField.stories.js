import React from 'react';

import InputField from './InputField';

export default {
    component: InputField,
    title:'Design System/Primitives/InputField'
}

const Template = args => <InputField { ...args } />

export const NameInput = Template.bind({})

NameInput.args = {
    labelText: 'Name',
}

export const PasswordInput = Template.bind({})

PasswordInput.args = {
    labelText: 'Password',
    type: 'password',
}