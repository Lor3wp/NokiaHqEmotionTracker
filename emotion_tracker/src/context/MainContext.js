import React, {useState} from 'react';
import PropTypes from 'prop-types';

const MainContext = React.createContext({});

const MainProvider = (props) => {

    const [pieData, setPieData] = useState({
        labels: [],
        datasets: [
            {
                label: "Total emotions in piechart",
                data: [],
                backgroundColor: [],
            },
        ],
    });

    return (
        <MainContext.Provider
            value={{
                pieData,
                setPieData
            }}
        >
            {props.children}
        </MainContext.Provider>
    );
};

MainProvider.propTypes = {
    children: PropTypes.node,
};

export {MainContext, MainProvider};
