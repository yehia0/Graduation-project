import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Components/Banner';

function Home() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query) {
            
            navigate(`/dashboard?search=${query}`);
        }
    };
    
    const handleInputChange = (even) =>{
        setQuery(even.target.value);
    }
return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Banner query={query} handleInputChange={handleInputChange}/>
            
        </div>
)
}

export default Home
