import React from "react";
import Stats from "./stats";
import Edit from "./edit";
import { Switch, Route, Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/dashboard/edit">Edit</Link>
                </li>
                <li>
                    <Link to="/dashboard/stats">Stats</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/dashboard/stats" component={Stats} />
                <Route path="/dashboard/edit" component={Edit} />
            </Switch>
        </>
    );
};

export default Dashboard;
