import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Tab from '../components/Tab';
import Playlist from '../components/Playlist'
import Layout from '../container/Layout'


const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Layout exact path='/' component={Tab}/>
                    <Layout exact path='/playlist' component={Playlist}/>
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;