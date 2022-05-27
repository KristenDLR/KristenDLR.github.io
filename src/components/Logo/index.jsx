import React from "react";
import styled from "styled-components";
import logo from "../../assets/cover/KristenDeLaRosa.gif";
import { Link } from 'react-router-dom';

const LogoWrapper = styled.div`
display:flex;
align-items:center;
`;

const LogoImg = styled.div`
width:100px;
heigh:100px;

img{
    width:100%;
    height:100%;
}
`;


export function Logo(props){
    return<LogoWrapper>
        <LogoImg>
             <Link to="/"><img src = {logo} alt="Kristen De La Rosa Logo" height = "100px"/></Link>
        </LogoImg>

    </LogoWrapper>
}
