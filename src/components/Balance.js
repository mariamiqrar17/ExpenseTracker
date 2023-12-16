import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Money formatter function
function moneyFormatter(num) {
  // Check if the absolute value of num is greater than or equal to 1000
  if (Math.abs(num) >= 1000) {
    const formattedNum = (Math.abs(num) / 1000).toFixed(0);
    return `$ ${formattedNum}k`;
  }

  // If not, format as usual
  let p = num.toFixed(2).split('.');
  return (
    '$ ' + (p[0].split('')[0] === '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <p className='text-[1rem] font-bold text-white'>Your Balance</p>
      <p className='text-[1.5rem] text-[white] font-bold'>{moneyFormatter(total)}</p>
    </>
  );
};

export default Balance;
