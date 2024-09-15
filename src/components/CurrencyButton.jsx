import React from 'react'
import { FaCoins, FaDollarSign} from "react-icons/fa";
import { useState } from 'react';

const CurrencyButton = () => {
    const [currency, setCurrency] = useState('soles');

    const toggleCurrency = () => {
      setCurrency((prevCurrency) => (prevCurrency === 'soles' ? 'dollars' : 'soles'));
    };
    return (
        <div className="flex items-center justify-center">
          <div className="flex border border-blue-700 rounded-full overflow-hidden" 
           onClick={toggleCurrency}>
              <div className={`px-4 py-2 cursor-pointer
                ${currency === 'soles' ? 'bg-amber-400 text-white' :
                'bg-white text-blue-900'}`}>
                <FaCoins/>
              </div>
              <div className={`px-4 py-2 cursor-pointer 
                ${currency === 'dollars' ? 'bg-amber-400 text-white' :
                'bg-white text-blue-900'}`}>
                <FaDollarSign/>
              </div>
          </div>
        </div>
    );
}

export default CurrencyButton