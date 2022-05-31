import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';


const NavLinksContainer = styled.div`
height:100%;
diplay:flex;
align-items:center;
`;

const LinkWrapper = styled.ul`
margin:0;
pading:0;
display:flex;
heigh:100% ;
`;

const LinkItem = styled.li`
height: 100%;
padding;0 1.1em;
color: #fff;
font-weight: 500;
font-size:20px;
align-items: center;
justify-content: center;
display:flex;
border-top:2px solid transparentl
transition: all 22-,s ease-in-out;

&:hover {
    border-top:2px solid rgb(69,222,247);
}
`;



export function NavLinks(props) {
    return <NavLinksContainer>
        <LinkWrapper>
            <LinkItem><Link to="/about">About Me</Link></LinkItem>
            <LinkItem><Link to="/portfolio">Portfolio</Link></LinkItem>
            <LinkItem><Link to="/resume" >Resume</Link></LinkItem>
            <LinkItem><Link to="/contact">Contact</Link></LinkItem>
        </LinkWrapper>
    </NavLinksContainer>
}