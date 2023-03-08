import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import App from './App';

const client = new ApolloClient({
    uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <Router>
        <ApolloProvider client={client}>
            <CookiesProvider>
                <App />
            </CookiesProvider>
        </ApolloProvider>
    </Router>
);