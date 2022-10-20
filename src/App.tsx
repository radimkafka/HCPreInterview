import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Question2 } from "./Question2";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="break container">
          <Switch>
            <Route path="/question2">
              <Question2 />
            </Route>
            <Route path="*">
              <ul>
                <li>
                  You should be able to solve the two questions in less than 30
                  minutes.
                </li>
                <li>
                  <b>Important:</b> Please include the URL to your sandbox in
                  your application.
                </li>
              </ul>

              <ol>
                <li>
                  <p>Question 1</p>
                  <p>
                    Given an array of integers or arrays. Write a function that
                    sums up all integers in the array.
                    <br />
                    For example, if the input is [[3, 2], [1], [4, 12], [2,
                    [3,7]]]  then your program should output 34 because 3 + 2 +
                    1 + 4 + 12 + 2 + 3 + 7 = 34.
                    <br />
                    <b>Warning</b>: One unit test features a deeply nested
                    array. Please make sure that your solution works in common
                    browsers (Chrome, Firefox, Edge, ...)
                  </p>
                </li>
                <li>
                  <Link to="/question2">
                    Question 2: ReactJS fetching + rendering
                  </Link>
                  <p>
                    Fetch and render the deliveries in the table sorted by
                    status and eta ascendant.
                    <br />
                    Status should be sorted in the following order: active,
                    upcoming, pending.
                  </p>
                </li>
              </ol>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
