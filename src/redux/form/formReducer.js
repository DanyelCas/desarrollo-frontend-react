import { SET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: ''
    },
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
        default:
            return state;
    }
};

export default formReducer;