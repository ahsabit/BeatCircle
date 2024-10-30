import MusicSection from '@/Components/MusicSection';
import PageHeader from '@/Components/PageHeader';
import { Head } from '@inertiajs/react';
import { createContext, useEffect, useRef, useState } from 'react';

export const UserContext = createContext();

export default function Home({ auth }) {
    const [musicData, setMusicData] = useState([]);
    const reqNum = useRef(0);
    useEffect(() => {
        let winHeight = window.innerHeight;
        const bundle = Math.floor(winHeight / 300);
        window.axios.post(route('music.fetch'), {
            bundle_count : bundle,
            req_num : reqNum.current
        }).then((res) => {
            setMusicData(res.data);
        }).catch((err) => {
            console.log(err);
        });
        window.addEventListener('scroll', (e) => {
            let scrollT = window.scrollY || document.documentElement.scrollTop;
            var topScroll = scrollT + 200;
            if (document.querySelectorAll('.music_section')[0].clientHeight <= topScroll) {
                alert(scrollT);
            }
        });
    }, []);
    return (
        <>
            <Head title="BeatCircle"/>
            <UserContext.Provider value={auth.user}>
                <PageHeader />
            </UserContext.Provider>
            <main className="flex flex-col">
                {
                    musicData.map((musics, i) => {
                        return(
                            <MusicSection className="music_section" key={i} musicList={musics} />
                        );
                    })
                }
            </main>
        </>
    );
}
