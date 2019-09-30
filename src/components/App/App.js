import React, {Component} from 'react';
import Header from '../Header/Header';
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";

class App extends Component{
    render() {
        return (
            <div className="container">
                <Header/>
                <Sidebar/>
                <Profile/>
            </div>
        )
    }
}

export default App