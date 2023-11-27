import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ItemDetail from "./components/ItemDetail";
import ItemList from "./components/ItemList";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact Component={Home}/>
          <Route path="/item" Component={ItemList}/>
          <Route path="/item/:id" Component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
