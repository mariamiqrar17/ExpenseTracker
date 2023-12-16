import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function moneyFormatter(num) {
  if (Math.abs(num) >= 1000) {
    const formattedNum = (Math.abs(num) / 10000).toFixed(1);
    return `$ ${formattedNum}k`;
  }
  return `$ ${num.toFixed(0)}`;
}

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense =
    amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <p className='text-[0.75rem] font-bold'>INCOME</p>
        <p className="text-[#2ecc71;] font-bold">{moneyFormatter(income)}</p>
      </div>
      <div>
        <p className='text-[0.75rem] font-bold'>EXPENSE</p>
        <p className="text-[#c0392b] font-bold">{moneyFormatter(expense)}</p>
      </div>
    </div>
  );
};
