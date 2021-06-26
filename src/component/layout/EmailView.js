import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { emailData } from '../../temp/Emaildata';
import EmailItem from '../EmailItem/EmailItem';
const EmailView = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <Checkbox />
                <IconButton>
                    <RefreshIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </TopWrapper>
            <EmailsContainer>
                {
                    emailData.map(({starred,from,senderemail,cc,bcc,subject,message,received,read})=>(
                        <EmailItem
                        starred={starred}
                        from = {from}
                        senderemail = {senderemail}
                        cc = {cc}
                        bcc = {bcc}
                        subject = {subject}
                        message = {message}
                        received = {received}
                        read = {read}
                        />
                    ))
                }
            </EmailsContainer>
            {/* <BottomWrapper></BottomWrapper> */}
        </Wrapper>
    )
}

export default EmailView

const Wrapper = styled.div`
`
const TopWrapper = styled.div`
    padding-left: 20px;
    height: 48px;
    border-bottom: 1px solid lightgrey;
`
const EmailsContainer = styled.div`
`