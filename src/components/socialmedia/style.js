import styled from 'styled-components';

export const Socialmediadiv =styled.div`
height: auto;
overflow: hidden
`

export const Socialdiv=styled.div`
width: 33.33%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background-color: ${props => props.item === "1" ? '#3b5998' : ''};
background-color: ${props => props.item === "2" ? '#498cbf' : ''};
background-color: ${props => props.item === "3" ? '#cc2127' : ''};
`

export const Socialicon=styled.i`
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px;
margin-top:7px;
`

export const Socialp=styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff
`

export const Socialspan=styled.span`
display: block;
margin-bottom: 8px
`
export const Socialspaninfo=styled.span`
font-weight: normal

`

