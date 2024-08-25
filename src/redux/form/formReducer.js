import { SET_FORM_DATA, RESET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: ''
    },

    password_secret: 'mod7ReactUSIP'
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                // para el uso de objetos:
                formData: {
                    ...state.formData,
                    ...action.payload
                },
            }
        }
        case RESET_FORM_DATA: {
            return {
                ...state,
                formData: initialState.formData
            }
        }
        default:
            return state;
    }
};

export default formReducer;