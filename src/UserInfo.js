import React ,{Component} from 'react';
class UserInfo extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div>
                    <h2> {this.props.fullname} </h2>
                    <p> {this.props.mobile} , {this.props.age} </p>
               </div>
    }
}

export default UserInfo;