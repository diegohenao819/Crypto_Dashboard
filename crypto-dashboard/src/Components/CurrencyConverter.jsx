import React from 'react'
import ExchangeRate from './ExchangeRate'

function CurrencyConverter() {
    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>
         <div className="input-box">
                <table>
                    <body>
                        <tr>
                            <td>Primary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-1"
                                    value={""}
                                />
                            </td>
                            <td>
                                <select name="currency-option-1" className="currency-options" id="" value={""}>
                                    <option value=""></option>
                                </select>
                            </td>
                        </tr>
{/* second row */}
                        <tr>
                            <td>Primary Currency:</td>
                            <td>
                                <input
                                    type="number"
                                    name="currency-amount-1"
                                    value={""}
                                />
                            </td>
                            <td>
                                <select name="currency-option-1" className="currency-options" id="" value={""}>
                                    <option value=""></option>
                                </select>
                            </td>
                        </tr>
                    </body>
                </table>
         </div>
            <ExchangeRate />
        </div>
    )
}

export default CurrencyConverter
