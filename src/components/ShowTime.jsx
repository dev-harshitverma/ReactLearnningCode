import React, {useState} from "react";

export const ShowTime = () => {
    let Showdate = new Date().toLocaleTimeString();
    // console.log(Showdate);
    const[time, setTime] = useState(Showdate);
    const style = {
        width : '400px',
        margin: '30px auto',
        backgroundColor: "pink",
        textAlign: 'center',
        padding: '20px 0'
    }
    const showNewTime = () => {
        console.log(time);
        Showdate = new Date().toLocaleTimeString();
        setTime(Showdate);
        console.log('button clicked');
    }
    return (
        <>
           <div className="showTime" style={style}>
              <h3>{time}</h3>
              <button style={{
                backgroundColor: 'blue',
                padding: "10px 20px",
                margin: '20px 0',
                color: '#fff',
                border: 0,
                cursor: 'pointer'
              }} onClick={()=> showNewTime()}>Show Time</button>
           </div>
        </>
    )
}


