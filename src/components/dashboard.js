import Table from './table';
import Model from './popup-modal';
import { Button } from 'react-bootstrap'
import Charts from './chart';
import '../css/chart.css';
import { FaPlus } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './filter';

import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";


const incomeBaseURL = "https://money-manager-9pla.onrender.com/income/list";
const expenseBaseURL = "https://money-manager-9pla.onrender.com/expense/list";

const Dashboard = (props) => {

    const { type } = props;
    const [incomes, setIncomes] = useState([]);
    const [incomesTotal, setIncomesTotal] = useState(0);
    const [expensesTotal, setExpensesTotal] = useState(0);
    const [expenses, setExpenses] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //eslint-disable-next-line
    useEffect(() => {
      const  getAllIncomes = async () => {
        await axios.get(incomeBaseURL).then(res => {
            setIncomes(res.data);
            findIncomeTotal(res.data);
        })
      }
      const  getAllExpenses = async () => {
        await axios.get(expenseBaseURL).then(res => {
            setExpenses(res.data);
            findExpenseTotal(res.data);
        })
      }
      const findIncomeTotal = (data) => {
        let intotal = 0
        data.data.forEach(element => {
          intotal += element.amount;
          });
          setIncomesTotal(intotal);
    }
    const findExpenseTotal = (data) => {
      let extotal = 0
        data.data.forEach(element => {
          extotal += element.amount;
          });
          setExpensesTotal(extotal);
    }
        getAllIncomes();
        getAllExpenses();
      }, []);

      const setDataForTable = (value) => {
        if(type === 'expense') {
            return setExpenses(details => {
                return {...details, ...value}
            })
        } else {
            return setIncomes(details => {
                return {...details, ...value}
            })
        }
    }



    return (

        <>
             <div className='button addbutton' >
              <Filter setDataForTable={setDataForTable} type={type}/>
            </div>
        <Button className='button addbutton' ariant="btn btn-primary btn-lg active" onClick={handleShow}>
        <FaPlus />&nbsp;Add Income or Expense
      </Button>
      <Container>
      <Row>
        <Col></Col>
        <Col>{incomes && <Charts className="content" incomesTotal={incomesTotal} expensesTotal={expensesTotal}/>}</Col>
      </Row>
    </Container>
        {type && type==='income' && <Table data={incomes} type='income'/>}
        {type && type==='expense' &&<Table data={expenses} type='expense'/>}
        <Model show={show} handleClose={handleClose} handleShow={handleShow} selectedExpenseData="emptyIncome" selectedIncomeData="emptyIncome" category='add'/>
        
        
        
        </>
    )
}

export default Dashboard;