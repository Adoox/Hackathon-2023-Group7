import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CryptoDetail = () => {
  let { symbol } = useParams();

  const [results, setResults] = useState([]);
  const [values, setValues] = useState([]);
  useEffect(() => {
    fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${symbol}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(Object.entries(data.data.rates).splice(5, 15));
      });
  }, []);

  return (
    <table class="mt-20 table-auto w-full">
      <tbody>
        {results.map((value, index) => (
          <tr
            key={index}
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4 text-sm">{value[0]}</td>
            <td class="px-6 py-4">{value[1].substring(0, 10)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoDetail;
