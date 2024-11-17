import { createContext } from "react";


export const DarkModeContext = createContext();

export const DarkModerProvider = ({children}) => {

    return(
        <DarkModeContext.Provider>
            {children}
        </DarkModeContext.Provider>
    )
}

    
