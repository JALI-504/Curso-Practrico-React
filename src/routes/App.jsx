import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import Newpass from "../containers/Newpass";
import '../styles/global.css';

const App  = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path="/" component={Home}/> 
                <Route exact path="/login" component={Login}/> 
                <Route exact path="/newpass" component={Newpass}/> 
                <Route component={NotFound}/>             
            </Layout>
        </Switch>   
        </BrowserRouter>

    );
}

export default App;