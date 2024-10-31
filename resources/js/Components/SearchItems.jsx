import { router } from "@inertiajs/react";
import { useRef } from "react";

export default function SearchItems({ className , upRef, backFn, ...props}) {
    const recommendation = useRef(null);
    const searchFn = () => {
        router.get(route('music.show'));
    };
    const handleRecommend = () => {
        if (recommendation.current.classList.contains('hidden')) {
            recommendation.current.classList.add('flex');
            recommendation.current.classList.remove('hidden');
        } else {
            recommendation.current.classList.remove('flex');
            recommendation.current.classList.add('hidden');
        }
    };
    return(
        <div ref={upRef} className={"relative w-full flex flex-col justify-center items-center " + className} {...props}>
            <label htmlFor="search" className="w-full flex items-center justify-start input input-bordered max-w-md px-0">
                <span className="p-3 btn-ghost" onClick={backFn}>
                    <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#cdcdcda2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <input onFocus={handleRecommend} onBlur={handleRecommend} id="search" type="text" placeholder="Search songs, albums, live streams" className="input border-none outline-none w-full hover:outline-none hover:border-none"/>
                <span className="p-3 btn-ghost" onClick={searchFn}>
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
                </span>
            </label>
            <ul ref={recommendation} className='absolute top-14 w-full hidden flex-col items-center z-50'>
                {Array.from({ length: 5 }, (_, i) => {
                    return (
                        <li key={i} className="max-w-md w-full bg-base-100">
                            <a href="#" className="btn btn-ghost p-4 border border-[#cdcdcd11] w-full h-full flex flex-row">
                                <svg className="w-6 h-6 flex-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891Z" fill="#cdcdcda2"/>
                                    <path opacity="0.5" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.5429 12.6036C11.3554 12.416 11.25 12.1617 11.25 11.8964V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="#cdcdcda2"/>
                                </svg>
                                <div className="px-4 flex-1 overflow-hidden flex justify-start">
                                    <span>daylight</span>
                                </div>
                                <svg className="w-5 h-5 ml-2" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <title>delete [#1487]</title>
                                    <desc>Created with Sketch.</desc>
                                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" fill="#cdcdcda2">
                                            <g id="icons" transform="translate(56.000000, 160.000000)">
                                                <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}