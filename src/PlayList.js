import React ,{Component} from 'react';
import ReactPlayer from 'react-player';
class PlayList extends Component{
   constructor(props){
       super(props);
   }
   render(){
          return  <ReactPlayer url={this.props.myvideo} />
   }
}

export default PlayList;