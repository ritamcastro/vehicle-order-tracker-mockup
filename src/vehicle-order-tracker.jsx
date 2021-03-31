import React from "react"
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom"
import Dashboard from "./ui/pages/dashboard/dashboard"
import OrderDetails from "./ui/pages/order-details/order-details"

const VehicleOrderTracker = () => {

    return <BrowserRouter>
        <header>
            <Link to="/">
                <img alt="Home" src="assets/images/mandala.png" height="42" width="42" />
            </Link>
        </header>

        <main>
            <Switch>
                <Route path="/dashboard" render={() => <Dashboard />} />
                <Route path={`/orders/:orderId`} render={() => <OrderDetails />} />
                <Redirect exact from={"/"} to={"/dashboard"} />
            </Switch>
        </main>

        <footer>
            <p>Rita Castro | 2021</p>
        </footer>
    </BrowserRouter>
}

export default VehicleOrderTracker

