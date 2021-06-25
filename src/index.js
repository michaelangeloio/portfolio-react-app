import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
// Stylesheet
import "./index.scss";
// Scenes
// import Demo from "./scenes/Demo";
// import Home from "./scenes/Home";
// import Home2 from "./scenes/Home2";
import Home3 from "./scenes/Home3";
// import Home4 from "./scenes/Home4";
// import Home5 from "./scenes/Home5";
// import Home6 from "./scenes/Home6";
// Components
import Error404 from "./components/common/Error404";
import RedirectAs404 from "./components/common/RedirectAs404";

const Root = () => {
    return (
        <div>
            <Switch>
                 <Route exact path="/" component={Home3} />
                <Route path="/" component={Home3} />
                
                {/* <Route path="/home-1" component={Home} />
                <Route path="/home-2" component={Home2} /> */}
              
                {/* <Route path="/home-4" component={Home4} />
                <Route path="/home-5" component={Home5} />
                <Route path="/home-6" component={Home6} /> */}
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
};

ReactDOM.render(
    <HashRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <Root />)} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);
serviceWorker.unregister();
