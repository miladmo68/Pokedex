
import styled from "styled-components";


// I used styled-components to add styling to component
const Box = styled.div`
background-color: #FFE87C;
text-align: center;
color: #4C787E;
width: 150px;
height: 150px;
border-radius: 50%;
padding:  60px 0;
box-shadow: 0 1px 3px 0 rgba(0,0,0,0.12);
margin:30px auto ;
font-weight: bold;
font-size: 18px;
&:hover {
    opacity: 0.5;
  }


`;



export default Box ;
