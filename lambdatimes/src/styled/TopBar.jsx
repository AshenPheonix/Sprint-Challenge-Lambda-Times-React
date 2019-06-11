import styled from 'styled-components';
import * as v from './vars'

export const TBar=styled.div`
    width:100%;
    ${v.dflex}
    justify-content:center;
    align-items:none;
    flex-direction:row;
    position:fixed;
    height: 44px;
    background-color:#333;
`
export const TopContainer=styled.div`
    ${v.dflex}
    justify-content:none;
    width:100%;
    align-items:none;
    flex-direction:row;
    color:#fff;
    letter-spacing:1px;
    padding:0 10px;
    ${v.mlg}{
        width: 1280px;
    }
`

export const SubCont=styled.div`
    justify-content:${props=>props.dir||'none'};
    display: flex;
    align-items: center;
    flex-direction: row;
    flex: ${props=>props.size||'1'};
    font-size: ${props=>props.fsize||'9px'};
    font-weight:${props=>props.bold||'normal'}
`

export const TopSpan=styled.span`
    cursor: pointer;
`
export const TopSpanLeft=styled(TopSpan)`
    margin-right: 25%;
    font-weight: bold;
`

export const TopSpanCenter=styled(TopSpan)`
    margin-right:5%;
    &:last-child{
        margin-right:0;
    }
    &:hover{
        text-decoration:underline;
    }
`