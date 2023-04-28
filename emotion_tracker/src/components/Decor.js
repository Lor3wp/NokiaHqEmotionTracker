import React, {useEffect, useState} from 'react';
import backendAddress from '../data/apiHooks';
import emotionData from '../data/emotionData';

const Decor = () => {
    const amount = 10;
    let thisDay = null;
    
    const createCurrentDay = () => {
        const options = { weekStartsOn: 1 };
    
        const today = new Date();
        let dateFormat = [];
        dateFormat.push(today.getDate());
        dateFormat.push(getWeek(today, options));
        dateFormat.push(today.getMonth() + 1);
        dateFormat.push(today.getFullYear());
    
        thisDay = dateFormat;
    };
    const fetchData = async () => {
        createCurrentDay();
        const response = await fetch(
            backendAddress +
              `emotions/getday/${thisDay[3]}/${thisDay[2]}/${thisDay[0]}`
        );
        const jsonData = await response.json();
    };
    
};