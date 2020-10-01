import React from "react";

import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";


import LearnMoreLink from "./LearnMoreLink";

export default {
    component: LearnMoreLink,
    title: 'Design System/Atoms/LearnMoreLink',
}

const Template = args => <LearnMoreLink {...args} />

export const Default = Template.bind({})

Default.args = {
    title: 'Learn More...',
    component: 'a'
}

export const WithRouter = Template.bind({})

WithRouter.args = {
    title: 'Learn More...'
}

const browserHistory = createBrowserHistory()

WithRouter.decorators = [(Story) =>
    <Router history={browserHistory}>
        <Story />
    </Router>
]