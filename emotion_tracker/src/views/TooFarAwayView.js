const TooFarAway = ({km}) => {
    return (
        <header className="App-header">
            <div style={{display: "flex", flexDirection: "column", margin: "36px"}}>
                <h1>You are too far away</h1>
                <div>
                    <p style={{textAlign: "justify"}}>You are {km}km away from Nokia HQ.
                        To make the most of this application, we kindly note that it requires you to be within a 1.5km radius of the Nokia HQ building.
                        Thank you for your understanding.</p>
                </div>
            </div>
        </header>
    );
}
export default TooFarAway;