import { SET_FORM_DATA, RESET_FORM_DATA } from './formTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}

export const resetFormData = () => {
    return {
        type: RESET_FORM_DATA,
    }
}