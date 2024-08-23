import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const form = useSelector(state => state.form);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                {form.formData.username && form.formData.email ? (
                    <li>
                        Bienvenido {form.formData.username} : {form.formData.email}
                    </li>
                ) : (
                    <li>
                        No se inició sesión
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;