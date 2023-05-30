import React, { useState } from 'react';
import instance from '../../api/instance';
import * as Yup from 'yup';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'username quá ngắn!')
        .max(40, 'username quá dài!')
        .required('Vui lòng nhập tên đăng nhập.'),
    password: Yup.string()
        .min(8, 'Mật khẩu phải chứa ít nhất 8 ký tự.')
        .max(15, 'Mật khẩu không thể quá 15 ký tự')
        .required('Vui lòng nhập mật khẩu.'),
});

function LoginForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});

    const { isLoggedIn } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // localStorage.clear();
        LoginSchema.validate(formData, { abortEarly: false })
            .then(
                // async () => {
                //     // Send data to server
                //     await instance.post('/users/login', formData)
                //         .then(response => {
                //             const role = response.data.role;
                //             if (role === 'admin') {
                //                 localStorage.setItem('user', { username: response.data.username, userId: response.data.userId, token: response.data.token, role: response.data.role });
                //                 // Log in successful, redirect to another page
                //                 navigate("/");
                //                 window.location.reload();
                //             } else if (role === 'user') {
                //                 localStorage.setItem('user', { username: response.data.username, userId: response.data.userId, token: response.data.token, role: response.data.role });
                //                 // Log in successful, redirect to another page
                //                 navigate("/Todo", { replace: true });
                //                 window.location.reload();
                //             }
                //             console.log(response.data);
                //         })
                //         .catch(error => console.log(error));
                // }
                dispatch(login(formData.username, formData.password))
                    .then(() => {
                        navigate("/Todo");
                        window.location.reload();
                    }).catch(error => console.log(error))
            )
            .catch((errors) => {
                // Form is invalid
                console.log(errors);
                // Form is invalid
                const errorObject = {};
                errors.inner.forEach((error) => {
                    errorObject[error.path] = error.message;
                });
                setFormErrors(errorObject);
            });
    }

    // handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-3 rounded-md shadow-sm">
                    <div className='rounded-xl border-white border-2 flex items-center bg-[#363636] px-2'>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5001 2.15001C21.5001 0.967503 20.5326 0 19.3501 0H2.15001C0.967503 0 0 0.967503 0 2.15001V15.05C0 16.2325 0.967503 17.2001 2.15001 17.2001H19.3501C20.5326 17.2001 21.5001 16.2325 21.5001 15.05V2.15001ZM19.3501 2.15001L10.75 7.52502L2.15001 2.15001H19.3501ZM19.3501 15.05H2.15001V4.30001L10.75 9.67503L19.3501 4.30001V15.05Z" fill="#ADB0CD" />
                        </svg>
                        <input className='bg-[#363636] focus:outline-none text-[#FFFFFF] text-lg p-1 text-start w-full h-full'
                            type='text' name='username' value={formData.username} onChange={handleInputChange} required placeholder="Username" />
                        {formErrors.username && <span className="error text-sm italic text-red-500">{formErrors.username}</span>}
                    </div>
                    <div className='rounded-xl border-white border-2 flex items-center bg-[#363636] px-2'>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3178 12.3636L17.0451 14.0909L20.4996 10.6364L18.7723 8.90909" stroke="#ADB0CD" strokeWidth="2.30303" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10.3451 12.1546L20.4998 2" stroke="#ADB0CD" strokeWidth="2.30303" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.68182 21C9.54366 21 11.8636 18.68 11.8636 15.8182C11.8636 12.9563 9.54366 10.6364 6.68182 10.6364C3.81998 10.6364 1.5 12.9563 1.5 15.8182C1.5 18.68 3.81998 21 6.68182 21Z" stroke="#ADB0CD" strokeWidth="2.30303" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input className='bg-[#363636] focus:outline-none text-[#FFFFFF] text-lg p-1 text-start w-full h-full'
                            type="password" name='password' value={formData.password} onChange={handleInputChange} required placeholder="Password" />
                        {formErrors.password && <span className="error text-sm italic text-red-500">{formErrors.password}</span>}
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-base font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
}

export default LoginForm;
