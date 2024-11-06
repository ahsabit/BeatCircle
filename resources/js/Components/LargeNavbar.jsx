
import MainNavLink from './MainNavLink';
export default function LargeNavbar ({ className }) {
    return (
        <ul className={"hidden fixed top-0 left-0 menu bg-base-200 text-base-content min-h-full w-64 p-4 md:flex z-30 " + className}>
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
    )
};