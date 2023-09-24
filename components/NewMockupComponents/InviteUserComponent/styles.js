import styled from "styled-components";
import { Colors } from "../../../static/colors";

export const AlertBoxContainer = styled.div`
 z-index: 1; 
 font-size: 18px; 
 position: absolute; 
 bottom: 70%; 
 left: 40%; 
 border: 0px solid; 
 border-radius: 5px; 
 height: 130px; 
 padding: 10px; 
 background-color: ${Colors.alertBoxBG}; 
 opacity: 0.7;
 text-align: center;
`;

export const AlertHeader = styled.div`
color: white;
text-decoration: underline;
`;

export const AlertText = styled.div`
color: white;
margin-top: 7px;
margin-bottom: 10px;
`

export const AlertButton = styled.div`
background-color: ${Colors.alertBoxButtonBG};
opacity: 0.7;
width: 80px;
color: black; 
border-radius: 3px; 
box-shadow: ${Colors.boxShadow};
margin: auto;
padding-right: 5px; 
padding-left: 5px;
cursor: pointer;
`

export const ErrorLabel = styled.div`
color: ${Colors.alertMessageText};
`

export const AlertMessageContainer = styled.div`
background-color: ${Colors.alertMessageBG};
padding: 10px;
`
export const AlertSymbolContainer = styled.img`
height: 19px; 
width: 19px; 
align-self: center;
`

export const ErrorMessageText = styled.p`
color: ${Colors.alertMessageText}; 
font-size: 14px; 
margin-left: 7px;
`