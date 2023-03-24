import React from 'react'

const NavbarMenu = (props) => {

    return (
        <div className={`h-full transition-all pt-4 duration-500 ease-linear max-w-xs flex-col items-center text-[#FFFFFF] not-italic bg-[#242424] ${props.hidden}`}>
            <div className='py-3 px-4'>
            <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M28 16.28C28.0063 16.1867 28.0063 16.0932 28 16V6.3733C27.9562 4.28708 26.233 2.62943 24.1467 2.66663H6.52C4.43366 2.62943 2.71042 4.28708 2.66666 6.3733V22.96C2.71042 25.0462 4.43366 26.7038 6.52 26.6666H14.6667C14.7421 26.6731 14.8179 26.6731 14.8933 26.6666C17.7615 30.2859 23.0207 30.8948 26.64 28.0266C30.2593 25.1584 30.8682 19.8993 28 16.28ZM6.52 24C5.91089 24.0238 5.38957 23.5669 5.33333 22.96V6.3733C5.38957 5.76632 5.91089 5.30943 6.52 5.3333H24.1467C24.7558 5.30943 25.2771 5.76632 25.3333 6.3733V14.0266C22.7521 12.6143 19.6173 12.6679 17.0858 14.1676C14.5543 15.6673 13.0014 18.3909 13 21.3333C13.002 22.2401 13.1506 23.1406 13.44 24H6.52ZM15.6667 21.3333C15.6667 24.4629 18.2037 27 21.3333 27C24.4599 26.9926 26.9927 24.4599 27 21.3333C27 18.2037 24.4629 15.6666 21.3333 15.6666C18.2037 15.6666 15.6667 18.2037 15.6667 21.3333ZM21.3333 10.6666H9.33333C8.59695 10.6666 8 10.0697 8 9.3333C8 8.59692 8.59695 7.99996 9.33333 7.99996H21.3333C22.0697 7.99996 22.6667 8.59692 22.6667 9.3333C22.6667 10.0697 22.0697 10.6666 21.3333 10.6666ZM24.0077 22.6666C24.0077 22.3111 23.8657 21.9703 23.6133 21.72L22.6667 20.7866V18.6666C22.6667 17.9302 22.0697 17.3333 21.3333 17.3333C20.597 17.3333 20 17.9302 20 18.6666V21.3333C19.9979 21.6877 20.1371 22.0283 20.3867 22.28L21.72 23.6133C21.9704 23.8657 22.3111 24.0077 22.6667 24.0077C23.0222 24.0077 23.363 23.8657 23.6133 23.6133C23.8657 23.3629 24.0077 23.0221 24.0077 22.6666Z"
                                fill="white" />
                        </svg>
                    </div>

                    <p className='leading-5 pl-2'>Process</p>
                </button>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 32 34" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M25.3333 6.66663H24V3.99996C24 3.26358 23.403 2.66663 22.6667 2.66663C21.9303 2.66663 21.3333 3.26358 21.3333 3.99996V6.66663H10.6667V3.99996C10.6667 3.26358 10.0697 2.66663 9.33333 2.66663C8.59695 2.66663 8 3.26358 8 3.99996V6.66663H6.66666C4.45753 6.66663 2.66666 8.45749 2.66666 10.6666V25.3333C2.66666 27.5424 4.45753 29.3333 6.66666 29.3333H25.3333C27.5425 29.3333 29.3333 27.5424 29.3333 25.3333V10.6666C29.3333 8.45749 27.5425 6.66663 25.3333 6.66663ZM5.33333 10.6666C5.33333 9.93025 5.93028 9.33329 6.66666 9.33329H25.3333C26.0697 9.33329 26.6667 9.93025 26.6667 10.6666V12H5.33333V10.6666ZM25.3333 26.6666C26.0697 26.6666 26.6667 26.0697 26.6667 25.3333V14.6666H5.33333V25.3333C5.33333 26.0697 5.93028 26.6666 6.66666 26.6666H25.3333Z"
                                fill="white" />
                        </svg>
                    </div>
                    <p className='leading-5 pl-2'>Upcoming</p>
                </button>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 34 34" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.66666 2.66663H10.6667C12.8758 2.66663 14.6667 4.45749 14.6667 6.66663V10.6666C14.6667 12.8758 12.8758 14.6666 10.6667 14.6666H6.66666C4.45753 14.6666 2.66666 12.8758 2.66666 10.6666V6.66663C2.66666 4.45749 4.45753 2.66663 6.66666 2.66663ZM10.6667 12C11.403 12 12 11.403 12 10.6666V6.66663C12 5.93025 11.403 5.33329 10.6667 5.33329H6.66666C5.93028 5.33329 5.33333 5.93025 5.33333 6.66663V10.6666C5.33333 11.403 5.93028 12 6.66666 12H10.6667ZM10.6667 17.3333H6.66666C4.45753 17.3333 2.66666 19.1242 2.66666 21.3333V25.3333C2.66666 27.5424 4.45753 29.3333 6.66666 29.3333H10.6667C12.8758 29.3333 14.6667 27.5424 14.6667 25.3333V21.3333C14.6667 19.1242 12.8758 17.3333 10.6667 17.3333ZM10.6667 26.6666C11.403 26.6666 12 26.0697 12 25.3333V21.3333C12 20.5969 11.403 20 10.6667 20H6.66666C5.93028 20 5.33333 20.5969 5.33333 21.3333V25.3333C5.33333 26.0697 5.93028 26.6666 6.66666 26.6666H10.6667ZM25.3333 17.3333H21.3333C19.1242 17.3333 17.3333 19.1242 17.3333 21.3333V25.3333C17.3333 27.5424 19.1242 29.3333 21.3333 29.3333H25.3333C27.5425 29.3333 29.3333 27.5424 29.3333 25.3333V21.3333C29.3333 19.1242 27.5425 17.3333 25.3333 17.3333ZM25.3333 26.6666C26.0697 26.6666 26.6667 26.0697 26.6667 25.3333V21.3333C26.6667 20.5969 26.0697 20 25.3333 20H21.3333C20.597 20 20 20.5969 20 21.3333V25.3333C20 26.0697 20.597 26.6666 21.3333 26.6666H25.3333ZM25.3333 2.66663H21.3333C19.1242 2.66663 17.3333 4.45749 17.3333 6.66663V10.6666C17.3333 12.8758 19.1242 14.6666 21.3333 14.6666H25.3333C27.5425 14.6666 29.3333 12.8758 29.3333 10.6666V6.66663C29.3333 4.45749 27.5425 2.66663 25.3333 2.66663ZM25.3333 12C26.0697 12 26.6667 11.403 26.6667 10.6666V6.66663C26.6667 5.93025 26.0697 5.33329 25.3333 5.33329H21.3333C20.597 5.33329 20 5.93025 20 6.66663V10.6666C20 11.403 20.597 12 21.3333 12H25.3333Z"
                                fill="white" />
                        </svg>
                    </div>
                    <p className='leading-5 pl-2'>Storge</p>
                </button>
            </div>

            <div className='py-3 px-4'>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M28 16.28C28.0063 16.1867 28.0063 16.0932 28 16V6.3733C27.9562 4.28708 26.233 2.62943 24.1467 2.66663H6.52C4.43366 2.62943 2.71042 4.28708 2.66666 6.3733V22.96C2.71042 25.0462 4.43366 26.7038 6.52 26.6666H14.6667C14.7421 26.6731 14.8179 26.6731 14.8933 26.6666C17.7615 30.2859 23.0207 30.8948 26.64 28.0266C30.2593 25.1584 30.8682 19.8993 28 16.28ZM6.52 24C5.91089 24.0238 5.38957 23.5669 5.33333 22.96V6.3733C5.38957 5.76632 5.91089 5.30943 6.52 5.3333H24.1467C24.7558 5.30943 25.2771 5.76632 25.3333 6.3733V14.0266C22.7521 12.6143 19.6173 12.6679 17.0858 14.1676C14.5543 15.6673 13.0014 18.3909 13 21.3333C13.002 22.2401 13.1506 23.1406 13.44 24H6.52ZM15.6667 21.3333C15.6667 24.4629 18.2037 27 21.3333 27C24.4599 26.9926 26.9927 24.4599 27 21.3333C27 18.2037 24.4629 15.6666 21.3333 15.6666C18.2037 15.6666 15.6667 18.2037 15.6667 21.3333ZM21.3333 10.6666H9.33333C8.59695 10.6666 8 10.0697 8 9.3333C8 8.59692 8.59695 7.99996 9.33333 7.99996H21.3333C22.0697 7.99996 22.6667 8.59692 22.6667 9.3333C22.6667 10.0697 22.0697 10.6666 21.3333 10.6666ZM24.0077 22.6666C24.0077 22.3111 23.8657 21.9703 23.6133 21.72L22.6667 20.7866V18.6666C22.6667 17.9302 22.0697 17.3333 21.3333 17.3333C20.597 17.3333 20 17.9302 20 18.6666V21.3333C19.9979 21.6877 20.1371 22.0283 20.3867 22.28L21.72 23.6133C21.9704 23.8657 22.3111 24.0077 22.6667 24.0077C23.0222 24.0077 23.363 23.8657 23.6133 23.6133C23.8657 23.3629 24.0077 23.0221 24.0077 22.6666Z"
                                fill="white" />
                        </svg>
                    </div>

                    <p className='leading-5 pl-2'>Process</p>
                </button>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 32 34" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M25.3333 6.66663H24V3.99996C24 3.26358 23.403 2.66663 22.6667 2.66663C21.9303 2.66663 21.3333 3.26358 21.3333 3.99996V6.66663H10.6667V3.99996C10.6667 3.26358 10.0697 2.66663 9.33333 2.66663C8.59695 2.66663 8 3.26358 8 3.99996V6.66663H6.66666C4.45753 6.66663 2.66666 8.45749 2.66666 10.6666V25.3333C2.66666 27.5424 4.45753 29.3333 6.66666 29.3333H25.3333C27.5425 29.3333 29.3333 27.5424 29.3333 25.3333V10.6666C29.3333 8.45749 27.5425 6.66663 25.3333 6.66663ZM5.33333 10.6666C5.33333 9.93025 5.93028 9.33329 6.66666 9.33329H25.3333C26.0697 9.33329 26.6667 9.93025 26.6667 10.6666V12H5.33333V10.6666ZM25.3333 26.6666C26.0697 26.6666 26.6667 26.0697 26.6667 25.3333V14.6666H5.33333V25.3333C5.33333 26.0697 5.93028 26.6666 6.66666 26.6666H25.3333Z"
                                fill="white" />
                        </svg>
                    </div>
                    <p className='leading-5 pl-2'>Upcoming</p>
                </button>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 34 34" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.66666 2.66663H10.6667C12.8758 2.66663 14.6667 4.45749 14.6667 6.66663V10.6666C14.6667 12.8758 12.8758 14.6666 10.6667 14.6666H6.66666C4.45753 14.6666 2.66666 12.8758 2.66666 10.6666V6.66663C2.66666 4.45749 4.45753 2.66663 6.66666 2.66663ZM10.6667 12C11.403 12 12 11.403 12 10.6666V6.66663C12 5.93025 11.403 5.33329 10.6667 5.33329H6.66666C5.93028 5.33329 5.33333 5.93025 5.33333 6.66663V10.6666C5.33333 11.403 5.93028 12 6.66666 12H10.6667ZM10.6667 17.3333H6.66666C4.45753 17.3333 2.66666 19.1242 2.66666 21.3333V25.3333C2.66666 27.5424 4.45753 29.3333 6.66666 29.3333H10.6667C12.8758 29.3333 14.6667 27.5424 14.6667 25.3333V21.3333C14.6667 19.1242 12.8758 17.3333 10.6667 17.3333ZM10.6667 26.6666C11.403 26.6666 12 26.0697 12 25.3333V21.3333C12 20.5969 11.403 20 10.6667 20H6.66666C5.93028 20 5.33333 20.5969 5.33333 21.3333V25.3333C5.33333 26.0697 5.93028 26.6666 6.66666 26.6666H10.6667ZM25.3333 17.3333H21.3333C19.1242 17.3333 17.3333 19.1242 17.3333 21.3333V25.3333C17.3333 27.5424 19.1242 29.3333 21.3333 29.3333H25.3333C27.5425 29.3333 29.3333 27.5424 29.3333 25.3333V21.3333C29.3333 19.1242 27.5425 17.3333 25.3333 17.3333ZM25.3333 26.6666C26.0697 26.6666 26.6667 26.0697 26.6667 25.3333V21.3333C26.6667 20.5969 26.0697 20 25.3333 20H21.3333C20.597 20 20 20.5969 20 21.3333V25.3333C20 26.0697 20.597 26.6666 21.3333 26.6666H25.3333ZM25.3333 2.66663H21.3333C19.1242 2.66663 17.3333 4.45749 17.3333 6.66663V10.6666C17.3333 12.8758 19.1242 14.6666 21.3333 14.6666H25.3333C27.5425 14.6666 29.3333 12.8758 29.3333 10.6666V6.66663C29.3333 4.45749 27.5425 2.66663 25.3333 2.66663ZM25.3333 12C26.0697 12 26.6667 11.403 26.6667 10.6666V6.66663C26.6667 5.93025 26.0697 5.33329 25.3333 5.33329H21.3333C20.597 5.33329 20 5.93025 20 6.66663V10.6666C20 11.403 20.597 12 21.3333 12H25.3333Z"
                                fill="white" />
                        </svg>
                    </div>
                    <p className='leading-5 pl-2'>Storge</p>
                </button>
            </div>

            <div className='py-3 px-4'>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M28 16.28C28.0063 16.1867 28.0063 16.0932 28 16V6.3733C27.9562 4.28708 26.233 2.62943 24.1467 2.66663H6.52C4.43366 2.62943 2.71042 4.28708 2.66666 6.3733V22.96C2.71042 25.0462 4.43366 26.7038 6.52 26.6666H14.6667C14.7421 26.6731 14.8179 26.6731 14.8933 26.6666C17.7615 30.2859 23.0207 30.8948 26.64 28.0266C30.2593 25.1584 30.8682 19.8993 28 16.28ZM6.52 24C5.91089 24.0238 5.38957 23.5669 5.33333 22.96V6.3733C5.38957 5.76632 5.91089 5.30943 6.52 5.3333H24.1467C24.7558 5.30943 25.2771 5.76632 25.3333 6.3733V14.0266C22.7521 12.6143 19.6173 12.6679 17.0858 14.1676C14.5543 15.6673 13.0014 18.3909 13 21.3333C13.002 22.2401 13.1506 23.1406 13.44 24H6.52ZM15.6667 21.3333C15.6667 24.4629 18.2037 27 21.3333 27C24.4599 26.9926 26.9927 24.4599 27 21.3333C27 18.2037 24.4629 15.6666 21.3333 15.6666C18.2037 15.6666 15.6667 18.2037 15.6667 21.3333ZM21.3333 10.6666H9.33333C8.59695 10.6666 8 10.0697 8 9.3333C8 8.59692 8.59695 7.99996 9.33333 7.99996H21.3333C22.0697 7.99996 22.6667 8.59692 22.6667 9.3333C22.6667 10.0697 22.0697 10.6666 21.3333 10.6666ZM24.0077 22.6666C24.0077 22.3111 23.8657 21.9703 23.6133 21.72L22.6667 20.7866V18.6666C22.6667 17.9302 22.0697 17.3333 21.3333 17.3333C20.597 17.3333 20 17.9302 20 18.6666V21.3333C19.9979 21.6877 20.1371 22.0283 20.3867 22.28L21.72 23.6133C21.9704 23.8657 22.3111 24.0077 22.6667 24.0077C23.0222 24.0077 23.363 23.8657 23.6133 23.6133C23.8657 23.3629 24.0077 23.0221 24.0077 22.6666Z"
                                fill="white" />
                        </svg>
                    </div>

                    <p className='leading-5 pl-2'>Process</p>
                </button>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 32 34" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M25.3333 6.66663H24V3.99996C24 3.26358 23.403 2.66663 22.6667 2.66663C21.9303 2.66663 21.3333 3.26358 21.3333 3.99996V6.66663H10.6667V3.99996C10.6667 3.26358 10.0697 2.66663 9.33333 2.66663C8.59695 2.66663 8 3.26358 8 3.99996V6.66663H6.66666C4.45753 6.66663 2.66666 8.45749 2.66666 10.6666V25.3333C2.66666 27.5424 4.45753 29.3333 6.66666 29.3333H25.3333C27.5425 29.3333 29.3333 27.5424 29.3333 25.3333V10.6666C29.3333 8.45749 27.5425 6.66663 25.3333 6.66663ZM5.33333 10.6666C5.33333 9.93025 5.93028 9.33329 6.66666 9.33329H25.3333C26.0697 9.33329 26.6667 9.93025 26.6667 10.6666V12H5.33333V10.6666ZM25.3333 26.6666C26.0697 26.6666 26.6667 26.0697 26.6667 25.3333V14.6666H5.33333V25.3333C5.33333 26.0697 5.93028 26.6666 6.66666 26.6666H25.3333Z"
                                fill="white" />
                        </svg>
                    </div>
                    <p className='leading-5 pl-2'>Upcoming</p>
                </button>
                <button className='flex px-2 py-1 hover:bg-gray-500 w-full rounded-md'>
                    <div>
                        <svg width="22" height="22" viewBox="0 0 34 34" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6.66666 2.66663H10.6667C12.8758 2.66663 14.6667 4.45749 14.6667 6.66663V10.6666C14.6667 12.8758 12.8758 14.6666 10.6667 14.6666H6.66666C4.45753 14.6666 2.66666 12.8758 2.66666 10.6666V6.66663C2.66666 4.45749 4.45753 2.66663 6.66666 2.66663ZM10.6667 12C11.403 12 12 11.403 12 10.6666V6.66663C12 5.93025 11.403 5.33329 10.6667 5.33329H6.66666C5.93028 5.33329 5.33333 5.93025 5.33333 6.66663V10.6666C5.33333 11.403 5.93028 12 6.66666 12H10.6667ZM10.6667 17.3333H6.66666C4.45753 17.3333 2.66666 19.1242 2.66666 21.3333V25.3333C2.66666 27.5424 4.45753 29.3333 6.66666 29.3333H10.6667C12.8758 29.3333 14.6667 27.5424 14.6667 25.3333V21.3333C14.6667 19.1242 12.8758 17.3333 10.6667 17.3333ZM10.6667 26.6666C11.403 26.6666 12 26.0697 12 25.3333V21.3333C12 20.5969 11.403 20 10.6667 20H6.66666C5.93028 20 5.33333 20.5969 5.33333 21.3333V25.3333C5.33333 26.0697 5.93028 26.6666 6.66666 26.6666H10.6667ZM25.3333 17.3333H21.3333C19.1242 17.3333 17.3333 19.1242 17.3333 21.3333V25.3333C17.3333 27.5424 19.1242 29.3333 21.3333 29.3333H25.3333C27.5425 29.3333 29.3333 27.5424 29.3333 25.3333V21.3333C29.3333 19.1242 27.5425 17.3333 25.3333 17.3333ZM25.3333 26.6666C26.0697 26.6666 26.6667 26.0697 26.6667 25.3333V21.3333C26.6667 20.5969 26.0697 20 25.3333 20H21.3333C20.597 20 20 20.5969 20 21.3333V25.3333C20 26.0697 20.597 26.6666 21.3333 26.6666H25.3333ZM25.3333 2.66663H21.3333C19.1242 2.66663 17.3333 4.45749 17.3333 6.66663V10.6666C17.3333 12.8758 19.1242 14.6666 21.3333 14.6666H25.3333C27.5425 14.6666 29.3333 12.8758 29.3333 10.6666V6.66663C29.3333 4.45749 27.5425 2.66663 25.3333 2.66663ZM25.3333 12C26.0697 12 26.6667 11.403 26.6667 10.6666V6.66663C26.6667 5.93025 26.0697 5.33329 25.3333 5.33329H21.3333C20.597 5.33329 20 5.93025 20 6.66663V10.6666C20 11.403 20.597 12 21.3333 12H25.3333Z"
                                fill="white" />
                        </svg>
                    </div>
                    <p className='leading-5 pl-2'>Storge</p>
                </button>
            </div>

        </div>
    )
}

export default NavbarMenu