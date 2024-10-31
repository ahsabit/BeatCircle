import MainSection from '@/Components/MainSection';
import PageHeader from '@/Components/PageHeader';
import { Head } from '@inertiajs/react';
import { createContext } from 'react';

export const UserContext = createContext();

export default function Home({ auth }) {

    return (
        <>
            <Head title="BeatCircle"/>
            
            <UserContext.Provider value={auth.user}>
                <PageHeader />
            </UserContext.Provider>

            <MainSection />
        </>
    );
}
