import React, { Component } from 'react';
import axios from 'axios';
class Car extends Component{
    constructor(){
        super();
        this.state={
            carlist:[]
        }
    }
    getCar=()=>{
        let url="https://cybotrix.com/ios/car.json";
        axios.get(url).then(response=>{
            this.setState({
                carlist:response.data
            })
        })
    }
    componentDidMount(){
        this.getCar();
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Axios example with external json data</h2>
                    <p align="center">{this.state.carlist.length}</p>
                  
                </div>
                {
                    this.state.carlist.map((row,index)=>{
                        return <div className="col-md-3 form-group" key={index}>
                        <div className="p-3 text-center border-bottom border-danger">
                            <h4>{row.model}</h4>
                            <img src={`https://cybotrix.com/ios/img/${row.image}`} className="img-fluid carimage"/>
                            <p>Price:-{row.price}</p>
                        </div>
                        </div>
                    })
                }
                
            </div>
        </div>
    }
}
export default Car;