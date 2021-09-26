import { NavLink } from "react-router-dom";
import {IconContext} from "react-icons";
import './NavMidItem.css';

export default function NavMidItem({item}){
    return(
        <>
            <NavLink className={"upper-side-navigation-middle-links"} activeClassName={"upper-side-navigation-middle-links-activate"} to={item.path}>
                <IconContext.Provider value={{className:"upper-side-navigation-middle-icons"}}>
                    {item.icon}
                </IconContext.Provider>
            </NavLink>
        </>
    )
}
