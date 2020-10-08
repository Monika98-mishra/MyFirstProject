import React , {Component} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Profile from './Profile';

const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;

class Multirouting extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const { path } = this.props.match;
        return <div className="row">
            <div className="col-md-3">

                <ul className="list-group">
                    <Link to={`${path}`} className="list-group-item">Profile</Link>
                    <Link to={`${path}/comments`} className="list-group-item">Comments</Link>
                    <Link to={`${path}/contact`} className="list-group-item">Contact</Link>
                    <Link to={`${path}/login`} className="list-group-item">Login</Link>
                    <Link to={`${path}/signup`} className="list-group-item">signup</Link>
                </ul>

            </div>
            <div className="col-md-9">
    <h1>current url:{path} is parent url</h1>
                <Switch>
                    <Route path={`${path}`} exact component={Profile} />
                    <Route path={`${path}/comments`} component={Comments} />
                    <Route path={`${path}/contact`} component={Contact} />
                    <Route path={`${path}/login`} component={Login} />
                    <Route path={`${path}/signup`} component={Register} />
                </Switch>
            </div>
        </div>;
    }
}

export default Multirouting;
const Login=()=>{
    return <h3>This is Login Component</h3>
}
const Register=()=>{
    return <h3>This is SignUp Component</h3>
}