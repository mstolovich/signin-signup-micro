import {createSlice} from "@reduxjs/toolkit";

const signInSlice = createSlice({
    name: 'signIn',
    initialState:[{
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    }],
    reducers: {
        setValues(state, action) {
            state[0]['values'] = action.payload.values
        }
    }
})

export const { setValues } = signInSlice.actions

export default signInSlice.reducer