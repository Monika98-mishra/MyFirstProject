import React ,{Component} from 'react';
import PlayList from './PlayList';
class Login extends Component{
   constructor(){
       super();
       this.state = {
           videolist:[
                        {"title":"SAREGAMAPA" , "url":'https://www.youtube.com/watch?v=WeX_keGiJLg'},
                        {"title":"By Himesh" , "url":'https://www.youtube.com/watch?v=IV-MKtSOZNY'},
                        {"title":"By Javeed" , "url":'https://www.youtube.com/watch?v=K-4KfG2m3bc&t=3454s'},
                        {"title":"By Arijit" , "url":'https://www.youtube.com/watch?v=0rEI4HkbtoM&t=237s'},
                        {"title":"Lata Jee" , "url":'https://www.youtube.com/watch?v=E_6z-Hj7npI'},
                        {"title":"Anoop Jalota" , "url":'https://www.youtube.com/watch?v=GPo4oAzWYQM'}
                      ],
            playurl:'https://www.youtube.com/watch?v=ysz5S6PUM-U'
       }
   }

   changeVideo = (index) =>{
       this.setState({
            playurl : this.state.videolist[index].url
       })
   }
    render(){
        return <div className="container">
                <h2 className="center orange">React Video Play Example</h2>
                <table cellPadding="40" width="100%">
                    <tr valign="top">
                        <td wisth="20%">
                            <ul className="leftnav">
                                <li>Video Play List </li>
                                {
                                    this.state.videolist.map((row , index)=>{
                 return <li onClick={this.changeVideo.bind(this , index)}> {row.title} </li> 
                                    })
                                }
                            </ul>
                        </td>
                        <td width="80%">
                            <PlayList myvideo = {this.state.playurl} />
                        </td>
                    </tr>
                </table>
               
           </div>
    }
}

export default Login;