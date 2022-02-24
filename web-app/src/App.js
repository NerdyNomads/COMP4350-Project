import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import TextList from "./components/TextList";
import Sidebar from "./components/Sidebar";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const [data, setData] = React.useState(null);
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    // Test backend connection using GET route from server.js
    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                    <p>{!data ? "Loading..." : data}</p>
                    <LoginButton/>
                    <LogoutButton/>
                    <TextList/>
                    <Sidebar/>
                    <Profile/>
            </header>
        </div>
    );
}

export default App;
