const React = require("react");

const { BrowserRouter, Switch, Route } = require("react-router-dom");
const SignUp = require("./signup");
const Nav = require("./nav");
const Clock = require("./clock");
const Home = require("./home");
const About = require("./about");
const Button = require("./button");

function App(){
    let pageTitle = "TRVL VIDA";
    return(
        <BrowserRouter>
            <Nav title={pageTitle} /> 
            <Clock />
            <SignUp />
            <Button />
            <Switch>
                <Route exact={true} path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

module.exports = App;