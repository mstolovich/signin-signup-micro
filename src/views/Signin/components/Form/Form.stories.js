import React from 'react';

import Form from "./Form";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export default {
    component: Form,
    title: 'Pages/Components/Form',
}

const Template = args => <Form { ...args } />

export const SigninForm = Template.bind({})
SigninForm.decorators=[Story => <Router history={createBrowserHistory()}><Story /></Router> ]

