
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";

import React from "react";
import App from './App';


//Posts

// import LeadvilleHalf from "./deprecated_components/Posts_Endurance/leadville_half";


// Common Components
import Error404 from "./components/common/error404";


//AWS

// import Amplify from 'aws-amplify';
// import Analytics from '@aws-amplify/analytics';
// import Auth from '@aws-amplify/auth';

// import awsconfig from './aws-exports';
// import { Logger } from 'aws-amplify';


//Redux
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'
const store = configureStore();
const persistor = persistStore(store);


ReactDOM.render(
    <Provider store = {store}>
         <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <App />)} />
        </div>
    </BrowserRouter>
    </PersistGate>
    </Provider>,
    document.getElementById("root")
);
serviceWorker.unregister();



