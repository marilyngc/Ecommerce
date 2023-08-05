import { Button } from "react-bootstrap";

const ItemCount = ({ max, counter, setCounter, handleAggregate }) => {
  const handlAdd = () => counter < max && setCounter(counter + 1);
  const handlSubtract = () => counter > 0 && setCounter(counter - 1);

  return (
    <div className=" d-flex row w-75 mt-lg-3 ms-lg-1 ">
      <div className="col-6 d-flex justify-content-between  rounded p-0 w-25 ">
      <button
        variant="outline-primary"
        onClick={handlSubtract}
        className={counter === 1 ? "btn btn-outline-secondary" : " btn btn-outline-info "}
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
      
     
      <button className=" buttonAdd col-6   ms-3 w-25" onClick={handleAggregate}>
  <span class="span-mother">
      <span>A</span>
      <span>g</span>
      <span>r</span>
      <span>e</span>
      <span>g</span>
      <span>a</span>
      <span>r</span>
  </span>
  <span class="span-mother2">
      <span>A</span>
      <span>g</span>
      <span>r</span>
      <span>e</span>
      <span>g</span>
      <span>a</span>
      <span>r</span>
  </span>
</button>

    
    </div>
  );
};

export default ItemCount;
 