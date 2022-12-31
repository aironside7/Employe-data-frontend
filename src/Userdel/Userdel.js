
import { useEffect } from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom"
import { useNavigate } from "react-router-dom";


const Userdel = () => {
    const {id} = useParams()
    const navigator = useNavigate();
    useEffect(() => {
        // DELETE request using axios inside useEffect React hook
        axios.delete(`http://localhost:8000/del/${id}`)
            .then(() => ('Delete successful'));
            
            navigator("/postView");
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    
 
}

export default Userdel
