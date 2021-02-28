import React, { Suspense } from 'react';

const WithSuspense = (Component) =>  () => (
      <Suspense fallback={<h1>Loading posts...</h1>}>
         <Component/>
      </Suspense>
   );


export default WithSuspense;