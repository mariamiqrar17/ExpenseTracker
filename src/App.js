import './App.css';
import { GlobalProvider } from './context/GlobalState';
import { Header } from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import Balance from './components/Balance';


function App() {
  return (
    
    <GlobalProvider>
      <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </div>
      
    </GlobalProvider>
    
    
  );
}

export default App;
