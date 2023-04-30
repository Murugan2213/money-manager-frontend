import {FaPencilAlt} from 'react-icons/fa';
import { useState } from "react";
import Model from './popup-modal';
import '../css/chart.css';

const Table = (props) => {

  const tableData = props.data.data;
  const type = props.type;

  const [show, setShow] = useState(false);
  const [selectedIncomeData, setselectedIncomeData] = useState({
    _id:'',
    category: '',
    amount: '',
    description: '',
    date: '',
    division: ''
  });
  const [selectedExpenseData, setselectedExpenseData] = useState({
    _id:'',
    category: '',
    amount: '',
    description: '',
    date: '',
    division: ''
  });


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const editIncome = (data, e) => {
    console.log(data, '&&&&&&&&&&&&');
    setShow(true);
    if(type === 'income') {
      return setselectedIncomeData(details => {
        return {...details, ...data}
    })
  } else {
      return setselectedExpenseData(details => {
        return {...details, ...data}
    })

    }
  }


    return (
      <>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Category</th>
      <th scope="col">Amount</th>
      <th scope="col">Description</th>
      <th scope="col">Division</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {tableData && tableData.map((data, i) => (
    <tr key={i}>
      <th scope="row">{data.date}</th>
      <td>{data.category}</td>
      <td>{data.amount}</td>
      <td>{data.description}</td>
      <td>{data.division}</td>
      <td><FaPencilAlt onClick={(e) => editIncome(data, e)}/></td>
    </tr>
     ))} 
  </tbody>
</table>
<Model show={show} handleClose={handleClose} handleShow={handleShow} selectedExpenseData={selectedExpenseData} selectedIncomeData={selectedIncomeData}/>
</>
    )
}

export default Table;