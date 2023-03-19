import React, { useEffect, useState } from "react";

const Crypto = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers/?results=100")
      .then((res) => res.json())
      .then((data) => setResults(data.splice(0, 20)));
  }, []);
  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="mt-20 w-full text-sm text-left text-white-500 dark:text-gray-400">
          <thead class="text-xs text-black-700 uppercase bg-white-50 dark:bg-white-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Crypto Name
              </th>
              <th scope="col" class="px-6 py-3">
                Symbol
              </th>
              <th scope="col" class="px-6 py-3">
                Price Change 1h
              </th>
              <th scope="col" class="px-6 py-3">
                Price Change 1d
              </th>
              <th scope="col" class="px-6 py-3">
                Price Change 7d
              </th>
              <th scope="col" class="px-6 py-3">
                Price Change 1y
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map((value, index) => (
              <tr
                key={index}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <a href={`/crypto/${value.symbol}`}>{value.name}</a>
                </th>
                <td class="px-6 py-4">{value.symbol}</td>
                <td class="px-6 py-4">{value.quotes.USD.percent_change_1h}%</td>
                <td class="px-6 py-4">
                  {value.quotes.USD.percent_change_24h}%
                </td>
                <td class="px-6 py-4">{value.quotes.USD.percent_change_7d}%</td>
                <td class="px-6 py-4">{value.quotes.USD.percent_change_1y}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crypto;
