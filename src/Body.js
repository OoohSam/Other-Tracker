import React,{useContext} from "react";
import { GlobalState } from "./Context/GlobalState";

export function Body(){
    console.log("I am the Vine and ye are the branches")

    const {initialState} = useContext(GlobalState)
    console.log(initialState)


    return(
        <div>
         {
            
         }
        </div>
    )
}