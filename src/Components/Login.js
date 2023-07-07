import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../Redux/Action";


const Login = () => {
    const dispatch = useDispatch();
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const { email, password } = formValues;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        dispatch(login(formValues))
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };
    return (
        <center>
            <div className="container">

                {
                    Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className="ui message success">Signed in successfully</div>
                    ) : (
                        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                    )
                }

                <form onSubmit={handleSubmit}>
                    <div className="col my-4">
                        <label htmlFor="email" className="fs-5">Email :</label>
                        <input
                            className="ms-5 p-2 w-25 rounded-pill"
                            onChange={handleChange}
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                        />
                    </div>
                    <p className="text-danger">{formErrors.email}</p>
                    <div className="col my-2">
                        <label htmlFor="password" className="fs-5">Password :</label>
                        <input
                            className="ms-3 p-2 w-25 rounded-pill"
                            type="text"
                            onChange={handleChange}
                            id="password"
                            name="password"
                            value={password}
                        />
                    </div>
                    <p className="text-danger">{formErrors.password}</p>
                    <button className="btn btn-info text-white px-5 my-4 fs-5" type="submit">
                        Login
                    </button>
                    <div>
                        <h6>Don't have an account ?
                            <Link to="/register" className="text-decoration-none"> New User?Create Account</Link>
                        </h6>
                    </div>
                </form>
            </div>
        </center>
    )
};

export default Login;