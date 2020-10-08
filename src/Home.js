import React ,{Component} from 'react';
const title = "Welcome Home";
const message = "This is from home file as welcome message"; 
const item = ["Home" , "About Us", "Contact Us", "Login", "Sign Up", "Enquiry", "User List"];

class Home extends Component{

    constructor()
    {
        super();
        this.state ={
            product : [
                        {"name":"Apple", "price":200, "qty":5},
                        {"name":"Mango", "price":100, "qty":25},
                        {"name":"Banana", "price":40, "qty":35},
                        {"name":"Orange", "price":200, "qty":55},
                        {"name":"Grapes", "price":100, "qty":56},
                        {"name":"Papaya", "price":30, "qty":15},
                        {"name":"Mobile", "price":2000, "qty":57},
                        {"name":"Laptop", "price":20000, "qty":15}
                    ]
        }
    }

    deleteItem = (index)=>{
        this.state.product.splice(index,1);
        this.setState({
            product : this.state.product
        })
    }

    render()
    {
        return <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-warning">{title}</h1>
                        <p align="center"> {message} </p>
                        <label className="orange"> { item[3] }</label> , 
                            {
                            item.map(x=>{
                                        return <label className="blue">{x} , </label>
                                    })  
                            }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered table-hover">
                            <caption> <h2>Multidimensional Array Using Map</h2></caption>
                            <tr className="text-primary">
                                <th> Sl No </th>
                                <th> Item Name </th>
                                <th> Item Price </th>
                                <th> Item Qty </th>
                                <th> Total Price </th>
                                <th> Delete </th>
                            </tr>
                            {
                                this.state.product.map((row , index)=>{
                                    return <tr>
                                                <td> {index} </td>
                                                <td> {row.name} </td>
                                                <td> {row.price} </td>
                                                <td> {row.qty} </td>
                                                <td> {row.price * row.qty} </td>
                                                <td>
                        <button className="btn btn-danger btn-sm" onClick={this.deleteItem.bind(this, index)}> Delete </button>
                                                </td>
                                           </tr>
                                })
                            }
                        </table>
                        </div>
                    </div>
               </div>
    }
}

export default Home;