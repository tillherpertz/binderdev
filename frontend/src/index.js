import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";

import App from './App';

import client from "./utils/apolloClient";

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
    <React.StrictMode>
        <Router>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </Router>
    </React.StrictMode>
);