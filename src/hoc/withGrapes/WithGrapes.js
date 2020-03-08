import React from 'react';
import Grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import { withGrapesConfig } from '../../constants';


const withGrapes = (Component) => class WithGrapes extends React.Component {
    constructor(props){
        super(props);
        this.state={
            editor : null,
            isLoading: true,
        };
    }
     async componentDidMount(){
         const editor = await Grapesjs.init(withGrapesConfig);
         this.setState({editor, isLoading:false})
     }
     render(){
         const { isLoading , editor } = this.state;
         console.log(editor);
         return(
             <div id="gjs">
                 <Component />
             </div>
         )
         
     }
}

export default withGrapes;