import React from 'react';


const Navbar = (props) => {
    return (
        <>
            <div className='flex h-12 justify-between bg-[#282828] shadow-sm shadow-zinc-800'>
                <div className='flex w-80 max-w-xs justify-start items-start px-2 pl-4'>
                    <div className='p-2'>
                        <button className='hover:bg-gray-500 ' onClick={props.navHandle}>
                            <svg width="22" height="22" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M3.99996 5.83329H28C28.7363 5.83329 29.3333 5.23634 29.3333 4.49996C29.3333 3.76358 28.7363 3.16663 28 3.16663H3.99996C3.26358 3.16663 2.66663 3.76358 2.66663 4.49996C2.66663 5.23634 3.26358 5.83329 3.99996 5.83329ZM29.3333 27.1666C29.3333 27.903 28.7363 28.5 28 28.5H3.99996C3.26358 28.5 2.66663 27.903 2.66663 27.1666C2.66663 26.4302 3.26358 25.8333 3.99996 25.8333H28C28.7363 25.8333 29.3333 26.4302 29.3333 27.1666ZM3.99996 15.1666H28C28.7363 15.1666 29.3333 15.7636 29.3333 16.5C29.3333 17.2363 28.7363 17.8333 28 17.8333H3.99996C3.26358 17.8333 2.66663 17.2363 2.66663 16.5C2.66663 15.7636 3.26358 15.1666 3.99996 15.1666Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                    <div className='p-2'>
                        <button className='hover:bg-gray-500'>
                            <svg width="22" height="22" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M27.1667 10.32L29.38 12.3333C29.9316 12.8197 29.9853 13.6608 29.5 14.2133C29.0137 14.7649 28.1726 14.8186 27.62 14.3333L27.1667 13.9333V25.3333C27.1667 27.5425 25.3758 29.3333 23.1667 29.3333H19.1667C18.4303 29.3333 17.8334 28.7364 17.8334 28V21.3333C17.839 20.986 17.6988 20.6523 17.4467 20.4133C17.1995 20.154 16.8583 20.005 16.5 20C15.7637 20 15.1667 20.597 15.1667 21.3333V28C15.1667 28.7364 14.5697 29.3333 13.8334 29.3333H9.83337C7.62423 29.3333 5.83337 27.5425 5.83337 25.3333V13.9333L5.38004 14.3333C4.82415 14.7811 4.01426 14.7116 3.54272 14.1758C3.07117 13.6399 3.10526 12.8278 3.62004 12.3333L5.83337 10.32L6.9667 9.33333L15.62 1.66667C16.1234 1.22447 16.8767 1.22447 17.38 1.66667L26.0334 9.33333L27.1667 10.32ZM23.1667 26.6667C23.9031 26.6667 24.5 26.0697 24.5 25.3333V11.56L16.5 4.45333L8.50004 11.56V25.3333C8.50004 26.0697 9.09699 26.6667 9.83337 26.6667H12.5V21.3333C12.5 19.1242 14.2909 17.3333 16.5 17.3333C18.7092 17.3333 20.5 19.1242 20.5 21.3333V26.6667H23.1667Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                    <div className='p-2 w-full'>
                        <div className='flex items-center rounded-sm bg-[#363636]'>
                            <svg width="22" height="22" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M20.3875 19.125L27.1375 25.8625C27.3741 26.0972 27.5072 26.4167 27.5072 26.75C27.5072 27.0833 27.3741 27.4028 27.1375 27.6375C26.9028 27.8741 26.5833 28.0072 26.25 28.0072C25.9167 28.0072 25.5972 27.8741 25.3625 27.6375L18.625 20.8875C16.8781 22.2587 14.7208 23.0028 12.5 23C6.97715 23 2.5 18.5228 2.5 13C2.5 7.47715 6.97715 3 12.5 3C18.0228 3 22.5 7.47715 22.5 13C22.5028 15.2208 21.7587 17.3781 20.3875 19.125ZM12.5 5.5C8.35786 5.5 5 8.85786 5 13C5 17.1421 8.35786 20.5 12.5 20.5C16.6421 20.5 20 17.1421 20 13C20 8.85786 16.6421 5.5 12.5 5.5Z"
                                    fill="white" />
                            </svg>
                            <input className='bg-[#363636] focus:outline-none text-[#FFFFFF] text-xs p-1 text-start w-full h-full' placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className='flex max-w-xs justify-end p-2'>
                    <div className='px-4'>
                        <button className='hover:bg-gray-500'>
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M16 29.3333C8.63619 29.3333 2.66666 23.3638 2.66666 16C2.66666 8.63619 8.63619 2.66666 16 2.66666C19.5362 2.66666 22.9276 4.07141 25.4281 6.5719C27.9286 9.07238 29.3333 12.4638 29.3333 16C29.3333 23.3638 23.3638 29.3333 16 29.3333ZM17.3333 17.3333V9.33332C17.3333 8.59694 16.7364 7.99999 16 7.99999C15.2636 7.99999 14.6667 8.59694 14.6667 9.33332V17.3333C14.6667 18.0697 15.2636 18.6667 16 18.6667C16.7364 18.6667 17.3333 18.0697 17.3333 17.3333ZM16.5067 21.44C16.5916 21.4692 16.6723 21.5095 16.7467 21.56C16.8165 21.6092 16.8833 21.6626 16.9467 21.72C17.1903 21.9755 17.3284 22.3136 17.3333 22.6667C17.3354 23.0211 17.1962 23.3617 16.9467 23.6133C16.8171 23.7311 16.6682 23.8258 16.5067 23.8933C16.1839 24.036 15.816 24.036 15.4933 23.8933C15.3317 23.8258 15.1829 23.7311 15.0533 23.6133C14.8037 23.3617 14.6646 23.0211 14.6667 22.6667C14.6646 22.3123 14.8037 21.9716 15.0533 21.72C15.3685 21.4078 15.8183 21.2729 16.2533 21.36C16.3416 21.3724 16.4273 21.3994 16.5067 21.44ZM16 5.33332C21.891 5.33332 26.6667 10.109 26.6667 16C26.6667 18.829 25.5429 21.5421 23.5425 23.5425C21.5421 25.5429 18.829 26.6667 16 26.6667C10.109 26.6667 5.33332 21.891 5.33332 16C5.33332 10.109 10.109 5.33332 16 5.33332Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>

                    <div className='px-4'>
                        <button className='hover:bg-gray-500'>
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M27.92 22.6667H26.6667V13.3333C26.6667 7.44229 21.891 2.66666 16 2.66666C10.109 2.66666 5.33332 7.44229 5.33332 13.3333V22.6667H4.14666C3.41028 22.6667 2.81332 23.2636 2.81332 24C2.81332 24.7364 3.41028 25.3333 4.14666 25.3333H12C12 27.5425 13.7909 29.3333 16 29.3333C18.2091 29.3333 20 27.5425 20 25.3333H27.92C28.6564 25.3333 29.2533 24.7364 29.2533 24C29.2533 23.2636 28.6564 22.6667 27.92 22.6667ZM16 26.6667C15.2636 26.6667 14.6667 26.0697 14.6667 25.3333H17.3333C17.3333 26.0697 16.7364 26.6667 16 26.6667ZM7.99999 22.6667H18.6667H24V13.3333C24 8.91504 20.4183 5.33332 16 5.33332C11.5817 5.33332 7.99999 8.91504 7.99999 13.3333V22.6667Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>

                    <div className='px-4'>
                        <button className='hover:bg-gray-500'>
                            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M22.6667 9.33332C22.6667 5.65142 19.6819 2.66666 16 2.66666C12.3181 2.66666 9.33332 5.65142 9.33332 9.33332C9.33332 13.0152 12.3181 16 16 16H14.6667C8.03924 16 2.66666 21.3726 2.66666 28C2.66666 28.7364 3.26361 29.3333 3.99999 29.3333H28C28.7364 29.3333 29.3333 28.7364 29.3333 28C29.3333 21.3726 23.9607 16 17.3333 16H16C17.7681 16 19.4638 15.2976 20.714 14.0474C21.9643 12.7971 22.6667 11.1014 22.6667 9.33332ZM14.6667 18.6667C10.0262 18.6655 6.08959 22.0737 5.42666 26.6667H26.5733C25.9104 22.0737 21.9738 18.6655 17.3333 18.6667H14.6667ZM12 9.33332C12 11.5425 13.7909 13.3333 16 13.3333C17.0609 13.3333 18.0783 12.9119 18.8284 12.1618C19.5786 11.4116 20 10.3942 20 9.33332C20 7.12418 18.2091 5.33332 16 5.33332C13.7909 5.33332 12 7.12418 12 9.33332Z"
                                    fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
