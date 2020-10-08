import React ,{Component} from 'react';
import axios from 'axios'; // to read data from other souce

class UserList extends Component{
    constructor(){
        super();
      this.state = {
          user1:[],
          user2:[],
          allproduct:[]
      }

      this.getUser2();
      this.getProduct();
    }

    getProduct = () =>{
        axios.get("https://www.firstenquiry.com/api/react/productlist.php").then(response=>{
            this.setState({
                allproduct:response.data
            })
        })
    }

    getUser2 = () =>{
        axios.get("user2.json").then(response=>{
            this.setState({
                user2:response.data
            })
        })
    }

    getUser1 = () =>{
          axios.get("user1.json").then(response=>{
              this.setState({
                  user1:response.data
              })
          })
      }
    

    render(){
        return <div className="container">
                    <h2 className="center orange">User List</h2>
                    <button onClick={this.getUser1}>Show User 1</button>
                    <table align="center" cellPadding="10" border="1">
                        <tr>
                             <th> Total User 1 is : {this.state.user1.length} </th>
                             <th> Total User 2 is : {this.state.user2.length} </th>
                             <th> TotalProducts : {this.state.allproduct.length} </th>
                        </tr>
                        <tr valign="top">
                            <td>
                                {
                                    this.state.user1.map(xuser=>{
                                     return <p> {xuser} </p>
                                    })
                                }
                            </td>
                            <td>
                                <table cellPadding="10">
                                    <tr>
                                        <th> Sl No </th>
                                        <th> Full Name </th>
                                        <th> Mobile No </th>
                                        <th> City </th>
                                    </tr>
                                    {
                                        this.state.user2.map((row,index)=>{
                                            return <tr>
                                                        <th>{index} </th>
                                                        <th>{row.name} </th>
                                                        <td>{row.mobile} </td>
                                                        <td>{row.city} </td> 
                                                    </tr>
                                        })
                                    }
                                </table>
                            </td>
                            <td>
                                <table cellPadding="10">
                                    <tr>
                                        <th> Pid </th>
                                        <th>  Name </th>
                                        <th> Price </th>
                                        <th> Qty </th>
                                    </tr>
                                    {
                                        this.state.allproduct.map((row,index)=>{
                                            return <tr>
                                                        <th>{row.pid} </th>
                                                        <th>{row.name} </th>
                                                        <td>{row.price} </td>
                                                        <td>{row.qty} </td> 
                                                    </tr>
                                        })
                                    }
                                </table>
                            </td>
                        </tr>
                    </table>
               </div>
    }
}
export default UserList;