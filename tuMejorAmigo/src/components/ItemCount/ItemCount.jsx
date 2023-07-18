import { Button } from "react-bootstrap";

const ItemCount = ({ max, counter, setCounter, handleAggregate }) => {
  const handlAdd = () => counter < max && setCounter(counter + 1);
  const handlSubtract = () => counter > 0 && setCounter(counter - 1);

  return (
    <div className=" d-flex row w-75 mt-3">
      <div className="col-6 d-flex justify-content-between  rounded p-0 w-25 ">
      <button
        variant="outline-primary"
        onClick={handlSubtract}
        className={counter === 1 ? "btn btn-danger" : " btn btn-outline-info "}
        disabled={counter === 1}
      >
        -
      </button>
      <span variant="" className=" m-2">
        {counter}
      </span>
      <button
        variant="outline-primary"
        onClick={handlAdd}
        className={
          counter === max ? " btn btn-outline-secondary" : " btn btn-outline-info "
        }
        disabled={counter === max}
      >
        +
      </button>
      </div>
      
     
      <button className=" btn button-primary col-6 ms-3 w-25" onClick={handleAggregate}>
        Agregar 
      </button>
    </div>
  );
};

export default ItemCount;
 