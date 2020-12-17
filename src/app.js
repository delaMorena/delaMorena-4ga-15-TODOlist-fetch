import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import injectContext from "./store"

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js"

import Home from "./pages/home.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"
import User from "./pages/user.js"

export default injectContext(function(props) {
    return (
        <Router>
            <Navbar />
            
            <div className="page">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/users/:id">
                        <User />
                    </Route>
                </Switch>
            </div>

            <Footer />
        </Router>
    )
})