import { useState } from 'react'
import  InputBox  from './components/InputBox'
import useCurrencyInfo from './hooks/currencyinfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("pkr")
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)


    const swap = () => {
      setFrom(to)
      setTo(from)
      setAmount(convertedAmount)
      setConvertedAmount(amount)
    }

    const convert = () => {
      setConvertedAmount(amount * currencyInfo[to])
    }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/27308308/pexels-photo-27308308/free-photo-of-lofoten-islands-of-norway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          currencyInfo()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={(amount) => setAmount(amount)}
                              selectCurrency={from}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              currencyOptions={options}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              Swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              selectCurrency={to}
                              onCurrencyChange={(currency) => setTo(currency)}
                              currencyOptions={options}
                              amountDisabled
                              
                          />
                      </div>
                      <button  onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}
export default App
