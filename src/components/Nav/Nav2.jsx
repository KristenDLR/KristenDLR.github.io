import React from "react";
import styled from "styled-components";
import { Logo } from "../Logo";
import { NavLinks } from "./NavLinks";
import { useMediaQuery } from "react-responsive";
import { DeviceSizes } from ".";
import { MobileNavLinks } from "./mobileNavLinks";


const NavBarContainer = styled.div`
width: 100%;
height: 110px;
box-shadow: 0 1px 3px red;
display: flex;
align-items: center;
padding: 0 1.5em;
`;

const LeftSection = styled.div`
display: flex;
`;

const MiddleSection = styled.div`
display: flex;
flex: 2;

justify-content:center;
`;

const RightSection = styled.div`
display: flex;
`;

export function NavBar(props){
const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile })
    
    return<NavBarContainer>
        <LeftSection>
            <Logo/>
        </LeftSection>
        <MiddleSection>
            {!isMobile && <NavLinks />}
        </MiddleSection>
        <RightSection>
            {isMobile && <MobileNavLinks />}
        </RightSection>
    </NavBarContainer>
}