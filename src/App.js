import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import {data} from "./data";
import { v4 as uuidv1 } from 'uuid';


import All from "./Components/Pages/All";
import Animation from "./Components/Pages/Animation";
import Games from "./Components/Pages/Games";
import Television from "./Components/Pages/Television";

import Funk1 from "./Funkpops/Funk1";
import Vegeta from "./Funkpops/Vegeta";




import Box from "./Components/Box";
import Nav from "./Components/Nav";

class App extends Component {
    state = {
        data: data,
        name: '',
        category: '',
        value: '',
        id: uuidv1(),
        img: '',
        search: '',

    }
    getFilterData = () => {
        return this.state.data.filter(category =>
            category.name.toLowerCase().includes(this.state.search.toLowerCase())
        )
    }




    render() {
        return (
            <Router>
                <div className="App">
                    <Nav/>
                    <Switch>
                        <Route exact path={"/"} component={All}/>
                        <Route exact path={"/Animation"} component={Animation}/>
                        <Route exact path={"/Games"} component={Games}/>
                        <Route exact path={"/Television"} component={Television}/>
                        <Route exact path={"/Funk1"} component={Funk1}/>
                        <Route exact path={"/Vegeta"} component={Vegeta}/>
                        <Box getFilterData={this.getFilterData}/>
                    </Switch>
                </div>


            </Router>
        );
    }
}

export default App;