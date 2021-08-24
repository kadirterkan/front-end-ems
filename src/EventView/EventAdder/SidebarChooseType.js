import {RiUser3Fill} from 'react-icons/ri';
import {FiUsers} from 'react-icons/fi';
import { Link } from 'react-router-dom';


import styled from 'styled-components';


const SideBar = styled.nav`
    border-right: 1px solid #474a4d;
    background-color: #242526;
    margin-top:60px;
    width:22%;
    height:100%;
    position:fixed;
    padding: 0;
    z-index: 1;
    gap:15px;
`

const NavLink = styled(Link)`

`




const EventChooseDiv = styled.div`
    border-radius:8px;
    display:flex;
    gap:5px;
    width:98%;
    color:#e1e9fc;
    align-items:center;
    margin:5px;
    padding:10px;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;
`

const NavbarLabel = styled.a`
    position:relative;
    --button-size:40px;
    width:var(--button-size);
    height:var(--button-size);
    background-color:#484a4d;
    color:#fff;
    padding:5px;
    margin:2px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:filter 300ms;


    & svg{
        fill:#dadce1;
        width:20px;
        height:20px;
    }

`
const NavbarLabelBlue = styled.a`
    --button-size:40px;
    width:var(--button-size);
    height:var(--button-size);
    background-color:#4267B2;
    color:#fff;
    padding:5px;
    margin:2px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:filter 300ms;


    & svg{
        fill:#dadce1;
        width:20px;
        height:20px;
    }

`

const Diviser = styled.div`
    display:grid;
`



export default function SidebarChooseType(props){
    
    return(
        <>
            <div style={{'marginTop':'10px','marginLeft':'10px','color':'grey','display':'flex','gap':'10px'}}>
                <NavLink to={'#'}><h6>Event</h6></NavLink>
                <h6>-</h6>
                <NavLink to={'#'}><h6>Create Event</h6></NavLink>
            </div>
            <h1 className={'nav-menu-name'}>Create Event</h1>
            <EventChooseDiv>
                <NavbarLabel><RiUser3Fill/></NavbarLabel>
                <Diviser>
                    <span>NAME GOES HERE</span>
                    <h6>Host - Your Profile</h6>
                </Diviser>
            </EventChooseDiv>
            <EventChooseDiv style={{'backgroundColor':'rgba(47, 69, 98 ,0.7)'}}>
                <NavbarLabelBlue><FiUsers/></NavbarLabelBlue>
                <span>Create Event</span>
            </EventChooseDiv>
        </>
    );
}