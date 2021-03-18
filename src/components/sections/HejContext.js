import React, { useContext, useState } from 'react';

export const HejContext = React.createContext();
export const HejUpdateContext = React.createContext();

// Can return them to use
// import useHej
// const variable = useHej()
// instead of...
// import useContext
// const variable = useContext(hejcontext)

// export function useHej() {
//     return useContext(HejContext);
// }

// export function useHejUpdate() {
//     return useContext(HejUpdateContext);
// }

export function HejHejProvider({ children }) {
    const [hejState, setHejState] = useState('hej');

    function setTestStateFunc(arg1) {
        setHejState(() => `hejhej! ${arg1}`);
    }

    return (
        <HejContext.Provider value={hejState}>
            <HejUpdateContext.Provider value={setTestStateFunc}>
                {children}
            </HejUpdateContext.Provider>
        </HejContext.Provider>
    );
}
