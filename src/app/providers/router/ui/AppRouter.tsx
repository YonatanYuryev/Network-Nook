import { FC, Suspense } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => (
    <Suspense fallback={(
        <PageLoader />
    )}
    >
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    </Suspense>
);

export default AppRouter;
