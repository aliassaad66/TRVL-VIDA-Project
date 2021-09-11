const React = require("react");

const { BrowserRouter, Switch, Route } = require("react-router-dom");
const SignUp = require("./signup");
const Nav = require("./nav");
const Clock = require("./clock");
const Home = require("./home");
const About = require("./about");
const ButtonClicks = require("./ButtonClicks");
const Menu = require("./menu");
const Service = require("./service");
const Footer = require("./footer");
const CountrySearch = require("./countrySearch");

function App(){
    let pageTitle = "TRVL VIDA"
        return(
            <BrowserRouter>
            <Nav title={pageTitle} />
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
            <CountrySearch />
            <SignUp />
            <ButtonClicks />
            <Clock />
            <Footer />
        </BrowserRouter>
    );
}

module.exports = App;