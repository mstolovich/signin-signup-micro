import React, { lazy, Suspense } from 'react';

const LazyInputField = lazy(() => import('./InputField'));

const InputField = props => (
  <Suspense fallback={null}>
    <LazyInputField {...props} />
  </Suspense>
);

export default InputField;
