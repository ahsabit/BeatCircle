import MainNavLink from "./MainNavLink";

export default function Drawer ({ className, ...props }) {
    return (
        <div className={"drawer " + className} {...props}>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4">
                    <li>
                        <a className="text-xl flex flex-row items-center cursor-pointer">
                            <img src="/images/BeatCircle-white.svg" alt="BeatCircle Icon" className="h-6 w-auto" />
                            <span className="font-bold text-lg">BeatCircle</span>
                        </a>
                    </li>
                    <li>
                        <MainNavLink href="/">Home</MainNavLink>
                    </li>
                    <li>
                        <MainNavLink href="#">Explore</MainNavLink>
                    </li>
                    <li>
                        <MainNavLink href="#">Playlists</MainNavLink>
                    </li>
                    <hr className="my-6" />
                    <li>
                        <MainNavLink href="#" className="btn-ghost btn-active text-center rounded-full inline font-extrabold">New playlist</MainNavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};