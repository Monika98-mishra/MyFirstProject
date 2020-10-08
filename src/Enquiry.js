import React ,{Component} from 'react';
import axios from 'axios';
class Enquiry extends Component{

    constructor()
    {
        super();
        this.state = {
            enquiryList:[],
            name:'',
            mobile:'',
            email:'',
            message:'',
            serverinfo:'',
			id : ''
        }
    }
    handleName = (object) =>{
        this.setState({
            name:object.target.value
        })
    }
    handleMobile = (object) =>{
        this.setState({
            mobile:object.target.value
        })
    }

    handleEmail = (object) =>{
        this.setState({
            email:object.target.value
        })
    }

    handleMessage = (object) =>{
        this.setState({
            message:object.target.value
        })
    }

    componentDidMount()
    {
        this.getEnquiry();
    }

    editData = (index) =>{
        this.setState({
            name : this.state.enquiryList[index].name,
            email : this.state.enquiryList[index].email,
            mobile : this.state.enquiryList[index].mobile,
            message : this.state.enquiryList[index].message,
            id : this.state.enquiryList[index].id
        })
    }

    getEnquiry  = () =>{
        let url = "https://www.firstenquiry.com/api/react/enquirylist.php";
        axios.get(url).then(response=>{
            this.setState({
                enquiryList : response.data
            })
        })
    }

    deleteData = (eid) =>{

        let url = "https://www.firstenquiry.com/api/react/deleteenquiry.php";
        let input = new FormData();
        input.append("id", eid);
        axios.post(url, input).then(response=>{
            this.setState({
                serverinfo : response.data.status
            })
        })
        this.getEnquiry();// to reload the list after delete
    }

    save = () =>{
        this.setState({
            serverinfo : "Please wait processing..."
        })

        let mydata = new FormData();
        mydata.append("fname", this.state.name);
        mydata.append("mobileno", this.state.mobile);
        mydata.append("emailid", this.state.email);
        mydata.append("msg", this.state.message);
        mydata.append("id", this.state.id);
    let url = "https://www.firstenquiry.com/api/react/saveenquiry.php";
      axios.post(url , mydata).then(response=>{
          this.setState({
              serverinfo : response.data,
              name:'',
              email:'',
              mobile:'',
              message:'',
			  id:''
          })
          this.getEnquiry(); // to reload the list
      })
    }

    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                    <h2 className="center text-danger">Enquiry</h2>
                    <p align="center">{this.state.serverinfo}</p>
                        <table className="table table-stripped">
                            <tr>
                                <th> Your Name </th>
                                <td> <input type="text" className="form-control" value={this.state.name} onChange={this.handleName} /> </td>
                            </tr>
                            <tr>
                                <th> Your Mobile No </th>
                                <td> <input type="text" className="form-control" value={this.state.mobile} onChange={this.handleMobile} /> </td>
                            </tr>
                            <tr>
                                <th> Your E-Mail </th>
                                <td> <input type="text" className="form-control" value={this.state.email} onChange={this.handleEmail} /> </td>
                            </tr>
                            <tr>
                                <th> Your Query </th>
                                <td> <textarea value={this.state.message} onChange={this.handleMessage}  className="form-control"></textarea> </td>
                            </tr>
                            <tr>
                                <th colspan="2" className="text-center">
                                   <button className="btn btn-primary" onClick={this.save}> Send Enquiry </button> 
                                </th>
                            </tr>
                        </table>
						</div>
                        <div className="col-md-4"></div>
                        </div>

						<div className="row">
							<div className="col-md-12">
								<table className="table table-bordered table-sm">
									<thead>
										<tr>
											<th> id</th>
											<th> Full Name</th>
											<th> Mobile No </th>
											<th> e-Mail id </th>
											<th> Message </th>
											<th> Posted Date</th>
											<th> Action </th>
										</tr>
									</thead>
									<tbody>
										{
											this.state.enquiryList.map((row , index)=>{
												return <tr>
															<td> {row.id} </td>
															<td> {row.name}</td>
															<td> {row.mobile}</td>
															<td> {row.email}</td>
															<td> {row.message} </td>
															<td> {row.postdate} </td>

				                                            <td> 
                                                                <button className="btn btn-warning btn-sm" onClick={this.editData.bind(this, index)}>
                                                                   Edit
                                                                </button>

                                                                <button className="btn btn-danger btn-sm" onClick={this.deleteData.bind(this, row.id)}>
                                                                   Delete
                                                                </button>
                                                            </td>
														</tr>
											})
										}
									</tbody>
							    </table>
						     </div>
						</div>	
                </div>
    }
}

export default Enquiry;