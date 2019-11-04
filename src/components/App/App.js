import React, {Component} from 'react';
import Header from '../Header/Header.jsx';
import Sidebar from "../Sidebar/Sidebar.jsx";
import Profile from "../Profile/Profile.jsx";
import Dialogs from "../Dialogs/Dialogs";

class App extends Component{
    render() {
        return (
            <div className="container">
                <Header/>
                <Sidebar/>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        )
    }
}

export default App