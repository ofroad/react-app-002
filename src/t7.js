//switch使用
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch,Redirect } from "react-router-dom";

function AmbiguousExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Index (static)</Link>
          </li>
          <li>
            <Link to="/about">About Us (static)</Link>
          </li>
          <li>
            <Link to="/company">Company (static)</Link>
          </li>
          <li>
            <Link to="/kim">Kim (dynamic)</Link>
          </li>
          <li>
            <Link to="/chris">Chris (dynamic)</Link>
          </li>
          <li>
            <Link to="/chris1111/123">Chris1111 (dynamic)</Link>
          </li>
        </ul>

        {/*
          Sometimes you want to have a whitelist of static paths
          like "/about" and "/company" but also allow for dynamic
          patterns like "/:user". The problem is that "/about"
          is ambiguous and will match both "/about" and "/:user".
          Most routers have an algorithm to decide for you what
          it will match since they only allow you to match one
          "route". React Router lets you match in multiple places
          on purpose (sidebars, breadcrumbs, etc). So, when you
          want to clear up any ambiguous matching, and not match
          "/about" to "/:user", just wrap your <Route>s in a
          <Switch>. It will render the first one that matches.
      */}
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/company" component={Company} />
          <Route exact path="/:user" component={User} />
          <Route component={Notfind} />
        </Switch>
      </div>
    </Router>
  );
}

function Index() {
  return <h2>Index</h2>;
}
function About() {
  return <h2>About</h2>;
}

function Company() {
  return <h2>Company</h2>;
}
function Notfind() {
  return <h2>404</h2>;
}

function User({ match }) {
  return (
    <div>
      <h2>User: {match.params.user}</h2>
    </div>
  );
}

export default AmbiguousExample;
