import React, { createContext, useState } from 'react';

export const MovieContext = createContext({ query: "transformer", setQuery: () => { } });

export const MovieProvider = (props) => {

    const [query, setQuery] = useState('')

    const contextValue = { query, setQuery }

    return (
        <MovieContext.Provider value={contextValue}>
            {props.children}
        </MovieContext.Provider>
    );
};

