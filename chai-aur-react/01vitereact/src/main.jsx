import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  );
}

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

const username = "chai aur code";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to Visit google", 
  username
)

ReactDOM.createRoot(document.getElementById("root")).render(
  
    reactElement
  
);
