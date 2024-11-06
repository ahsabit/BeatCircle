export default function MusicPlayer() {
    return(
        <>
            <div className="py-4 lg:pt-10 px-6 w-full flex flex-col justify-between h-screen md:pl-72">
                <div className="lg:mx-auto w-[672px]">
                    <div className="w-full flex flex-row justify-between">
                        <div className="flex-none pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 24 24" fill="none">
                                <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#fff"/>
                            </svg>
                        </div>
                        <div className="flex-none pb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4ZM15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5ZM12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12ZM11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19ZM12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="#fff"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-4 flex items-center justify-center">
                    <img className="w-64 h-64 rounded-sm" src="https://placehold.co/400" alt="" />
                </div>
                <div className="lg:mx-auto">
                    <div className="pb-4 max-w-2xl lg:w-[672px]">
                        <div className="w-full flex flex-col justify-between pb-2">
                            <span className="font-extrabold text-xl leading-none pb-2">Coffee Houser Sei Addata Aaj Aar Nei</span>
                            <span className="font-medium text-base">Manna Dey</span>
                        </div>
                        <div className="w-full flex flex-col pb-1">
                            <div className="w-full h-1 bg-white cursor-pointer rounded-full mb-1 flex flex-row items-center justify-start overflow-y-visible">
                                <div className="w-[100px] h-full bg-red-500 hover:h-3 cursor-pointer rounded-l-full"></div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <span className="text-xs">1:03</span>
                                <span className="text-xs">1:03</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <div className="cursor-pointer flex items-center justify-center flex-[33%]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-12 rotate-180" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M5.57346234,4.18076808 L15.5734623,11.1807681 C16.1421792,11.5788699 16.1421792,12.4211301 15.5734623,12.8192319 L5.57346234,19.8192319 C4.91068487,20.2831762 4,19.809023 4,19 L4,5 C4,4.19097699 4.91068487,3.71682385 5.57346234,4.18076808 Z M19,4 C19.5522847,4 20,4.44771525 20,5 L20,19 C20,19.5522847 19.5522847,20 19,20 C18.4477153,20 18,19.5522847 18,19 L18,5 C18,4.44771525 18.4477153,4 19,4 Z M6,6.92065556 L6,17.0793444 L13.2562063,12 L6,6.92065556 Z"/>
                                </svg>
                            </div>
                            <div className="cursor-pointer flex items-center justify-center flex-[33%]">
                                { true ? // this can be controlled by a state variable
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-16" viewBox="0 0 18 18" version="1.1">                                <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                            <g transform="translate(-749.000000, -379.000000)" id="Group" stroke="#fff" stroke-width="2">
                                                <g transform="translate(745.000000, 376.000000)" id="Shape">
                                                    <path d="M5,4.67805648 C5,4.56284567 5.03231968,4.44953549 5.09390785,4.34882312 C5.29405709,4.02152811 5.74836552,3.90360587 6.10863414,4.08543644 L20.6160344,11.4074417 C20.7378493,11.4689227 20.8382812,11.5601626 20.9059562,11.6708284 C21.1061054,11.9981234 20.976303,12.4108512 20.6160344,12.5926818 L6.10863414,19.9146871 C5.99777542,19.9706384 5.87304972,20 5.7462319,20 C5.3340994,20 5,19.6964791 5,19.322067 L5,4.67805648 Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-16" viewBox="-1 0 20 20" version="1.1">
                                        <g id="Free-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                                            <g transform="translate(-896.000000, -378.000000)" id="Group" stroke="#fff" stroke-width="2">
                                                <g transform="translate(893.000000, 376.000000)" id="Shape">
                                                    <path d="M5.77777778,21 C4.79593822,21 4,20.0050772 4,18.7777778 L4,5.22222222 C4,3.99492278 4.79593822,3 5.77777778,3 L8.22222222,3 C9.20406178,3 10,3.99492278 10,5.22222222 L10,18.7777778 C10,20.0050772 9.20406178,21 8.22222222,21 L5.77777778,21 Z">
                                                    </path>
                                                        <path d="M14,5.22222222 C14,3.99492278 14.7959382,3 15.7777778,3 L18.2222222,3 C19.2040618,3 20,3.99492278 20,5.22222222 L20,18.7777778 C20,20.0050772 19.2040618,21 18.2222222,21 L15.7777778,21 C14.7959382,21 14,20.0050772 14,18.7777778 L14,5.22222222 Z">
                                                    </path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                }
                            </div>
                            <div className="cursor-pointer flex items-center justify-center flex-[33%]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-12" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M5.57346234,4.18076808 L15.5734623,11.1807681 C16.1421792,11.5788699 16.1421792,12.4211301 15.5734623,12.8192319 L5.57346234,19.8192319 C4.91068487,20.2831762 4,19.809023 4,19 L4,5 C4,4.19097699 4.91068487,3.71682385 5.57346234,4.18076808 Z M19,4 C19.5522847,4 20,4.44771525 20,5 L20,19 C20,19.5522847 19.5522847,20 19,20 C18.4477153,20 18,19.5522847 18,19 L18,5 C18,4.44771525 18.4477153,4 19,4 Z M6,6.92065556 L6,17.0793444 L13.2562063,12 L6,6.92065556 Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};