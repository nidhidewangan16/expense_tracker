import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expences = [
    {
      title: 'Car Insurance',
      date: new Date(2021,2,28),
      amount: 294.67
    },
    {
      title: 'Car Insurance',
      date: new Date(2021,2,28),
      amount: 294.67
    },
    {
      title: 'Car Insurance',
      date: new Date(2021,2,28),
      amount: 294.67
    },
    {
      title: 'Car Insurance',
      date: new Date(2021,2,28),
      amount: 294.67
    }
  ]

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseItem title={expences[0].title} amount={expences[0].amount} date={expences[0].date}/>
      <ExpenseItem title={expences[1].title} amount={expences[1].amount} date={expences[1].date}/>
      <ExpenseItem title={expences[2].title} amount={expences[2].amount} date={expences[2].date}/>
      <ExpenseItem title={expences[3].title} amount={expences[3].amount} date={expences[3].date}/>
    </div>
  );
}

export default App;
