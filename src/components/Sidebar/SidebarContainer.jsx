import React from 'react';
import Sidebar from "./Sidebar";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        friends: state.sidebar.friends
    }
};

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;