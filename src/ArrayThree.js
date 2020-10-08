import React,{Component} from 'react';
class ArrayThree extends Component{
    constructor(){
        super();
        this.state = {
            customer:[
                {
                    "city":"Banglore",
                    "allcustomer":["Mahesh","Ganesh","suresh"]
                },
                {
                    "city":"Mumbai",
                    "allcustomer":["sachin","laxmi","rathore"]
                },
                {
                    "city":"delhi",
                    "allcustomer":["silpa","alex","jonny"]
                }

            ],
            customerInfo:[]
        }
    }
    getCustomerInfo=(customerIndex)=>{
        this.setState({
            customerInfo:this.state.customer[customerIndex].allcustomer
        })
    }
    render(){
      return  <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="text-center">Multilevel Array Manupulation</h3>
                </div>
                <div className="col-md-9">
                    <select className="form-control">
                        <option>choose City</option>
                        {
                            this.state.customer.map((row,index)=>{
                                return <option onClick={this.getCustomerInfo.bind(this,index)}>{row.city}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3>Customer List By City</h3>
                </div>
                {
                    this.state.customerInfo.map(name=>{
                        return <div className="col-md-4 border p-3 form-group text-danger">{name}</div>
                    })
                }
            </div>
        </div>
    }
}
export default ArrayThree;
