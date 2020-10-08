import React, {Component}  from 'react';
class  About extends Component{
constructor()
{
    super();
    this.state = {
       name:'',
       mobile:'',
       tempname:'',
       tempmobile:''
    }
}
    hanleName = (event) =>{
        this.setState({
            tempname:event.target.value
        })
    }

    hanleMobile = (event) =>{
        this.setState({
            tempmobile:event.target.value
        })
    }

    showDetails = () =>{
        this.setState({
            name : this.state.tempname,
            mobile:this.state.tempmobile
        })
    }

    clearData = () =>{
        this.setState({
            name : '',
            mobile:'',
            tempname:'',
            tempmobile:''
        })
    }


    render(){
    return <div className="container">
                 <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <h2 className="text-center text-danger">About Us</h2>
                    <table className="table table-bordered table-hover">
                    <caption><h2>State Updates on click </h2></caption>
                    <tr>
                        <th>Full Name</th>
                        <td> <input type="text" className="form-control" value={this.state.tempname} onChange={this.hanleName} /> </td>
                    </tr>
                    <tr>
                        <th>Mobile No</th>
                        <td> <input type="text" className="form-control" value={this.state.tempmobile} onChange={this.hanleMobile} /> </td>
                    </tr>
                    <tr>
                        <th></th>
                        <th>
                            <button className="btn btn-primary btn-sm" onClick={this.showDetails}> View Data </button>
                            <button  className="btn btn-success btn-sm" onClick={this.clearData}> Clear All </button>
                        </th>
                    </tr>
                 </table>
                 </div>
                 <div className="col-md-4"></div>
                 </div>
                 <p align="center"> Your Full Name is : {this.state.name} </p> 
                 <p align="center"> Your Mobile No is : {this.state.mobile} </p> 
           </div>
    }
}

export default About;