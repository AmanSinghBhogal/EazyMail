import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import EmailView from './EmailView'
function Main() {
    return (
        <Wrapper>
            <Sidebar/>
            <EmailView/>
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(173px,16%) auto;
`