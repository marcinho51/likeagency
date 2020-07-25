import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./scss/main.scss";
import StepOne from "./components/Form/StepOne";
// import StepTwo from "./components/Form/StepTwo";
// import StepThree from "./components/Form/StepThree";
// import OrderInfo from "./components/Summary/OrderInfo";
// import UserData from "./components/Summary/UserData";
// import Delivery from "./components/Summary/Delivery";
// import Final from "./components/Summary/Final";
// import ThankYou from "./components/Summary/ThankYou";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={StepOne} />
        {/* <Route exact path="/oddaj-rzeczy" component={Step1} />
        <Route exact path="/logowanie" component={Login} />
        <Route exact path="/rejestracja" component={Register} />
        <Route exact path="/wylogowano" component={Logout} /> */}
      </Switch>
    </HashRouter>
  );
}

export default App;
