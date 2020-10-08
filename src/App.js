import React from 'react';// calling th react.js library
import {Route , HashRouter } from 'react-router-dom';
//import {Route , BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUp from './SignUp';
import Login from './Login';
import UserList from './UserList';
import Enquiry from './Enquiry';
import StateManagement from './State';
import FormOne from './FormOne';
import ArrayThree from './ArrayThree';
import Car from './CarList';
import Multirouting from './Multirouting';
function App() {

	const myPage = (
					<HashRouter>
						<Header />
							<Route exact path="/" component={Home} />
							<Route path="/about-us" component={About} />
							<Route path="/contact-us" component={Contact} />
							<Route path="/signup" component={SignUp} />
							<Route path="/login" component={Login} />
							<Route path="/userlist" component={UserList} />
							<Route path="/enquiry" component={Enquiry} />
							<Route path="/state-management" component={StateManagement} />
							<Route path="/FormOne" component={FormOne} />
							<Route path="/ArrayThree" component={ArrayThree} />
							<Route path="/car-list" component={Car} />
							<Route path="/multirouting" component={Multirouting} />
						<Footer />		
					</HashRouter>
					);
  return (
			<> 
				{myPage} 
			</>
		);
}

export default App;
