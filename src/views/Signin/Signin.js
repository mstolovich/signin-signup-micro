import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from './components';
import { LearnMoreLink } from 'src/views/Signin/components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
    root: {},
    formContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
        maxWidth: 500,
        margin: `0 auto`,
    },
    section: {
        paddingTop: 0,
        paddingBottom: 0,
    },
}));

const Signin = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Section className={classes.section}>
                <div className={classes.formContainer}>
                    <SectionHeader
                        title="Sign in"
                        subtitle={
                            <span>
                Don’t have an account?{' '}
                                <LearnMoreLink
                                    title="Sign up."
                                    href="/signup-simple"
                                    typographyProps={{ variant: 'h6' }}
                                />
              </span>
                        }
                        titleProps={{
                            variant: 'h3',
                        }}
                    />
                    <Form />
                </div>
            </Section>
        </div>
    );
};

export default Signin;
