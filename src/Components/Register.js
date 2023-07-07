import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {
    const [form, setForm] = useState({
        email: "",
        name: "",
        phone: "",
        password: "",
        confirmPassword: ""
    })

    const { email, name, phone, password, confirmPassword } = form
    const dispatch = useDispatch();
    const handleChange = () => { }
    const handleSubmit = () => { }

    return (
        <center>
            <div className="container">
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
                    <div className="col my-4">
                        <label htmlFor="name" className="fs-5">Name :</label>
                        <input
                            className="ms-5 p-2 w-25 rounded-pill"
                            onChange={handleChange}
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                        />
                    </div>
                    <div className="col my-4">
                        <label htmlFor="phone" className="fs-5">Phone :</label>
                        <input
                            className="ms-5 p-2 w-25 rounded-pill"
                            onChange={handleChange}
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                        />
                    </div>
                    <div className="col my-2">
                        <label htmlFor="password" className="fs-5">Password :</label>
                        <input
                            className="ms-5 p-2 w-25 rounded-pill"
                            type="text"
                            onChange={handleChange}
                            id="password"
                            name="password"
                            value={password}
                        />
                    </div>
                    <div className="col my-4">
                        <label htmlFor="confirmpassword" className="fs-5">Confirm Password :</label>
                        <input
                            className="ms-5 p-2 w-25 rounded-pill"
                            onChange={handleChange}
                            type="text"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                        />
                    </div>
                    <button className="btn btn-info text-white px-5 my-4 fs-5" type="submit">
                        Register
                    </button>
                    <div>
                        <h6>have an account ?
                            <Link to="/register" className="text-decoration-none">Login here</Link>
                        </h6>
                    </div>
                </form>
            </div>
        </center>
    )
};

export default Register;