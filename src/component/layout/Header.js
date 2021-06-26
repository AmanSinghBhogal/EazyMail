import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    <MenuIcon/>
                </div>
                <img src='\imgs/EazyMail.png' alt="Fuck This"></img>
            </LogoWrapper>
        </Wrapper>
    )
}

export default Header
const Wrapper = styled.div`

`
const LogoWrapper = styled.div`

`