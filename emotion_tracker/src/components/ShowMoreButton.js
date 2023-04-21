import React, {useState} from "react";
import "../css/SubEmotions.css"

const ShowMoreButton = ({ showMore, setShowMore }) => {

    const clickHandler = () => {
        setShowMore(!showMore);
        console.log(showMore);
    }

    return(
<div className="show-more">
    <button 
    className="howOthersFeltButton"
    onClick={() => clickHandler()}
    >Show more emotions</button>
</div>
    );
}
export default ShowMoreButton;