import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getTotal } from "../utilities/calculate";
import Cosmetic from './Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

   
    
    useEffect(() => {
       loadCosmetics()
    }, [])
    
    const loadCosmetics = async() => {
        const { data } = await axios.get('data.json');
        setCosmetics(data)
    }
    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic.id}
                    cosmetic ={cosmetic}
                    ></Cosmetic> )
            }
        </div>
    );
};

export default Cosmetics;