import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <Menu>
                    <MenuIcon/>
                </Menu>
                <Logo>
                    <img src='https://raw.githubusercontent.com/AmanSinghBhogal/EazyMail/master/src/component/imgs/EazyMail.png' alt="Fuck This"></img>
                </Logo>
            </LogoWrapper>
            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIcon/>
                    <input type='text' placeholder= 'Search Mail'/>
                    <ExpandMoreIcon/>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <HelpOutlineIcon/>
                <SettingsIcon/>
                <AccountCircleIcon/>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(180px,20%) auto 20%;
    border-bottom: 1px solid lightgrey;
    height: 10vh;
    align-items: center;
`
const LogoWrapper = styled.div`
    height: 10vh;
    display: grid;
    grid-template-columns: 15% auto;
`
const Menu = styled.div`
    display: grid;
    place-items: center;
`
const Logo = styled.div`
    display: flex;
    img{
        height: 10vh;
        max-width:150px;
    }
`
const SearchWrapper = styled.div`
    
`
const SearchBarWrapper = styled.div`
    background-color: #f1f3f4;
    width: 100%;
    max-width: 500px;
    display: grid;
    grid-template-columns: 10% auto 7%;
    place-items: center;
    height: 7vh;
    border-radius: 6px;
    input{
        width: 100%;
        height: 5vh;
        border: none;
        background: none;
        font-size: 18px;

        .MuiSgvIcon-root{
            color: #5f6368;
        }
        :focus{
            outline: none;
        }
    }
`
const IconsWrapper = styled.div`
    text-align: right;
    padding-right: 20px;
    .MuiSgvIcon-root{
        color: #5f6368;
    }
`