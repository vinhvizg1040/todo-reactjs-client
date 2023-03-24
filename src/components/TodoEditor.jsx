import React from 'react';

const TodoEditor = (props) => {

    return (
        <div id='todoEdit' className='h-full w-full flex flex-col items-center bg-[#202020]'>
            <div className='w-3/5 flex flex-col justify-between pt-10'>
                <div className='h-24 w-full flex flex-col items-center'>
                    <div className='w-full flex justify-between text-white p-2'>
                        <p className='text-lg leading-6'>Inbox</p>
                        <div className='flex text-xs'>
                            <button className='flex px-2 hover:bg-gray-500 hover:rounded-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22"><path d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z" fill="currentColor" fill-rule="nonzero"></path></svg>
                                <p className={props.hidden}>View</p>
                            </button>
                            <button className='flex px-2 hover:bg-gray-500 hover:rounded-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="nonzero" d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z"></path></svg>
                                <p className={props.hidden}>Comments</p>
                            </button>
                            <button className='flex px-2 hover:bg-gray-500 hover:rounded-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 22"><g fill="none" stroke="currentColor" stroke-linecap="round" transform="translate(3 10)"><circle cx="2" cy="2" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="16" cy="2" r="2"></circle></g></svg>
                            </button>
                        </div>
                    </div>
                    <button className='w-full p-2 flex justify-items-start group'>
                        <div className='flex'>
                            <span className='group-hover:bg-red-500 group-hover:rounded-full h-5 w-5 p-1'>
                                <svg className='fill-red-500 group-hover:fill-white' width="12" height="12" viewBox='0 0 12 12'><path d="M 6 6 V 0.5 A 0.5 0.5 90 0 1 7 0.5 V 6 H 12.5 A 0.5 0.5 90 1 1 12.5 7 H 7 V 12.5 A 0.5 0.5 90 1 1 6 12.5 V 7 H 0.5 A 0.5 0.5 90 0 1 0.5 6 H 6 Z" fill="current" fill-rule="evenodd"></path></svg>
                            </span>
                            <p className='pl-2 font-normal group-hover:text-red-500 text-sm text-white'>Add task</p>
                        </div>
                    </button>
                </div>
                <div className='h-40 w-full border rounded-lg border-white/20 pt-1'>
                    <input className='h-8 w-full bg-[#202020] focus:outline-none text-gray-500 text-sm font-semibold p-2 text-start' placeholder="Task name"></input>
                    <input className='h-6 w-full bg-[#202020] focus:outline-none text-gray-500 text-xs font-medium p-2 text-start' placeholder="Task name"></input>
                    <div className='bg-[#202020] h-12 w-full border-b border-white/20 px-1 py-2 flex justify-start'>
                        <button className='p-1 mx-1 h-7 flex items-center border border-white/20 rounded-lg text-gray-500 text-xs font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="no_due_date"><path fill="currentColor" d="M12 2a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 1H4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V4a1 1 0 00-1-1zm-1.25 7a.75.75 0 110 1.5.75.75 0 010-1.5zm.75-5a.5.5 0 110 1h-7a.5.5 0 010-1h7z"></path></svg>
                            <p>Due date</p>
                        </button>
                        <button className='p-1 mx-1 h-7 flex items-center border border-white/20 rounded-lg text-gray-500 text-xs font-medium'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="Gw1i-E3" data-icon-name="priority-icon" data-priority="4"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 3a.5.5 0 01.276-.447C3.025 2.179 4.096 2 5.5 2c.901 0 1.485.135 2.658.526C9.235 2.885 9.735 3 10.5 3c1.263 0 2.192-.155 2.776-.447A.5.5 0 0114 3v6.5a.5.5 0 01-.276.447c-.749.375-1.82.553-3.224.553-.901 0-1.485-.135-2.658-.526C6.765 9.615 6.265 9.5 5.5 9.5c-1.08 0-1.915.113-2.5.329V13.5a.5.5 0 01-1 0V3zm1 5.779v-5.45C3.585 3.113 4.42 3 5.5 3c.765 0 1.265.115 2.342.474C9.015 3.865 9.599 4 10.5 4c1.002 0 1.834-.09 2.5-.279v5.45c-.585.216-1.42.329-2.5.329-.765 0-1.265-.115-2.342-.474C6.985 8.635 6.401 8.5 5.5 8.5c-1.001 0-1.834.09-2.5.279z" fill="currentColor"></path></svg>
                            <p>Priority</p>
                        </button>
                        <button className='p-1 mx-1 h-7 flex items-center border border-white/20 rounded-lg text-gray-500 text-xs font-medium'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.414 4.706l.094.093a.5.5 0 01-.707.708l-.094-.094a2 2 0 010-2.829l.379-.378a2 2 0 012.764-.062.5.5 0 01-.676.738 1 1 0 00-1.381.03l-.379.38a1 1 0 000 1.414zm9.412-1.824a1 1 0 011.381.03l.379.38a1 1 0 010 1.414l-.094.093a.5.5 0 10.707.708l.094-.094a2 2 0 000-2.829l-.379-.378a2 2 0 00-2.764-.062.5.5 0 10.676.738zm-.042 9.108A5.482 5.482 0 018 13.499a5.482 5.482 0 01-3.784-1.509l-1.362 1.362a.5.5 0 11-.708-.707l1.408-1.408a5.5 5.5 0 118.892 0l1.408 1.408a.5.5 0 01-.707.707l-1.363-1.362zM8 12.499a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM8 5v3h2a.5.5 0 110 1H7.5a.5.5 0 01-.5-.5V5a.5.5 0 111 0z" fill="currentColor"></path></svg>
                            <p>Reminders</p>
                        </button>
                    </div>
                    <div className='flex justify-end px-1 py-2'>
                        <button className='p-4 mx-1 h-8 flex items-center border border-none hover:bg-[#3d3d3d] bg-[#2C2C2C] rounded-lg text-white text-xs font-medium'>
                            <p>Cancel</p>
                        </button>
                        <button className='p-4 mx-1 h-8 flex items-center border border-none rounded-lg text-gray-500 text-xs font-medium bg-red-500/30'>
                            <p>Add task</p>
                        </button>
                    </div>
                </div>
                <div className='h-40 w-full border rounded-lg border-white/20 pt-1 mt-1'>
                    <div className='h-full w-full '>
                        S
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoEditor