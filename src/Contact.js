import React, {Component}  from 'react';
class Contact extends Component{
        constructor()
        {
            super();
            this.state = {
                item : ["Apple", "Mobile", "Cap", "Bag", "Laptop", "Books"],
                name:'',
                msg:''
            }
        }

                    delitem = (index) =>{
                        let name = this.state.item[index];
                        this.state.item.splice(index,1);
                        this.setState({
                            item : this.state.item,
                            msg: name + ' deleted successfully !'
                        })
                    }
                    handleName = (event)=> {
                        this.setState({
                            name: event.target.value
                        })    
                    }
                    save = () =>{
                        this.setState({
                            item : this.state.item.concat(this.state.name),
                            msg: this.state.name + ' Added successfully !',
                            name:'',
                            
                        })    
                    }

        render(){
        return <div className="container">
                    <h2 className="center orange">Single Dimensional Array Using State</h2>
                   <p align="center">{this.state.msg}</p>
                    <p align="center">
                        New Item : <input type="text" value={this.state.name}  onChange={this.handleName} /> 
                        <button onClick={this.save}>Save Item</button>
                    </p>

                    <table align="center" cellPadding="10">
                        <tr>
                            <th> Sl No </th>
                            <th> Item Name </th>
                            <th> Action </th>
                        </tr>
                        {
                            this.state.item.map((xitem , index)=>{
                                return <tr>
                                            <td>{index}</td>
                                            <td>{xitem} </td>
                                            <td> 
        <a href="javascript:void(0)" onClick={this.delitem.bind(this,index)}>Delete</a>
                                            </td>
                                       </tr>
                            })
                        }
                    </table>
               </div>
        }
}

export default Contact;