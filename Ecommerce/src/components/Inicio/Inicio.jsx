import useMobile from "../../hooks/useMobile"

export const Inicio = () => {
const isMobile =  useMobile()
    return  (
        <main>
       
            <h2>inicio</h2>
            <hr />
            {
              isMobile 
              ? <h3>Estamos en mobile</h3>
              : <h3>Estamos en desk</h3>
            }
          
       
      </main>
  
    )
}