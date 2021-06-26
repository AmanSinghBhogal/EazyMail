import React from 'react'
import styled from 'styled-components'
import Compose from '../buttons/Compose'
import { SidebarButtonItems } from '../data/SidebarButtomItems'
const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose />
            </ComposeWrapper>
            <SideButtonWrapper>
                {
                    SidebarButtonItems.map(item => (
                        <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                    ))
                }   
            </SideButtonWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 1px solid lightgrey;
    height: 89vh;
`
const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
`
const SideButtonWrapper = styled.div`
`
const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: minmax(25px,30px) auto;
    color: gray;
    padding: 5px 25px;
    cursor: pointer;
    margin-right: 8px;
    border-radius: 0 100px 100px 0;
    :hover{
        background-color: #f5f7f7;
    }
`
