import { NavLink } from "react-router-dom";
import styled from 'styled-components';


const NavbarLink = styled(NavLink)`
    display:flex;
    align-items:center;
    justify-content:center;

    --button-size:50px;
    width:var(--button-size);
    height:var(--button-size);
    color:#fff;
    margin:4px;
    display:flex;

    
    &:hover{
        color:blue;
        background-color:#484a4d;
        border-radius:8px;
        filter:brightness(1.2);
        border-bottom:2px solid blue;
    }


    & svg{
        fill:#dadce1;
        width:37px;
        height:37px;
    }
`

const NavbarLabel = styled.span`
    --button-size:40px;
    width:var(--button-size);
    height:var(--button-size);
    color:#fff;
    padding:5px;
    margin:2px;
    display:flex;

    & svg{
        fill:#dadce1;
        width:37px;
        height:37px;
    }
`


const NavbarText = styled.span`
    color:#fff;
    align-items:center;
    justify-content:center;
    display:flex;
`


export default function NavmidItem({item}){
    return(
        <>
            <NavbarLink to={item.path}> 
                {item.icon}
            </NavbarLink>
        </>
    )
}
