import React from "react";
import GameComp from "./GameComp";

const myStyle = {
    width: 600,
    margin: '0 auto',
    padding: '20px 0',
    backgroundColor: 'pink'
}



const Game = () => {
    return (
        <>
            <div style={myStyle}>
                <div style={{ textAlign: 'center'}}>
                    <h2> 💻 Welcome to <span> slot machine game</span> 💻 </h2>
                </div>
                <GameComp x="👩" y="👩" z="👩"/>
                <GameComp x="👲" y="👩" z="👴"/>
                <GameComp x="👮‍♂️" y="👨‍🏭" z="👩"/>
            </div>
        </>
    )
}



export default Game;