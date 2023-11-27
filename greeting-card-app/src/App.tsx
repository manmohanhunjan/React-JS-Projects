import React,{useState} from "react";
import "./App.css";

interface GreetingCardProps {
  name: string;
  message: string;
}

const GreetingCard: React.FC<GreetingCardProps> = (props) => {


  return(
    <div className="card">
      <h2>Hello, {props.name}!</h2>
      <p>{props.message}</p>
    </div>
  );
};

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  const updateMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <h1>Greeting Card App</h1>
      <GreetingCard name="Alice" message={message}/>
        <textarea value={message} onChange={updateMessage} />
        <button className={'btn'} onClick={() => setMessage('')}>Clear Message</button>
    </div>
  );
};

export default App;