import { FC, Suspense } from 'react';
import Preloader from '../../../components/shared/preloader/Preloader';

export const WithSuspense = (Component: FC) => {
  const ComponentWithSuspense = (props: any) => {
    return (
      <Suspense fallback={<Preloader isFetching={false} />}>
        <Component {...props} />
      </Suspense>
    );
  };

  return ComponentWithSuspense;
};
