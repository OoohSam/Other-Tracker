import React,{createContext,useReducer} from "react";
import MyReducer from "../Components/MyReducer";
const initialState = {

   car: [
       {
           color:"Black",
           model:"Range rover",
           make:"Defender",
           price:2000
       },
       {
           color:"white",
           model:"Porsche",
           make:"Panamera",
           price:4000
       },
       {
           color:"silver",
           model:"Toyota",
           make:"Land Cruiser",
           price:3000
       }
   ]
}

export const GlobalState = createContext(initialState)


export function GlobalProvider({children}){
    const[state,dispatch] = useReducer(MyReducer,initialState)
   console.log("how is ",state.car)
  

   return(
        <GlobalState.Provider value={
            {car:state.car}
        }>
            {children}
        </GlobalState.Provider>
    )
}