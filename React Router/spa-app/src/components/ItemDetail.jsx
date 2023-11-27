import { useParams } from "react-router-dom"

const ItemDetail = () => {

  const {id} = useParams();

  return (
    <div>
      <h1>Item Detail</h1>
      <p>Item ID: {id}</p>
    </div>
  )
}

export default ItemDetail;
