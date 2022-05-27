import { React, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import MenuToggle from './menuToggle';


const NavLinksContainer = styled.div`
height:100%;
diplay:flex;
align-items:center;
`;

const LinkWrapper = styled.ul`
margin:0;
pading:10px;
display:flex;
heigh:100% ;
list-style: none;
background-color: #000;
width: 100%;
flex-direction: column;
position: fixed;
top:225px;
left:0;
`;

const LinkItem = styled.li`
height: 100%;
width:100%;
padding;0 1.1em;
color: #222;
font-weight: 500;
font-size:20px;
display:flex;
border-top:2px solid transparentl
transition: all 22-,s ease-in-out;

&:hover {
    border-top:2px solid rgb(69,222,247);
}
`;

// const LinkStyle = styled.a`
// text-decorayion:none;
// color:inherit;
// font-size:inherit;
// `;

export function MobileNavLinks(props) {
    const [isOpen, setOpen ]= useState(false);


    return <NavLinksContainer>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
        {isOpen && <LinkWrapper>
            <LinkItem><Link to="/about">About Me</Link></LinkItem>
            <LinkItem><Link to="/portfolio">Portfolio</Link></LinkItem>
            <LinkItem><Link to="/resume" >Resume</Link></LinkItem>
            <LinkItem><Link to="/contact">Contact</Link></LinkItem>
        </LinkWrapper>}
    </NavLinksContainer>
}