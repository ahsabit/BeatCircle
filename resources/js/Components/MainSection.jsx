import MusicSection from '@/Components/MusicSection';
import { useEffect, useRef, useState } from 'react';

export default function MainSection () {
    const [musicData, setMusicData] = useState([]);
    const reqNum = useRef(0);

    useEffect(() => {
        let winHeight = window.innerHeight;
        const bundle = Math.floor(winHeight / 300);
        window.axios.post(route('music.fetch'), {
            bundle_count : bundle,
            req_num : reqNum.current
        }).then((res) => {
            reqNum.current++;
            setMusicData(res.data);
        }).catch((err) => {
            console.log(err);
        });
        window.addEventListener('scroll', (e) => {
            let {scrollTop, scrollHeight, clientHeight} = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
                fetchMoreData(route('music.fetch'), 1, reqNum.current);
            }
        });
    }, []);

    /**
    * Fetches data from the Back-End and updates the music data state if data is received.
    *
    * @param {string} endpoint - The API endpoint to send the request to.
    * @param {number} bundleCount - The number of bundles to fetch in each request.
    * @param {number} requestNumber - The current request number being performed.
    * @returns {Promise<void>} A promise that resolves once the data fetch and state update process is complete.
    */
    const fetchMoreData = (endpoint, bundleCount, requestNumber) => {
        window.axios.post(endpoint, {
            bundle_count : bundleCount,
            req_num : requestNumber
        }).then((res) => {
            reqNum.current++;
            if (res.data[0].length > 0) {
                setMusicData(prev => [...prev, res.data[0]]);
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <main className="flex flex-col">
            {
                musicData.map((musics, i) => {
                    return(
                        <MusicSection className="music_section" key={i} musicList={musics} />
                    );
                })
            }
        </main>
    );
}