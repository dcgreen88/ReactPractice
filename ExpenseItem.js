import React, { useState } from 'react'; /* This is NEEDED for State to be utilized */

import './styles/ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); /* State requires the use of array-destructuring. The first item should be the variable that matches the useState argument: title in the component below represents props.title.
  The second item is the name of the function that will be used to update the display. The updated information is passed as an argument. */

  const clickHandler = () => {
    setTitle('Updated!'); /* This will change the title to 'Updated!' for any button clicked. */
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2> {/* This is the variable to be updated */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
