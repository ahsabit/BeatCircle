import MainSection from '@/Components/MainSection';
import PageHeader from '@/Components/PageHeader';
import { Head } from '@inertiajs/react';
import { createContext, useRef } from 'react';

export const UserContext = createContext();

export default function Home({ auth }) {
    const mainSectionRef = useRef(null);

    return (
        <>
            <Head title="BeatCircle"/>
            
            <UserContext.Provider value={auth.user}>
                <PageHeader />
            </UserContext.Provider>

            <MainSection mainSectionRef={mainSectionRef}/>
        </>
    );
}
