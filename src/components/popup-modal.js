import { useState } from 'react';
import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import Navbar from './navbar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Forms from './form';
import '../css/popup.css';

const Model = (props) => {

    const { show, handleClose, handleShow, selectedIncomeData,  selectedExpenseData} = props;

    let selectedIncomeDataEdit = null;
    let selectedExpenseDataEdit = null;

    if(props.selectedIncomeData) 
     selectedIncomeDataEdit = props.selectedIncomeData || "";

     if(props.selectedExpenseData) 
     selectedExpenseDataEdit = props.selectedExpenseData || "";

    return (
<>
        <div className='modal'>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h4>Add your income and expense here..</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tabs
      defaultActiveKey="Income"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Income" title="Income"> 
        <Forms type="income"  handleClose={handleClose} id={selectedIncomeDataEdit ? selectedIncomeDataEdit._id : null}/>
        </Tab>
    <Tab eventKey="Expense" title="Expense">
      <Forms type="expense" handleClose={handleClose} id={selectedExpenseDataEdit ? selectedExpenseDataEdit._id : null}/>
      </Tab> 
    </Tabs>
        </Modal.Body>

      </Modal>
      </div>
    </>
      
    )
}

export default Model;