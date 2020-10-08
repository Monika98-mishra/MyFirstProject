import React , {Component} from 'react';
class StateManagement extends Component{

    constructor(){
        super();   
        this.state = {
            user : ["Alex", "Cylex", "Ganesh", "Suresh"],
            city : ["Mumbai", "Delhi", "Pune", "Chennai", "Kolkata", "Patna"],
            count : 1,
            name:'?'
        }
    }

    one = () =>{
           this.setState({
               count : this.state.count + 1
           }) 
    }

    two = () =>{
        this.setState({
            count : this.state.count - 1
        }) 
    }
    updatename = (obj) =>{
        this.setState({
            name : obj.target.value
        })
    }

    render(){
        return <div className="container">
                   
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="list-group">
                                    <li className="list-group-item active">User List</li>
                                    {
                                        this.state.user.map(x=>{
                                            return <li className="list-group-item"> {x} </li>
                                        })
                                    }
                                </ul>
                                <br/>
                                <ul className="list-group">
                                <li className="list-group-item active">City List</li>
                                    {
                                        this.state.city.map(c=>{
                                            return <li className="list-group-item"> {c} </li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <p> 
                                    The Counter is :<font size="30"> {this.state.count} </font> 
                                    <button onClick={this.one}> Couter + 1 </button>
                                    <button onClick={this.two}> Counter - 1 </button>
                                </p>  

                                <p>
                                    EnterYour Name : <input type="text" onChange={this.updatename} /> <br/><br/>
                                    <b> Your Name is : {this.state.name} </b> 
                                    <h3> Your name is : {this.state.name.length} Character length </h3>
                                </p>         
                            </div>
                        </div>
                </div>
    }
}

export default StateManagement;