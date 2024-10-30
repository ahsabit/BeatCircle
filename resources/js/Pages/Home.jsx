import MusicSection from '@/Components/MusicSection';
import PageHeader from '@/Components/PageHeader';
import { Head } from '@inertiajs/react';
import { createContext } from 'react';

export const UserContext = createContext();

export default function Welcome({ auth }) {
    const HistoryList = [
    ];
    for (let i = 0; i < 10; i++) {
        HistoryList[i] = 
        {
            title : 'Hello world',
            album : 'The album',
            artist : 'The artist',
            price : '$5',
            cover : 'https://placehold.co/400',
            link : '#'
        };
    }
    return (
        <>
            <Head title="BeatCircle"/>
            <UserContext.Provider value={auth.user}>
                <PageHeader />
            </UserContext.Provider>
            <main>
                <MusicSection musicList={HistoryList} title="I am title" />
            </main>
        </>
    );
}
