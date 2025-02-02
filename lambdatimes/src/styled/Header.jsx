import styled from 'styled-components';
import * as v from './vars'

export const Header=styled.div`
    ${v.dflex}
    justify-content:space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
    ${v.mlg}{
        width:1280px;
    }
    h1{
        font-size: 60px;
        font-family: Didot, serif;
        font-weight: bold;
        flex: 8;
        text-align: center;
        color: #000;
    }
    span{
        align-self: flex-end;
        font-size: 11px;
        font-weight: bold;
        letter-spacing: 1px;
    }
`

export const Date=styled.span`
    margin-left: 25px;
    flex: 1;
`

export const Temp=styled.span`
    text-align: right;
    margin-right: 25px;
    flex: 1;
`