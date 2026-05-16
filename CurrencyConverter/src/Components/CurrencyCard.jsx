import React from 'react'

import { useId } from 'react';

function CurrencyCard({
   label,
    amount,
    onAmountchange,
    onCurrencyChange,
    selectcurrency = "usd",
    currencyOptions = [],
    amountdisabled = false,
    currencydisabled = false,

    
}) {
  const InputID = useId()

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 text-white shadow-lg">
      
      <div className="flex justify-between items-center mb-2">
        <label htmlFor={InputID} className="text-sm text-white/70">
          {label}
        </label>

        <select
          className="backdrop-blur-xl text-gray-400 border border-gray-600 p-1.5 flex justify-center  rounded focus:outline-none"
          value={selectcurrency}
                    disabled ={currencydisabled}
                    onChange={(e) =>{
                      onCurrencyChange && onCurrencyChange(e.target.value)
                    }}
        >
          {currencyOptions.map((currency) =>
                         <option key={currency} value= {currency}>
                            {currency}
                        </option>

                     )}
        </select>
      </div>

      <input
        id={InputID}
        type="number"
        value={amount}
                    onChange={(e) => {
                       onAmountchange && onAmountchange(Number(e.target.value))
                    }}
                    disabled = {amountdisabled}
        className="w-full bg-transparent text-3xl font-semibold outline-none"
        placeholder="0.00"
      />
    </div>
  );
}

export default CurrencyCard;