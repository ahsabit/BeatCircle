import SearchItems from '@/Components/SearchItems';
import { useRef } from 'react';
import Drawer from './Drawer';
import ProfileNav from './ProfileNav';
import LargeNavbar from './LargeNavbar';

export default function PageHeader() {
    const mobileSearchInput = useRef(null);
    const visibleHeader = useRef(null);

    const searckFieldClose = () => {
        visibleHeader.current.classList.remove('hidden');
        mobileSearchInput.current.classList.add('hidden');
    };

    const searchFieldOpen = () => {
        visibleHeader.current.classList.add('hidden');
        mobileSearchInput.current.classList.remove('hidden');
    };

    return(
        <header className="md:pr-2 md:pt-4">
            <div className="navbar bg-base-100">
                <div ref={visibleHeader} className='w-full flex flex-row flex-wrap'>
                    <div className="flex-none">
                        <Drawer className="md:hidden z-50" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <a className="text-xl flex flex-row items-center cursor-pointer md:hidden">
                            <img src="/images/BeatCircle-white.svg" alt="BeatCircle Icon" className="h-6 w-auto" />
                            <span className="font-bold text-lg block text-nowrap">BeatCircle - Artist Name</span>
                        </a>
                        <div className="w-full pl-64 hidden items-center justify-center lg:flex">
                            <SearchItems />
                        </div>
                    </div>
                    <div className="flex-none flex flex-row">
                        <button className="btn btn-square btn-ghost lg:hidden" onClick={searchFieldOpen}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-6 w-6 opacity-70">
                                <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                            </svg>
                        </button>
                        <ProfileNav />
                    </div>
                </div>
                <SearchItems className="lg:hidden hidden md:ml-64" upRef={mobileSearchInput} backFn={searckFieldClose}/>
            </div>
            <LargeNavbar />
        </header>
    );
}