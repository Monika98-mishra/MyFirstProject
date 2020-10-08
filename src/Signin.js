import React , {Component} from 'react';
import axios from 'axios';
class UserLogin extends Component{
	constructor()
	{
		super();
		this.state = {
			email:'',
			pass:'',
			msg:''
		}
	}	
		handleEmail = (event)=>{
			this.setState({
				email:event.target.value
			})
		}
		
		handlePass = (event)=>{
			this.setState({
				pass:event.target.value
			})
		}
		
		login = ()=>{
			if((this.state.email !="") && (this.state.pass !=""))
			{
				this.setState({
					msg:"Please wait..."
				})
				 var url = "https://www.firstenquiry.com/api/react/store/auth.php";
				 let input = new FormData();
				 input.append("email", this.state.email);
				 input.append("pass", this.state.pass);
				 
				 axios.post(url , input).then(response=>{
					 if(response.data.id==""){
						 this.setState({
								msg:"Invalid or not exists..."
							})
					 }else{
					this.setState({
						msg:"Login Success! Redirecting..."
					})
				sessionStorage.setItem("username", response.data.name);
				window.location.reload(); // to reload the current page
					 }
				 })

				
			}else{
				this.setState({
					msg:"Invalid login details..."
				})
			}
		}
	

	
	render(){
		return <div className="container">
				<div className="row">
					<div className="col-md-4"></div>
					<div className="col-md-4">
						<div className="card">
							<div className="card-header bg-secondary text-white">Login</div>
							<div className="card-body">
			<p className="text-primary text-center">{this.state.msg}</p>
			<div className="form-group">
				<label>User Name</label>
				<input type="text" className="form-control" onChange={this.handleEmail} />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" className="form-control" onChange={this.handlePass} />
			</div>
								
							</div>
							<div className="card-footer text-center">
			<button className="btn btn-danger btn-sm" onClick={this.login}>Login</button>
							</div>
						</div>
					</div>
					<div className="col-md-4"></div>
				</div>
			   </div>
	}
}

export default UserLogin;