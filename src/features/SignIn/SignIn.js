import React, { useState } from "react";
import PropTypes from "prop-types";

import InputField from "components/InputField";
import Button from "components/Button";
import { Grid } from "@material-ui/core";

const SignIn = () => {
  const [formState, setFormState] = useState({
    values: {},
  });
  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
    }));
  };

  return (
    <div data-testid="SignIn">

      <Grid
        container
        direction="column"
        spacing={1}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <InputField value={formState.values.name || ''} name="name" labelText="Name" type="text" variant="outlined" onChange={handleChange} />
        </Grid>
        <Grid item>
          <InputField value={formState.values.password || ''}name="password" labelText="Password" type="password" variant="outlined" onChange={handleChange} />
        </Grid>
        <Grid item>
          <Button
            color="primary"
            size="medium"
            type="submit"
            variant="contained"
          >
            LogIn
          </Button>
        </Grid>

      </Grid>
    </div>
  );
};

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
