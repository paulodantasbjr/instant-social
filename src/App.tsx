import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalLoading } from 'components/GlobalLoading/GlobalLoading';
const Home = lazy(() => import('./pages/home/Home'));

export const App = () => {
    return (
        <Suspense fallback={<GlobalLoading />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
