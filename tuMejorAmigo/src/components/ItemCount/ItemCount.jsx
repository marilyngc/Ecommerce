import { Button } from "react-bootstrap";

const ItemCount = ({ max, counter, setCounter, handleAggregate }) => {
  const handlAdd = () => counter < max && setCounter(counter + 1);
  const handlSubtract = () => counter > 0 && setCounter(counter - 1);

  return (
    <div>
      <Button
        variant="outline-primary"
        onClick={handlSubtract}
        className={counter === 1 ? "btn btn-danger" : "btn-outline-info"}
        disabled={counter === 1}
      >
        -
      </Button>
      <span variant="" className="border mx-4 px-5">
        {counter}
      </span>
      <Button
        variant="outline-primary"
        onClick={handlAdd}
        className={
          counter === max ? " btn btn-outline-secondary" : "btn-outline-info"
        }
        disabled={counter === max}
      >
        +
      </Button>
      <br />
      <Button className="btn-outline-info mt-2" onClick={handleAggregate}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
 