import React , {Component} from 'react';
import axios from 'axios'; // use to send and receive data from backend or any other source
class ApiOne extends Component{
    constructor(){
        super();
        this.state = {
            alluser:[], // variable declartion under state
            itemlist:[],
            city:[],
            user:[],
            book:[],
            mobile:[]
        }
        this.readData();
        this.readUser(); // calling in constructor , because it should load while constructor calling
      }

     showItem = (indexNo) =>{
            if(indexNo==0){
                var a = this.state.city;
            } else if(indexNo==1){
                var a = this.state.user;
            } else if(indexNo==2){
                var a = this.state.book;
            } else if(indexNo==3){
                var a = this.state.mobile;
            }

         this.setState({
            itemlist : a
         })
     }

    readUser = () =>{
            axios.get("user1.json").then(responseData=>{
                this.setState({
                    alluser:responseData.data  // variable update by value under state
                })
            })
    }

    readData = () =>{
        axios.get("user2.json").then(response=>{
            this.setState({
                city : response.data[0].city,
                user : response.data[0].user,
                book : response.data[0].book,
                mobile : response.data[0].mobile
            })
        })
    }

    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center"> 
                            <h2> {this.state.alluser.length} ,  Read Single Dimensional Data from JSON File </h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.alluser.map((xuser , index)=>{
                return <div className="col-md-4 form-group"> <p className="bg-info p-3 text-white text-center">{xuser} - {index} </p></div>
                            })
                        }
                    </div>

                    <div className="row">
                        <div className="col-md-3">

<button class="btn btn-primary btn-block" onClick={this.showItem.bind(this , 0)}>City -: {this.state.city.length}</button>
<button class="btn btn-danger btn-block" onClick={this.showItem.bind(this , 1)}>User -: {this.state.user.length}</button>
<button class="btn btn-success btn-block" onClick={this.showItem.bind(this , 2)}>Books -: {this.state.book.length}</button>
<button class="btn btn-info btn-block" onClick={this.showItem.bind(this , 3)}>Mobiles -: {this.state.mobile.length}</button>

                        </div>
                        <div className="col-md-9">
                            <h3> Data List will Appear here </h3>
                            {
                                this.state.itemlist.map((xitem , index)=>{
                                    return <p className="border p-2"> {index} : {xitem} </p>
                                })
                            }
                        </div>
                    </div>
                </div>
    }
}

export default ApiOne;