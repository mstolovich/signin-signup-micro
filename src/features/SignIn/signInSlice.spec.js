import signInReducer from "./signInSlice";
import {setValues} from "./signInSlice";


describe('SignIn reducer', () => {
    it('should handle initial state', () =>{
        expect(signInReducer(undefined, {})).toEqual([{
            isValid: false,
            values: {},
            touched: {},
            errors: {},
        }])
    })

    it ('should handle setValues', ()=>{
        expect(
            signInReducer([{
                    isValid: false,
                    values: {},
                    touched: {},
                    errors: {},
                }],
                {type: setValues.type, payload:{values: 'swq'}
    })).toEqual([{
                isValid: false,
                values: 'swq',
                touched: {},
                errors: {},
            }])
    })

    it ('should handle setValues', ()=>{
        expect(
            signInReducer([{
                    isValid: false,
                    values: {},
                    touched: {},
                    errors: {},
                }],
                {type: setValues.type, payload:{ es: 'swq'}
                })).toEqual([{
            isValid: false,
            values: 'swq',
            touched: {},
            errors: {},
        }])
    })
})