import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import {SigninForm} from './Form.stories';

it('renders the SigninForm', () =>{
    render(<Router history={createBrowserHistory()}> <SigninForm /> </Router>);

})
