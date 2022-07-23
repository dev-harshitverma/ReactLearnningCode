import React from "react";

const CurrentDateTime = () => {
    const info = new Date();
    const currentDate = info.toLocaleDateString();
    const currentTime = info.toLocaleTimeString();
    const currenthour= info.getHours();
    // internal css
    const someStyle = {
        border: '2px solid red',
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 20
    }
    let greetings = "Good Morning"
    if (12 <= currenthour && currenthour < 19) {
        greetings = "Good Evening";
        console.log(currenthour);
    }
    return (
        <>
        {/* inline css */}
            <div className="container" style={{ textAlign: "center", backgroundColor: "pink", padding: 30, margin: 30 }}>
                <div className="greetings">
                    <h2>Hello Sir, {greetings}</h2>
                </div>
                <div style={someStyle}>
                    <h1>Cureent Date and Time</h1>
                    <p>current date is : {currentDate}</p>
                    <p>current Time is : {currentTime}</p>
                </div>
            </div>
        </>
    )
}


export default CurrentDateTime;