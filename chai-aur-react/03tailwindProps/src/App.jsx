
import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   username: "manmohan",
  //   age: 23
  // }

  // let newArr = [1, 2, 3]

  return (
    <><h1 className="text-3xl font-bold underline mb-4">
      Hello world!
    </h1>
      <Card username="chai aur code" btnText="click me"  />
      <Card username={"Hitesh Choudary"}/>

    </>

  )
}

export default App
