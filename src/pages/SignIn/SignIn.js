import React from 'react';
import PropTypes from 'prop-types';

import  InputField  from '../../components/InputField/InputField';
import  Button  from '../../components/Button/Button';


const SignIn = () => (
  <div data-testid="SignIn">
      <InputField
          labelText="Password"
          type="password"
          variant="outlined"
      />
      <InputField
          labelText="Name"
          type="text"
          variant="outlined"
      />
      <Button
          color="primary"
          size="medium"
          type="submit"
          variant="contained"
      >
          LogIn
      </Button>
  </div>
);

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
