import React,{useContext} from "react";
import { GlobalState } from "../Context/GlobalState";


export function Dashboard(){
    const {initialState} = useContext(GlobalState)
    console.log(initialState)


    return(
        <h1>
    Bus te
        </h1>
    )
}