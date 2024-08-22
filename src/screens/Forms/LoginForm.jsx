import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from 'react-redux'
import { saveFormData } from "../../redux/form/formActions";

const LoginForm = () => {
    const [values, handleChange] = useForm({ username: '', email: ''});
    const form = useSelector(state => state.form); 
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        dispatch(saveFormData(values));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h5>username: {form.formData.username}</h5>
                <h5>email: {form.formData.email}</h5>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        name="username"
                        placeholder="username"
                        onChange={handleChange} 
                        value={values.username} 
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        name="email"
                        placeholder="email"
                        onChange={handleChange} 
                        value={values.email} 
                    />
                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginForm;