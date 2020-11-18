import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Remember that HTML attributes get converted into camel case
// Thus on-click becomes onClick

// Remember that despite increasing count, it won't change what we see because we haven't rendered the page again
// This means we could put the ReactDom back into the function increase

// This gives us:
// function increase() {
//   count++;
//   console.log(count);
//   ReactDOM.render(
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>,
//     document.getElementById("root")
//   );
// }

// This can be solved by using hooks. See the solution on the App page. Hooks can only be used within a function component
