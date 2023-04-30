import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";

const incomePostBaseURL = "https://money-manager-9pla.onrender.com/income";
const expensePostBaseURL = "https://money-manager-9pla.onrender.com/expense";
const incomePutBaseURL = "https://money-manager-9pla.onrender.com/income";
const expensePutBaseURL = "https://money-manager-9pla.onrender.com/expense";




const Forms = (props) => {

    const { type } = props;
    const { handleClose }  = props;
    const { id }  = props;

    console.log(id, 'id');

    const [income, setIncome] = useState({
        category: '',
        amount: '',
        description: '',
        date: '',
        division: ''
    });

    const [expense, setExpense] = useState({
        category: '',
        amount: '',
        description: '',
        date: '',
        division: ''
    });
    
    const handleIncome = (value) => {
        return setIncome(details => {
            return {...details, ...value}
        })
    }

    const handleExpense = (value) => {
        return setExpense(details => {
            return {...details, ...value}
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(id) {
            handleEdit(id);
        } else {
            handleSave();
        }
    }

    const handleSave = () => {
        type === 'income' ? saveIncome(income) : saveExpense(expense);
        handleClose();
    }
    const handleEdit = (id) => {
        type === 'income' ? editIncome(income, id) : editExpense(expense, id);
        handleClose();
    }

    const saveIncome = (value) => {
        axios.post(incomePostBaseURL, value).then((response) => {
            window.location.reload(true);
          });
    }

    const saveExpense = (value) => {
        axios.post(expensePostBaseURL, value).then((response) => {
            window.location.reload(true);
          });
    }
    const editIncome = (value, id) => {
        const url = `${incomePutBaseURL}/${id}`;
        axios.put(url, value).then((response) => {
            window.location.reload(true);
          });
    }

    const editExpense = (value, id) => {
        axios.put(`${expensePutBaseURL}/${id}`, value).then((response) => {
            window.location.reload(true);
          });
    }

    return(
<Form >
      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter category" 
          onChange={e => type ==='income' ? handleIncome({ category: e.target.value }) : handleExpense({ category: e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAmount">
        <Form.Label>Amount</Form.Label>
        <Form.Control type="number" placeholder="Enter the amount" 
        onChange={e => type ==='income' ? handleIncome({ amount: e.target.value }) : handleExpense({ amount: e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter the description" 
        onChange={e => type ==='income' ? handleIncome({ description: e.target.value }) : handleExpense({ description: e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="Date" placeholder="Enter the date" 
        onChange={e => type ==='income' ? handleIncome({ date: e.target.value }) : handleExpense({ date: e.target.value })}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDivision">
        <Form.Label>Division</Form.Label>
        <Form.Control type="text" placeholder="Enter the division" 
        onChange={e => type ==='income' ? handleIncome({ division: e.target.value }) : handleExpense({ division: e.target.value })}/>
      </Form.Group>


      <Button variant="primary" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>
    </Form>
    )
}

export default Forms;