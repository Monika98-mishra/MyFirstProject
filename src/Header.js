import React  from 'react';
import {Link} from 'react-router-dom';
 function Header(){
    return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <Link className="navbar-brand" to="/">React Js App</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
      
               <li  className="nav-item "> <Link to="/" className="nav-link">Home</Link> </li> 
                <li  className="nav-item "> <Link to="/state-management"  className="nav-link">State</Link> </li>
                <li  className="nav-item "> <Link to="/about-us"  className="nav-link">About Us</Link> </li> 
                <li  className="nav-item "> <Link to="/contact-us"  className="nav-link">Contact Us</Link> </li>
                <li  className="nav-item "> <Link to="/signup"  className="nav-link">Sign Up</Link> </li>
                <li  className="nav-item "> <Link to="/login" className="nav-link">Login</Link> </li>
                <li  className="nav-item "> <Link to="/userlist"  className="nav-link">User List</Link> </li>
                <li  className="nav-item "> <Link to="/enquiry"  className="nav-link">Enquiry</Link> </li>  
                <li  className="nav-item "> <Link to="/FormOne"  className="nav-link">Form One</Link> </li>
                <li  className="nav-item "> <Link to="/ArrayThree"  className="nav-link">ArrayThree</Link> </li>
                <li  className="nav-item "> <Link to="/car-list"  className="nav-link">CarList</Link> </li>
                <li  className="nav-item "> <Link to="/multirouting"  className="nav-link">MultiRouting</Link> </li>
                
                <li className="nav-item active"> 
	 				<Link  onClick={logout}> 
	 					Welcome , {sessionStorage.getItem("username")} , Logout
	 				</Link> 
	 		   </li>  
      </ul>
     
    </div>
  </nav>
  

         
   //  return  <ul className="topheader">
   //             <li> <Link to="/">Home</Link> </li> 
   //             <li> <Link to="/state-management">State</Link> </li>
   //             <li> <Link to="/about-us">About Us</Link> </li> 
   //             <li> <Link to="/contact-us">Contact Us</Link> </li>
   //             <li> <Link to="/signup">Sign Up</Link> </li>
   //             <li> <Link to="/login">Login</Link> </li>
   //             <li> <Link to="/userlist">User List</Link> </li>
   //             <li> <Link to="/enquiry">Enquiry</Link> </li>  
   //             <li> <Link to="/FormOne">Form One</Link> </li>
               
	// 		   <li> 
	// 				<Link  onClick={logout}> 
	// 					Welcome , {sessionStorage.getItem("username")} , Logout
	// 				</Link> 
	// 		   </li>  
   //         </ul>
}

const logout = () =>{
	sessionStorage.clear(); // to clear all data from sessionStorage
	window.location.reload();
}

export default Header;