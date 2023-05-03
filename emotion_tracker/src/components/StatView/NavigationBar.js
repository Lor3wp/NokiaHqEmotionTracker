/**
 * This file contains the burger menu for chartType selection
 *
 * NavigationBar(props)
 *     toggleMenu()
 *     switchChart(type)
 *     return()
 *
 * */
import {useState} from "react";
import "../../css/NavBar.css";
import charts from "../../data/charts";

const NavigationBar = (props) => {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => {
        setToggle(!toggle)
    }
    const switchChart = (type) => {
        props.setChartType(type)
        toggleMenu()
    }

    return (
        <nav>
            <ul id="burger-menu">
                <li>
                    <button id="menu-button" aria-label="menu button" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </li>
                {charts.map((elem) => (
                    <li className="toggleable" key={elem.type}
                        style={{visibility: toggle ? "visible" : "hidden"}}>
                        <button aria-label={elem.label} >
                            <span onClick={() => switchChart(elem.chart_type)} className="material-symbols-outlined">{elem.icon}</span>
                        </button>
                    </li>
                ))}

            </ul>
        </nav>
    )
}
export default NavigationBar;
