import React, { useState } from 'react';
import instance from '../api/instance';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

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

    const handleSubmit = (event) => {
        event.preventDefault();

        LoginSchema.validate(formData, { abortEarly: false })
            .then( async () => {
                // Send data to server
                await instance.post('/users/login', formData)
                    .then(response => {
                        const role = response.data.role;
                        if (role === 'admin') {
                            const token = response.data.token;
                            const username = response.data.username;
                            const userId = response.data.userId;
                            localStorage.setItem('token', token);
                            localStorage.setItem('username', username);
                            localStorage.setItem('userId', userId);
                            // Log in successful, redirect to another page
                            navigate("/");
                            window.location.reload();
                        } else if (role === 'user') {
                            const token = response.data.token;
                            const username = response.data.username;
                            const userId = response.data.userId;
                            localStorage.setItem('token', token);
                            localStorage.setItem('username', username);
                            localStorage.setItem('userId', userId);
                            // Log in successful, redirect to another page
                            navigate("/Todo");
                            window.location.reload();
                        }
                    })
                    .catch(error => console.log(error));

            })
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

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-10 p-8 bg-[#363636] rounded-xl shadow-md shadow-[#333333]">
                    <div className='flex items-center justify-center'>
                        <p className='text-white font-bold text-2xl'>TodoList</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='bg-[#FFFF] w-3/4 h-px rounded-md'></div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='font-bold text-2xl'>Login</p>
                    </div>
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
                                    <path d="M15.3178 12.3636L17.0451 14.0909L20.4996 10.6364L18.7723 8.90909" stroke="#ADB0CD" stroke-width="2.30303" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M10.3451 12.1546L20.4998 2" stroke="#ADB0CD" stroke-width="2.30303" strokeLinecap="round" stroke-linejoin="round" />
                                    <path d="M6.68182 21C9.54366 21 11.8636 18.68 11.8636 15.8182C11.8636 12.9563 9.54366 10.6364 6.68182 10.6364C3.81998 10.6364 1.5 12.9563 1.5 15.8182C1.5 18.68 3.81998 21 6.68182 21Z" stroke="#ADB0CD" stroke-width="2.30303" strokeLinecap="round" stroke-linejoin="round" />
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
                    <div className="flex items-center justify-center">
                        <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='bg-[#FFFF] w-3/4 h-px rounded-md'></div>
                        <p className='px-2'>OR</p>
                        <div className='bg-[#FFFF] w-3/4 h-px rounded-md'></div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='w-36 p-2'>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29 14.5C29 6.49123 22.5088 0 14.5 0C6.49123 0 0 6.49123 0 14.5C0 21.7381 5.29945 27.7367 12.2356 28.8252V18.6951H8.55699V14.5H12.2356V11.306C12.2356 7.67507 14.3967 5.66493 17.7099 5.66493C19.2989 5.66493 20.9594 5.95096 20.9594 5.95096V9.51836H19.1321C17.3285 9.51836 16.7723 10.6386 16.7723 11.7827V14.5H20.7926L20.149 18.6951H16.7723V28.8252C23.7005 27.7367 29 21.7381 29 14.5Z" fill="#1877F2" />
                                        <path d="M20.1407 18.6951L20.7843 14.5H16.764V11.7827C16.764 10.6386 17.3281 9.51836 19.1238 9.51836H20.9512V5.95096C20.9512 5.95096 19.2906 5.66493 17.7016 5.66493C14.3884 5.66493 12.2273 7.67507 12.2273 11.306V14.5H8.54869V18.6951H12.2273V28.8252C12.9662 28.9444 13.721 29 14.4917 29C15.2624 29 16.0172 28.9364 16.7561 28.8252V18.6951H20.1407Z" fill="#363636" />
                                    </svg>
                                </span>
                                <p className='ml-4'>Facebook</p>
                            </button>
                        </div>
                        <div className='w-36 p-2'>
                            <button type="submit" className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg width="22" height="22" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27 14.0814C27 12.9488 26.9081 12.1223 26.7092 11.2652H13.7757V16.3773H21.3674C21.2144 17.6477 20.3879 19.5609 18.5511 20.8466L18.5254 21.0177L22.6147 24.1857L22.898 24.2139C25.5 21.8109 27 18.2752 27 14.0814Z" fill="#4285F4" />
                                        <path d="M13.7756 27.5506C17.4949 27.5506 20.6173 26.3261 22.898 24.214L18.5511 20.8466C17.3878 21.6578 15.8266 22.2241 13.7756 22.2241C10.1329 22.2241 7.0411 19.8212 5.93897 16.4998L5.77742 16.5135L1.52528 19.8043L1.46967 19.9589C3.73492 24.4588 8.38793 27.5506 13.7756 27.5506Z" fill="#34A853" />
                                        <path d="M5.93863 16.4998C5.64782 15.6427 5.47952 14.7242 5.47952 13.7753C5.47952 12.8263 5.64782 11.908 5.92333 11.0509L5.91563 10.8683L1.6102 7.52467L1.46933 7.59168C0.535712 9.45902 0 11.556 0 13.7753C0 15.9947 0.535712 18.0915 1.46933 19.9589L5.93863 16.4998Z" fill="#FBBC05" />
                                        <path d="M13.7756 5.32643C16.3623 5.32643 18.1071 6.44376 19.1021 7.37748L22.9898 3.58159C20.6021 1.36225 17.4949 1.52588e-05 13.7756 1.52588e-05C8.38793 1.52588e-05 3.73492 3.09178 1.46967 7.59168L5.92367 11.0509C7.0411 7.72949 10.1329 5.32643 13.7756 5.32643Z" fill="#EB4335" />
                                    </svg>
                                </span>
                                <p className='ml-4'>Google</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex min-h-full items-center justify-center'>
                    <a href='/#'>Don't have account? Sign Up</a>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
