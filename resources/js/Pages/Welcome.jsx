import MusicSection from '@/Components/MusicSection';
import PageHeader from '@/Components/PageHeader';
import { Head } from '@inertiajs/react';
import { createContext } from 'react';

export const UserContext = createContext();

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const HistoryList = [
        {
            title : 'Hello world',
            album : 'The album',
            artist : 'The artist',
            price : '$5',
            cover : 'https://placehold.co/400',
            link : '#'
        },
        {
            title : 'Hello world',
            album : 'The album',
            artist : 'The artist',
            price : '$5',
            cover : 'https://placehold.co/400',
            link : '#'
        },
        {
            title : 'Hello world',
            album : 'The album',
            artist : 'The artist',
            price : '$5',
            cover : 'https://placehold.co/400',
            link : '#'
        },
    ];
    return (
        <>
            <Head title="BeatCircle"/>
            <UserContext.Provider value={auth.user}>
                <PageHeader />
            </UserContext.Provider>
            <MusicSection musicList={HistoryList} />
        </>
    );
}
