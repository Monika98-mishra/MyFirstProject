import React ,{Component} from 'react';
import UserInfo from './UserInfo';

class SignUp extends Component{
    constructor()
    {
        super();
        this.state = {
            user:[{"name":"Alex", "mobile":99999998, "age":"20 Years"}],
            newname:'',
            newmobile:'',
            newage:'',
            msg:''
        } 
    }   

    handelName = (event)=>{
        this.setState({
            newname:event.target.value
        })
    }

    handelMobile = (event)=>{
        this.setState({
            newmobile:event.target.value
        })
    }

    handelAge = (event)=>{
        this.setState({
            newage:event.target.value
        })
    }

    save = () =>{
        let newUser = {
                        "name":this.state.newname,
                        "mobile":this.state.newmobile,
                        "age":this.state.newage
                      };
        this.setState({
            user : this.state.user.concat(newUser),
            msg:"User Registered Successfully !",
            newname:'',
            newmobile:'',
            newage:''
        })
    }

    render(){
        return <div className="container">
                <h2 className="center blue">User Sign Up</h2>
                <p align="center"> {this.state.msg} </p>
                <table align="center">
                     <tr>
                         <td>
                             <i>Name</i><br/>
                             <input type="text" value={this.state.newname} onChange={this.handelName} />
                        </td>
                         <td>
                             <i>Mobile</i><br/>
                             <input type="text" value={this.state.newmobile} onChange={this.handelMobile} />
                        </td>
                         <td>
                             <i>Age</i><br/>
                             <input type="text" value={this.state.newage} onChange={this.handelAge} />
                          </td>
                         <td> <br/>
                             <button onClick={this.save}>Save</button>
                         </td>
                    </tr>   
                </table>
                <table align="center" cellPadding="10">
                    <thead>
                        <tr>
                            <th> Sl No </th>
                            <th> Full Name </th>
                            <th> Mobile No </th>
                            <th> Age </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.user.map((row, index)=>{
                                return <tr>
                                            <td> { index + 1 } </td>
                                            <td> { row.name } </td>
                                            <td> { row.mobile } </td>
                                            <td> { row.age } </td>
                                        </tr>
                            })
                        }
                    </tbody>   
                </table>

                <UserInfo fullname="Siyaram" mobile="9999999" age="35 Years" />
                {
                    this.state.user.map((row , index)=>{
                        return <UserInfo fullname={row.name} mobile={row.mobile} age={row.age} />
                    })
                }

           </div>
    }
}

export default SignUp;