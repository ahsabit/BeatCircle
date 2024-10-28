import { HistorySection } from '@/Components/HistorySection';
import PageHeader from '@/Components/PageHeader';
import { Head } from '@inertiajs/react';
import { createContext } from 'react';

export const UserContext = createContext();

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="BeatCircle"/>
            <UserContext.Provider value={auth.user}>
                <PageHeader />
            </UserContext.Provider>
            <HistorySection />
        </>
    );
}
