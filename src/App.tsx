import React, { useEffect } from 'react';
import { Conferences } from './pages/conferences';

function App() {
    useEffect(() => {
        window.document.title = 'Conferences';
    }, []);
    return (
        <div className="App">
            <Conferences />
        </div>
    );
}

export default App;
