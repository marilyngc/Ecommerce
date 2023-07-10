import { useRef } from "react"
import {useSearchParams} from "react-router-dom "
const Search = () => {

  const [,setSearchParams] = useSearchParams()  
 const ref = useRef() // para capturar el valor del input


const handleSubmit = (e) => {
    e.preventDefault()
    const value = ref.current.value

    if (value === " ") {
        setSearchParams({}
            )
            return
    }
    setSearchParams({search: value})


}
const handleReset = () =>{
    setSearchParams({})
}
     return(

        <form action="" className="p-5" onClick={handleSubmit}>
            <input type="text" className="form-control"  ref={ref}/>
            <button type="submit" className="btn btn-primary">Buscar</button>
            <button type="reset" onClick={handleReset} className="btn btn-primary">X</button>
        </form>
    )
}

export default Search