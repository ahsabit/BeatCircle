import LargeNavbar from "@/Components/LargeNavbar";
import MusicPlayer from "@/Components/MusicPlayer";

export default function Show ( { music } ) {
    return(
        <>
            <LargeNavbar />
            <MusicPlayer music={music} />
        </>
    )
};