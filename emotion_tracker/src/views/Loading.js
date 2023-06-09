import ScaleLoader from "react-spinners/ScaleLoader";
import {CSSProperties} from 'react';

const override: CSSProperties = {
    display: "block",
    // margin: "0 auto",
    borderColor: "white",
  };

const Loading = () => {
    return (
        <div className="Loading">
        <ScaleLoader
        color="white"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.4}
        />
        </div>
    );
}
export default Loading;
