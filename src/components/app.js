const React = require("react");

const { BrowserRouter, Switch, Route } = require("react-router-dom");
const SignUp = require("./signup");
const Nav = require("./nav");
const Clock = require("./clock");
const Home = require("./home");
const About = require("./about");
const Button = require("./button");
const Menu = require("./menu");
const Service = require("./service");

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
                <Route path="/menu">
                    <Menu />
                </Route>
                <Route path="/service">
                    <Service />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

module.exports = App;