import React, { useState } from 'react'
import styled from 'styled-components'
import { Checkbox } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
const EmailItem = ({starred,from,senderemail,cc,bcc,subject,message,received,read}) => {
    const [star, setState ] = useState(starred);
    return (
        <Wrapper>
            <Checkbox />
            <IconButton onClick={()=> star? (setState(false)) : (setState(true))}>
                {
                    star ? (
                        <StarIcon htmlColor='#f7cb69' />
                    ) : (
                        <StarBorderIcon />
                    )
                }
            </IconButton>

            <p className= {!read && 'unread'}>{from}</p>

            <div>
                <p className={!read && 'unread'}>{subject}</p>-<span>{message}</span>
            </div>

            <p className={!read && 'unread'}>{received}</p>
        </Wrapper>
    )
}

export default EmailItem

const Wrapper = styled.div`
    padding-left: 20px;
    border-top: 1px solid lightgrey;
    display: grid;
    align-items: center;
    grid-template-columns: min-content min-content 150px auto 50px;
    gap: 10px;
    cursor: pointer;
    div{
        display: flex;
    }

    .unread{
        color: black;
        font-weight: bolder;
    }
`