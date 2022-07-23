import React from "react";
import {Add, Sub, Div, Mul} from "./Cal";


const Marge = () =>{
    return (
        <>
           <ul>
               <li>Add of two no is : {Add(20, 20)}</li>
               <li>Sub of two no is : {Sub(20, 20)}</li>
               <li>Div of two no is : {Div(20, 20)}</li>
               <li>Mul of two no is : {Mul(20, 20)}</li>
           </ul> 
        </>
    )
}


export default Marge;