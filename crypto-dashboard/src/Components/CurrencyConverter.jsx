import { React, useState } from 'react'
import ExchangeRate from './ExchangeRate'
import axios from 'axios'

function CurrencyConverter() {

    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState(0)
    const [result, setResult] = useState(0 )



    // AXIOS REQUEST***********************
    const convert = () => {
        
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': '30635ea257msh3ae65927efb5323p1c9a89jsn6579c121c065'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']*amount)
        }).catch(function (error) {
            console.error(error);
        });
    }
    // AXIOS REQUEST***************************



    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>
            <div className="input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-1"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}

                                />
                            </td>
                            <td>
                                <select name="currency-option-1" className="currency-options" id="" value={chosenPrimaryCurrency}
                                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, index) => (<option key={index}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                        {/* second row */}
                        <tr>
                            <td>Secondary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-2"
                                    value={result}
                                    disabled
                                />
                            </td>
                            <td>
                                <select name="currency-option-2" className="currency-options" id="" value={chosenSecondaryCurrency}
                                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                                >
                                    {currencies.map((currency, index) => (<option key={index}>{currency}</option>))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button id='convert-button' onClick={convert}>Convert</button>
            </div>
            <ExchangeRate />
        </div>
    )
}

export default CurrencyConverter
