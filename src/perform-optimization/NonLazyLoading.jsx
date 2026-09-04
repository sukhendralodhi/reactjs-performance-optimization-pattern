import { useState } from 'react';
import Heavy from './Heavy';
import Light from './Light';

const NonLazyLoading = () => {

    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div>
            <Light />
            <button onClick={() => setShowHeavy(!showHeavy)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                {showHeavy ? 'Hide Heavy Component' : 'Show Heavy Component'}
            </button>
            {showHeavy && <Heavy />}
        </div>
    )
}

export default NonLazyLoading