function TooFarAway({km}) {
    return(
        <header className="App-header">
   <div style={{display:"flex", flexDirection:"column"}}>
        <h1>You are too far away</h1>
        <div style={{width: '500px'}}>
        <p>You are {km}km away from Nokia HQ.</p>
        <p>To make the most of this application, we kindly note that it requires you to be within a 1.5km radius of the Nokia HQ building.</p>
        <p> Thank you for your understanding.</p>
        </div>
   </div>     
        </header>
    );
}
export default TooFarAway;