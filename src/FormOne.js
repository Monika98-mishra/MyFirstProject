import React,{Component} from 'react';
import axios from 'axios';
class FromOne extends Component
{
    constructor(){
        super();
        this.state={
          fileds:{},
           errors:{},
           msg:''
        }

        this.save=this.save.bind(this);
        this.formCheck=this.formCheck.bind(this);
    }
save=()=>{
    if(this.formCheck())
    {
        let mydata = new FormData();
        mydata.append("fname", this.state.fileds.fname);
        mydata.append("mobileno", this.state.fileds.mobile);
        mydata.append("emailid", this.state.fileds.email);
        mydata.append("msg", this.state.fileds.message);
        let url = "https://www.firstenquiry.com/api/react/saveenquiry.php";
        axios.post(url,mydata).then(response=>{

   
        //after sending data to the server
        let fileds={};
        fileds["fname"]="";
        fileds["mobile"]="";
        fileds["email"]="";
        fileds["message"]="";
        this.setState({
            fileds:fileds,
            msg:response.data
        })
    })
    }
    
}
formCheck=()=>{
    let fileds=this.state.fileds;
    let errors={};
    let formStatus=true;
    if(!fileds["fname"]){
        formStatus=false;
        errors["fname"]="please enter your name ?"
    }
    if(!fileds["mobile"]){
        formStatus=false;
        errors["mobile"]="please enter your Mobileno ?"
    }
    
    let mpatten=/^[0-9]{10}$/
    if(! fileds==undefined){
        if(! fileds["mobile"].match(mpatten))
        {
            formStatus=false;
            errors["mobile"]="please enter valid Mobileno ?"
        }
    
    }
    if( ! fileds["email"]){
        formStatus=false;
        errors["email"]="please enter your email ?"
    }

    let emailpatten = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(fileds['email'] != undefined){
        if(! emailpatten.test(fileds["email"]))
        {
            formStatus=false;
            errors["email"]="please enter valid email ?"
        }
    
    }
    if(!fileds["message"]){
        formStatus=false;
        errors["message"]="pleas enter message ?"
    }
    this.setState({
        errors:errors
    })
    return formStatus;
}    
handleInput=(e)=>{
    let fileds=this.state.fileds;
    fileds[e.target.name]=e.target.value;
    this.setState({
        fileds
    })
} 
  
    
    
    render(){
        return <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="text-center">Form Validation One</h3>
                     </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                        <div className="col-md-4 bg-light p-3 border">
                            <h3 className="text-center text-primary">React js form validation</h3>
                            <p className="text-primary text-center">{this.state.msg}</p>
                            <i className="text-warning">All * marks fields are mandatory</i>
                        <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" name="fname" value={this.state.fileds.fname} onChange={this.handleInput}/>
                        <i className="text-danger">{this.state.errors.fname}</i>
                      </div>
                      <div className="form-group">
                        <label>Mobile No<em className="text-danger">*</em></label>
                        <input type="number" className="form-control" name="mobile" value={this.state.fileds.mobile} onChange={this.handleInput}/>
                        <i className="text-danger">{this.state.errors.mobile}</i>
                      </div>
                      <div className="form-group">
                        <label>EmailId<em className="text-danger">*</em></label>
                        <input type="email" className="form-control" name="email" value={this.state.fileds.email} onChange={this.handleInput}/>
                        <i className="text-danger">{this.state.errors.email}</i>
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea  className="form-control" name="message" value={this.state.fileds.message} onChange={this.handleInput}></textarea>
                        <i className="text-danger">{this.state.errors.message}</i>
                      </div>
                    <button className="btn btn-primary btn-block" onClick={this.save}>send Message</button> 
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    }
}
export default FromOne;
