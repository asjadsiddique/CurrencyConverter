import { useState,useEffect } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import CurrencyCard from './Components/CurrencyCard'
import SwapButton from './Components/SwapButton'
function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setto] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

 const { data: rates, loading } = useCurrencyInfo(from);

  const options = Object.keys(rates || {});

  useEffect(() => {
    if (!rates?.[to]) return;
       
    const result = amount * rates[to];
    setConvertedAmount(Number(result.toFixed(2)));
  }, [amount, from, to, rates]);

  
  const swap = () => {
    setFrom(to)
    setto(from)
    setAmount(convertedAmount)
    
  }

  return (
   
  < div className = "min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white" >

    <div className="w-full max-w-md p-6">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">
        Currency Exchange
      </h1>
      <p className="text-sm text-white/60 mb-6">
          Live rates • {loading ? "Updating..." : "Ready"}
      </p>

      {/* FROM */}
      <CurrencyCard
        label="From"
        amount={amount}
        onAmountchange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setFrom(currency)}
        currencyOptions={options}

        selectcurrency={from}
      />

      <SwapButton onClick={swap} />

      {/* TO */}
      <CurrencyCard
        label="To"
                amount={convertedAmount}
                selectcurrency={to}
                onCurrencyChange={(currency) => setto(currency)}
                currencyOptions={options}
                amountdisabled
      />

      {/* Footer */}
      <p className="text-center text-xs text-white/40 mt-4">
      Convert {from.toUpperCase()} To {to.toUpperCase()}
      </p>

    </div>
    </div >
  )
}

export default App

