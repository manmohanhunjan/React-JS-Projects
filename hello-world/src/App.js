// import logo from './logo.svg';
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Destructuring from "./components/Destructuring";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
    <ParentComponent />
    {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
    {/* <Counter />
    <Destructuring name="Bruce" heroName="Batman"/> */}
    {/* <Message/> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman" />
      <button>Action</button>
      <Greet name="Diana" heroName="Wonder Woman" />

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
      
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
