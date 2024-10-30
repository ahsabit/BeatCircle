import { UserContext } from "@/Pages/Home";
import { Link } from "@inertiajs/react";
import { useContext, useEffect, useRef } from "react";

export default function ProfileNav () {
    const user = useContext(UserContext);
    const accountOptWrapper = useRef(null);
    const accountBtn = useRef(null);

    useEffect(() => {
        if (user) {
            document.addEventListener('click', (e) => {
                handleClickOutside(e);
            });
        }else{
            if (!accountOptWrapper.current.classList.contains('hidden')) {
                accountOptWrapper.current.classList.add('hidden');
            }
        }
    }, [user]);

    const handleClickOutside = (event) => {
        if (user) {
            if (
                accountOptWrapper.current &&
                accountBtn.current &&
                !accountOptWrapper.current.contains(event.target) &&
                !accountBtn.current.contains(event.target)
            ) {
                if (!accountOptWrapper.current.classList.contains('hidden')) {
                    accountOptWrapper.current.classList.add('hidden');
                }
            }
        }else{
            if (accountOptWrapper.current !== null) {
                if (!accountOptWrapper.current.classList.contains('hidden')) {
                    accountOptWrapper.current.classList.add('hidden');
                }
            }
        }
    };

    const openOptWrapper = () => {
        if (accountOptWrapper.current.classList.contains('hidden')) {
            accountOptWrapper.current.classList.remove('hidden');
        } else {
            accountOptWrapper.current.classList.add('hidden');
        }
    };

    return (
        <>
            {user == null ?
                <Link href={route('login')} className="ml-1 w-fit rounded btn btn-square btn-ghost border border-[#cdcdcda2]">
                    <span className="px-4">Sign in</span>
                </Link>
            :
                <button ref={accountBtn} onClick={openOptWrapper} className="ml-1 rounded btn btn-square btn-ghost border border-[#cdcdcda2]">
                    <svg                          
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-6 w-6 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                </button>
            }
            <div ref={accountOptWrapper} className="fixed top-14 right-14 rounded-lg overflow-hidden bg-[#3f3f3f] w-64 max-w-1/2 hidden">
                <div className="flex flex-row border-x border-t border-[#cdcdcda2] rounded-t-lg">
                    <div className="flex-none p-3">
                        <Link href={route('profile.edit')} className="rounded-full btn btn-square btn-ghost border border-[#cdcdcda2]">
                            <svg                          
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="#cdcdcda2"
                                className="h-6 w-6 opacity-70">
                                <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col overflow-hidden justify-between py-2">
                        <span className="font-bold text-lg">{user == null ? '' : user.name}</span>
                        <Link href={route('profile.edit')} className="text-blue-400">Manage your Account</Link>
                    </div>
                </div>
                <ul>
                    <li className="border border-[#cdcdcda2]">
                        <Link href={route('logout')} method="post" as="button" className="flex flex-row btn btn-ghost justify-start w-full h-full">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 20.7499H6C5.65324 20.7647 5.30697 20.7109 4.98101 20.5917C4.65505 20.4725 4.3558 20.2902 4.10038 20.0552C3.84495 19.8202 3.63837 19.5371 3.49246 19.2222C3.34654 18.9073 3.26415 18.5667 3.25 18.2199V5.77994C3.26415 5.43316 3.34654 5.09256 3.49246 4.77765C3.63837 4.46274 3.84495 4.17969 4.10038 3.9447C4.3558 3.70971 4.65505 3.52739 4.98101 3.40818C5.30697 3.28896 5.65324 3.23519 6 3.24994H9C9.19891 3.24994 9.38968 3.32896 9.53033 3.46961C9.67098 3.61027 9.75 3.80103 9.75 3.99994C9.75 4.19886 9.67098 4.38962 9.53033 4.53027C9.38968 4.67093 9.19891 4.74994 9 4.74994H6C5.70307 4.72412 5.4076 4.81359 5.17487 4.99977C4.94213 5.18596 4.78999 5.45459 4.75 5.74994V18.2199C4.78999 18.5153 4.94213 18.7839 5.17487 18.9701C5.4076 19.1563 5.70307 19.2458 6 19.2199H9C9.19891 19.2199 9.38968 19.299 9.53033 19.4396C9.67098 19.5803 9.75 19.771 9.75 19.9699C9.75 20.1689 9.67098 20.3596 9.53033 20.5003C9.38968 20.6409 9.19891 20.7199 9 20.7199V20.7499Z" fill="#000000"/>
                                <path d="M16 16.7499C15.9015 16.7504 15.8038 16.7312 15.7128 16.6934C15.6218 16.6556 15.5392 16.6 15.47 16.5299C15.3296 16.3893 15.2507 16.1987 15.2507 15.9999C15.2507 15.8012 15.3296 15.6105 15.47 15.4699L18.94 11.9999L15.47 8.52991C15.3963 8.46125 15.3372 8.37845 15.2962 8.28645C15.2552 8.19445 15.2332 8.09513 15.2314 7.99443C15.2296 7.89373 15.2482 7.7937 15.2859 7.70031C15.3236 7.60692 15.3797 7.52209 15.451 7.45087C15.5222 7.37965 15.607 7.32351 15.7004 7.28579C15.7938 7.24807 15.8938 7.22954 15.9945 7.23132C16.0952 7.23309 16.1945 7.25514 16.2865 7.29613C16.3785 7.33712 16.4613 7.39622 16.53 7.46991L20.53 11.4699C20.6705 11.6105 20.7493 11.8012 20.7493 11.9999C20.7493 12.1987 20.6705 12.3893 20.53 12.5299L16.53 16.5299C16.4608 16.6 16.3782 16.6556 16.2872 16.6934C16.1962 16.7312 16.0985 16.7504 16 16.7499Z" fill="#000000"/>
                                <path d="M20 12.75H9C8.80109 12.75 8.61032 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12C8.25 11.8011 8.32902 11.6103 8.46967 11.4697C8.61032 11.329 8.80109 11.25 9 11.25H20C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12C20.75 12.1989 20.671 12.3897 20.5303 12.5303C20.3897 12.671 20.1989 12.75 20 12.75Z" fill="#000000"/>
                            </svg>
                            <span>Sign out</span>
                        </Link>
                    </li>
                    <li className="border-b border-x border-[#cdcdcda2]">
                        <Link href="#" className="flex flex-row btn btn-ghost justify-start w-full h-full">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 11L12 8L21 11" stroke="#1C274C" strokeWidth="1.5"/>
                                <path d="M12 2V21.5" stroke="#1C274C" strokeWidth="1.5"/>
                                <path d="M3.19284 14C4.05026 18.2984 7.57641 20.5129 9.89856 21.5273C10.62 21.8424 10.9807 22 12 22C13.0193 22 13.38 21.8424 14.1014 21.5273C14.6796 21.2747 15.3324 20.9478 16 20.5328M19 17.9041C20.1632 16.4284 21 14.4963 21 11.9914C21 11.4234 21 10.8996 21 10.4167C21 7.21907 21 5.62028 20.6225 5.08241C20.245 4.54454 18.7417 4.02996 15.7351 3.00079L15.1623 2.80472C13.595 2.26824 12.8114 2 12 2C11.1886 2 10.405 2.26824 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241C3 5.62028 3 7.21907 3 10.4167V11" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                            <span>Terms & Conditions</span>
                        </Link>
                    </li>
                    <li className="border-b border-x border-[#cdcdcda2] rounded-b-lg">
                        <Link href="#" className="flex flex-row btn btn-ghost justify-start w-full h-full">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455zM4 18.385L5.763 17H20V5H4v13.385zM11 13h2v2h-2v-2zm0-6h2v5h-2V7z"/>
                                </g>
                            </svg>
                            <span>Send feedback</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};