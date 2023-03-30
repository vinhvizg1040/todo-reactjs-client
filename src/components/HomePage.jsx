import { React } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <header className="bg-gray-900 py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <a href="/#" className="text-white font-bold text-2xl">TodoList</a>
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <li><a href="/#" className="text-white hover:text-gray-300">Home</a></li>
                            <li><a href="/#" className="text-white hover:text-gray-300">About</a></li>
                            <li><a href="/#" className="text-white hover:text-gray-300">Contact</a></li>
                            <li>
                                <Link to="/Register">
                                    <a href="/#" className="text-white hover:text-gray-300">Sign Up</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Login">
                                    <a href="/#" className="bg-white text-gray-900 rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-200">Log
                                        In</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="bg-white py-20">
                <div className="container mx-auto px-8 md:flex md:items-center">
                    <div className="md:w-1/2 lg:w-2/3 md:pl-6 mb-12 md:mb-0">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">Organize Your Life with Our Todolist App</h2>
                        <p className="text-xl text-gray-700 mb-8">Our app helps you stay on top of your tasks and get things done. With
                            features like:</p>
                        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                            <li>Quickly add new tasks</li>
                            <li>Assign due dates and priorities</li>
                            <li>Set reminders and notifications</li>
                            <li>View and filter tasks by status or category</li>
                        </ul>
                        <a href="/#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md inline-block">Get
                            Started</a>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 relative">
                        <div className="rounded-md overflow-hidden absolute left-0 bottom-0 w-full h-full">
                            <img src="todolist.jpg" alt="Todolist app screenshot" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute right-0 bottom-0 md:-mr-12 z-10">
                            <img src="smartphone.png" alt="Smartphone mockup" className="block md:hidden h-auto w-full" />
                            <img src="laptop.png" alt="" className="hidden md:block h-auto w-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-8">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12">Features</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                            <div className="bg-white rounded-md shadow-lg p-6 h-full flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="fill-current w-16 h-16 text-blue-500 mr-4">
                                    <path className="heroicon-ui"
                                        d="M21.4 2.3a1 1 0 011.4 1.4l-5.6 5.6a8 8 0 11-2.3-2.3l5.6-5.6zM12 18a6 6 0 100-12 6 6 0 000 12z" />
                                </svg>
                                <div className="text-gray-800">
                                    <div className="text-xl font-bold mb-2">Task Management</div>
                                    <p className="text-gray-700">Easily add, edit, and organize your tasks with just a few clicks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                            <div className="bg-white rounded-md shadow-lg p-6 h-full flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="fill-current w-16 h-16 text-blue-500 mr-4">
                                    <path className="heroicon-ui"
                                        d="M19 19h-7v-6c0-.6-.4-1-1-1s-1 .4-1 1v6H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2zm-1-8h-4V5h4v6z" />
                                </svg>
                                <div className="text-gray-800">
                                    <div className="text-xl font-bold mb-2">Reminders & Notifications</div>
                                    <p className="text-gray-700">Stay on top of your tasks with reminders and notifications for due dates and
                                        time-sensitive items.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                            <div className="bg-white rounded-md shadow-lg p-6 h-full flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    className="fill-current w-16 h-16 text-blue-500 mr-4">
                                    <path className="heroicon-ui"
                                        d="M12 22a10 10 0 110-20 10 10 0 010 20zm-2-7l-3-3v3a1 1 0 011.4-1.4l1.3 1.3 3.3-3.3a1 1 0 011.4 1.4l-4 4z" />
                                </svg>
                                <div className="text-gray-800">
                                    <div className="text-xl font-bold mb-2">Collaboration & Sharing</div>
                                    <p className="text-gray-700">Share tasks and collaborate with others on projects with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="container mx-auto px-8 md:flex md:items-center">
                    <div className="md:w-1/2 lg:w-2/3 md:pr-6 mb-12 md:mb-0">
                        <h2 className="text-5xl font-bold text-gray-900 mb-4">Stay Organized, Get More Done</h2>
                        <p className="text-xl text-gray-700 mb-8">Our Todolist app is designed to help you stay on track and accomplish your
                            goals. With features like:</p>
                        <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                            <li>Task management made easy</li>
                            <li>Reminders and notifications for deadlines</li>
                            <li>Collaboration and sharing with others</li>
                            <li>Customizable categories and labels</li>
                            <li>Progress tracking and reporting</li>
                        </ul>
                        <a href="/#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md inline-block">Get
                            Started</a>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 relative">
                        <div className="rounded-md overflow-hidden absolute left-0 bottom-0 w-full h-full">
                            <img src="todolist2.jpg" alt="Todolist app screenshot" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                        </div>
                        <div className="absolute right-0 bottom-0 md:-mr-12 z-10">
                            <img src="smartphone.png" alt="Smartphone mockup" className="block md:hidden h-auto w-full" />
                            <img src="laptop.png" alt="" className="hidden md:block h-auto w-full" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-8">
                    <h2 className="text-5xl font-bold text-gray-900 mb-12">How it Works</h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                            <div className="bg-white rounded-md shadow-lg p-6 h-full flex items-center">
                                <div className="bg-blue-500 h-16 w-16 rounded-full flex-shrink-0 mr-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-100 w-8 h-8">
                                        <path className="heroicon-ui"
                                            d="M19 9v6a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1V5A3 3 0 0111 2h2a3 3 0 013 3v2h1a2 2 0 012 2zM9 9v6h6V9H9zm8-4v2H7V5h10z" />
                                    </svg>
                                </div>
                                <div className="text-gray-800">
                                    <div className="text-xl font-bold mb-2">Step 1: Add New Task</div>
                                    <p className="text-gray-700">Add a new task by clicking the "add task" button and entering the details such as
                                        task name, due date, priority, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                            <div className="bg-white rounded-mdshadow-lg p-6 h-full flex items-center">
                                <div className="bg-blue-500 h-16 w-16 rounded-full flex-shrink-0 mr-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-100 w-8 h-8">
                                        <path className="heroicon-ui" d="M12 13l-4-4v8a1 1 0 002 0V9.41l2 2V13h2z" />
                                        <path className="heroicon-ui"
                                            d="M20.59 13.58A8 8 0 114.42 6.41 6 6 0 0011 21.5a5.94 5.94 0 003.32-.99l5.27 5.27a1 1 0 001.41 0l1.42-1.42a1 1 0 000-1.41L20.6 13.58zM11 19.5a4 4 0 110-8 4 4 0 010 8z" />
                                    </svg>
                                </div>
                                <div className="text-gray-800">
                                    <div className="text-xl font-bold mb-2">Step 2: Organize Tasks</div>
                                    <p className="text-gray-700">Organize your tasks by creating custom categories or labels and easily move them
                                        between categories as needed.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                            <div className="bg-white rounded-md shadow-lg p-6 h-full flex items-center">
                                <div className="bg-blue-500 h-16 w-16 rounded-full flex-shrink-0 mr-4 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current text-gray-100 w-8 h-8">
                                        <path className="heroicon-ui" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        <path className="heroicon-ui"
                                            d="M21.59 17.58A8 8 0 114.42 6.41 6 6 0 0011 21.5a5.94 5.94 0 003.32-.99l4.27 4.27a1 1 0 001.41 0l1.42-1.42a1 1 0 000-1.41l-1.42-1.42zM11 19.5a4 4 0 110-8 4 4 0 010 8z" />
                                    </svg>
                                </div>
                                <div className="text-gray-800">
                                    <div className="text-xl font-bold mb-2">Step 3: Track Progress</div>
                                    <p className="text-gray-700">Track your progress by setting task completion status, adding notes or comments,
                                        and generating reports.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-8 md:flex md:items-center">
                    <div className="md:w-1/2 lg:w-2/3 md:pr-6 mb-12 md:mb-0">
                        <h2 className="text-4xl font-bold mb-2">Our Contract</h2>
                        <ul className="list-disc list-inside text-lg mb-8">
                            <li>We will provide you with a reliable and efficient task management application.</li>
                            <li>Your data will always be kept private and secure.</li>
                            <li>You can count on us to respond promptly to any questions or concerns you may have.</li>
                            <li>If for any reason you are not satisfied with our service, we offer a 30-day money-back guarantee.</li>
                        </ul>
                        <form action="#" method="post" className="flex flex-col md:flex-row">
                            <input type="email" name="email" placeholder="Enter your email address" required
                                className="bg-gray-700 rounded-md py-3 px-4 md:mb-0 mb-2 md:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                aria-label="Email address" />
                            <button type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md inline-block"
                                aria-label="Get started button">Get Started</button>
                        </form>
                        <p className="text-sm mt-2">We hate spam too, so don't worry, we won't share your email with anyone.</p>
                    </div>
                    <div className="md:w-1/2 lg:w-1/3 relative">
                        <div className="rounded-md overflow-hidden absolute left-0 bottom-0 w-full h-full">
                            <img src="todolist3.jpg" alt="Todolist app screenshot" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-gray-900"></div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white pt-8 pb-6">
                <div className="container mx-auto px-8">
                    <div className="md:flex justify-between">
                        <div className="mb-6 md:mb-0 max-w-md">
                            <h3 className="text-lg font-bold mb-4">About Us</h3>
                            <p className="text-sm leading-relaxed">We are a team of developers who want to create the best task management
                                application for you. We believe in providing reliable and efficient solutions to enhance your productivity.
                            </p>
                        </div>
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                            <ul className="text-sm leading-relaxed">
                                <li><a href="mailto:contact@mytodolist.com"
                                    className="hover:text-gray-400 transition-colors duration-300">Email: contact@mytodolist.com</a></li>
                                <li>Phone: 1-800-MY-TODOLIST</li>
                                <li>Address: 123 Main Street, Suite 200, Anytown, USA</li>
                            </ul>
                        </div>
                        <div className="md:pl-8">
                            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                            <ul className="text-sm leading-relaxed">
                                <li><a href="/#" className="hover:text-gray-400 transition-colors duration-300">Twitter</a></li>
                                <li><a href="/#" className="hover:text-gray-400 transition-colors duration-300">Facebook</a></li>
                                <li><a href="/#" className="hover:text-gray-400 transition-colors duration-300">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="my-8 border-b border-gray-800" />
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm mb-4 md:mb-0">© 2023 MyTodoList. All rights reserved.</p>
                        <ul className="flex text-sm">
                            <li><a href="/#" className="text-white hover:text-gray-400 font-medium mr-6 transition-colors duration-300">Privacy
                                Policy</a></li>
                            <li><a href="/#" className="text-white hover:text-gray-400 font-medium transition-colors duration-300">Terms of
                                Service</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default HomePage