import {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavbarLink = styled(Link)`
    position:flex;
    right:0;
    display:flex;
    justify-content:space-between;
    align-items:right;
    list-style:none;
    font-size:20px;
    text-decoration:none;
    color:#fff;
`;
const NavbarLabel = styled.span`

`;

const DropdownMenu = styled(Link)`
`;

export function Navmenu({item}){
    const [subnav,setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return(
        <>
        <NavbarLink to={item.path ? item.path : '#'} onClick={item.subNav && showSubnav}>
            <div>
                {item.icon}
                <NavbarLabel>{item.title}</NavbarLabel>
            </div>
            <div>
                {item.iconOpen ? item.iconOpen : null}
            </div>
        </NavbarLink>
            {subnav && item.subNav.map((value,index) => {
                return(

                    <DropdownMenu key={index} to={value.path}>
                        <NavbarLabel>{item.title}</NavbarLabel>
                    </DropdownMenu>
                )
            })}
        </>

    );
}

export default Navmenu;