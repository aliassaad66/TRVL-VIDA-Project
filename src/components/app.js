const React = require("react");

const { BrowserRouter, Switch, Route } = require("react-router-dom");
const SignUp = require("./signup");
const Nav = require("./nav");
const Clock = require("./clock");
const Home = require("./home");
const About = require("./about");

function App(){
    let pageTitle = "TRVL VIDA";
    return(
        <BrowserRouter>
            <Nav title={pageTitle} /> 
            <Clock />
            <Switch>
                <Route exact={true} path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

module.exports = App;