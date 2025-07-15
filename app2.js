import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
    return ( <
        Router >

        <
        header >
        <
        Link to = "avatar"
        avatar url = "https://api.github.com/users/facebook/repos" >
        <
        <
        /Link> <
        /header>

        <
        /Router>
    );
}

export default App;