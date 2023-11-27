import './App.css'
import Item from './components/Item'
import ItemDate from './components/ItemDate'
import React from 'react'
import Card from './components/Card'
import NewProduct from './components/NewProduct'


export default function App() {


  const response = [
    {

      itemName: "Nirma1",
      itemDate: "201",
      itemMonth: "June1",
      itemYear: "19981"

    },
    {

      itemName: "Nirma2",
      itemDate: "220",
      itemMonth: "June2",
      itemYear: "19982"

    },
    {

      itemName: "Nirma3",
      itemDate: "203",
      itemMonth: "June3",
      itemYear: "19983"

    },

  ];
  // const Items = (element) => {
  //   return (
  //     <div>
  //       <Item name={element.itemName} />
  //       <ItemDate day={element.itemDate} month={element.itemMonth} year={element.itemYear} />
  //     </div>
  //   )
  // }

  // response.forEach(element => {
  //   Items(element);
  // });

  return (
    <div>
    <NewProduct />
    <Card>

        <Item name={response[0].itemName}></Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />
        <Item name={response[1].itemName} />
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} />
        <Item name={response[2].itemName} />
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} />

        <main>
          Hello Jee
        </main>
    </Card>
      </div>


  )
}
