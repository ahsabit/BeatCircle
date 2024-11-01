import MusicSection from "@/Components/MusicSection";
import PageHeader from "@/Components/PageHeader";
import { Head } from "@inertiajs/react";
import { createContext } from "react";

export const UserContext = createContext();

export default function Search({ auth, result }) {
    console.log(result);

    return (
        <>
            <Head title="BeatCircle" />

            <UserContext.Provider value={auth.user}>
                <PageHeader />
            </UserContext.Provider>

            {result?.data && result.data.length > 0 ? (
                <MusicSection className="music_section z-20" musicList={result.data} title={result.data[0]['album']}/>
            ) : (
                <main className="flex flex-col md:ml-48 mt-10">
                    <span className="text-center w-full block font-bold text-xl">Oops... no match was found.</span>
                </main>
            )}
        </>
    );  
}
