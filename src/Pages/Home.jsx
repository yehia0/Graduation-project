import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Components/Banner';
import Dashboard from "../Pages/Dashboard";
import NavBar from '../Components/Navbar';

function Home() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const [showDashboard, setShowDashboard] = useState(false);
    const [link, setLink] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        //check url
        if (link === "http://example.com/dashboard") {
          setShowDashboard(true); //show dashboard
        } else {
            alert("الرابط غير صحيح!");
        }
    };
    
    const handleInputChange = (even) =>{
        setQuery(even.target.value);
    }
        
return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        
        <Banner query={query} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
        
        </div>
        
)
}

export default Home


