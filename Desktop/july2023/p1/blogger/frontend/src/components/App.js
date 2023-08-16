import React, { Component, Fragment } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

// Redux

import { Provider } from "react-redux";
import store from "../store";

// Components
import Header from "./layout/Header";
import Body from "./layout/Body";

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
            <Fragment>
                <Header />
                <br />
                <div className="container">
                    <Body />
                </div>
                
                </Fragment>
            </Provider>
        )
    }
}

const root = createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// reportWebVitals();