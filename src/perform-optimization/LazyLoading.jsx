import React, { Suspense, useState } from 'react';
import Light from './Light';
// import Heavy from './Heavy';

const Heavy = React.lazy(() => import("./Heavy"));

const LazyLoading = () => {

    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div>

            <Light />
            <button onClick={() => setShowHeavy(!showHeavy)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                {showHeavy ? 'Hide Heavy Component' : 'Show Heavy Component'}
            </button>

            <Suspense
                fallback={
                    <div style={{ padding: "20px" }}>Loading heavy component...</div>
                }
            >

                {showHeavy && <Heavy />}
            </Suspense>

        </div>
    )
}

export default LazyLoading