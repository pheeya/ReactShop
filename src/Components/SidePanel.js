import React from 'react' // eslint-disable-next-line
import sideCss from '../css/side.css'
class sidePanel extends React.Component{
    constructor(props){
        super(props)
    }
   
   render(){ 
       return(
        <div class="side">
        <ul>
        <li class="input"><input type="text" placeholder="Search Products"></input></li>
            <li onClick={this.sendData}>Popular</li>
            <li>Exotic</li>
            <li>diycandles classics</li>
            <li class="sideButton"><button>CREATE CANDLE</button></li>
        </ul>
    </div>
       );
   };

};
export default sidePanel;