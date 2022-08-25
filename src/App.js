import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  let expenses = [
    {
      title: 'New Mobile',
      amount: 45000,
      date: new Date(2022, 8, 7)
    },
    {
      title: 'Food',
      amount: 4300,
      date: new Date(2022, 8, 30)
    },
    {
      title: 'Shopping',
      amount: 1459,
      date: new Date(2022, 8, 1)
    },
    {
      title: 'Room Rent',
      amount: 6000,
      date: new Date(2022, 8, 30)
    }
  ]
  return (
    <div>
      <h1>Expenses in September Month</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>

    </div>
  );
}

export default App;
