 import React from "react";

const GameComp = (props) => {
    let x = props.x;
    let y = props.y;
    let z = props.z;
    if(x===y && y===z && z===x){
        return (
            <>
              <div>
                <p>{x} {y} {z}</p>
                <p>Matchng</p>  
              </div>
            </>
        )
    }else{
        return (
            <>
              <div>
                <p>{x} {y} {z}</p>
                <p>Not Matchng</p>
              </div>
            </>
        )
    }
   
}


export default GameComp;