import './ExpenseItems.css';

function ExpenseItem(props){
    // return <h2>Expense Item !</h2>
    // const expenseDate = new Date(2021,2,28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.toLocaleString('en-US', { year: '2-digit' });
    const day = props.date.getFullYear();
    return (
    <div className='expense-item'>
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        {/* <div>{props.date.toISOString()}</div> */}
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </div>
    );
}

export default ExpenseItem;