import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from 'react-redux'
import { saveFormData, resetFormData } from "../../redux/form/formActions";
import { motion } from 'framer-motion';
import ModalInfo from '../../components/ModalInfo';
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: ''});
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showModalError, setShowModalError] = useState(false);
    const [showModalLogout, setShowModalLogout] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if(form.password_secret === values.password)
            dispatch(saveFormData(values));
        else
        {
            console.log('son distintos!!!');
            setShowModalError(true);
        }
    };

    const mostrarModalInfo = () => {
        setShowModalInfo(true);
    };

    const hideModalInfo = () => {
        setShowModalInfo(false);
    };

    const hideModalError = () => {
        setShowModalError(false);
    };

    const toggleVerPassword = () => {
        setShowPassword(!showPassword);
    };

    const toogleModalLogout = () => {
        setShowModalLogout(!showModalLogout);
    };

    const handleLogout = () => {
        dispatch(resetFormData());
        resetForm();
        setShowModalLogout(false);
    };

    const messageLogout = "¿Estás seguro de que quieres cerrar sesión?";

    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <div className="container">
                <ModalInfo 
                    visible={showModalInfo}
                    message="Bienvenidos al módulo VII"
                    onClose={hideModalInfo}
                />
                <ModalInfo 
                    visible={showModalError}
                    message="Password incorrecto"
                    onClose={hideModalError}
                />
                <ModalInfo 
                    visible={showModalLogout}
                    message={messageLogout}
                    onClose={toogleModalLogout}
                    onConfirm={handleLogout}
                />
                <form onSubmit={handleSubmit}>
                    <h5>username: {form.formData.username}</h5>
                    <h5>email: {form.formData.email}</h5>
                    <h5>password: {form.formData.password}</h5>
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
                            type="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input 
                            name="password"
                            placeholder="password"
                            onChange={handleChange} 
                            value={values.password} 
                            type={showPassword ? "text" : "password"}
                        />
                        <button type="button" onClick={toggleVerPassword}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="button-container">
                        <button type="submit">Submit</button>
                        <button 
                            className="logout-link"
                            type="button"
                            onClick={toogleModalLogout}
                        >
                                Logout
                        </button>

                    </div>
                    
                </form>
            </div>
        </motion.div>
    );
};

export default LoginForm;
