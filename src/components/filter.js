
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaFilter } from "react-icons/fa";
import '../css/filter.css';
import axios from "axios";

const incomeBaseURL = "https://money-manager-9pla.onrender.com/income";
const expenseBaseURL = "https://money-manager-9pla.onrender.com/expense";


const Filter = (props) => {

    const { setDataForTable} = props;
    const { type} = props;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selectFilter = (e, c, v) => {
        e.preventDefault();
        let baseurl;
        type === 'income' ? baseurl = incomeBaseURL : baseurl = expenseBaseURL;
        let url = `${baseurl}/?${c}=${v}`;
        getFilterData(url);
    }

    const  getFilterData = async (url) => {
        await axios.get(url).then(res => {
            setShow(false);
            setDataForTable(res.data);
        })
      }

    return (
        < div >
            <Button variant="primary" onClick={handleShow} >
                <div><FaFilter className='filtericon'/>Filter</div>
            </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fillter_menu'>Filter</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    
                    <form className='fillter_menu'>
                    <div>
                         Category
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="value" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'salary')}/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Salary
                        </label>
                    </div>
                    <div className="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'Freelance')}/>
                        <label class="form-check-label" for="flexCheckDefault"> Freelance </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'food')}/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Food
                        </label>
                    </div>
                    <div className="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'Hospital')}/>
                        <label class="form-check-label" for="flexCheckDefault"> Hospital </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'loan')}/>
                        <label class="form-check-label" for="flexCheckDefault">  Loan   </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'Hospital')} />
                        <label class="form-check-label" for="flexCheckDefault">  Medical   </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'petrol')}/>
                        <label class="form-check-label" for="flexCheckDefault">  Petrol   </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'category', 'movie')}/>
                        <label class="form-check-label" for="flexCheckDefault">  Movie   </label>
                    </div>
                    <div>
                         Division
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'division', 'Personal')}/>
                        <label class="form-check-label" for="flexCheckDefault">  Personal   </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={e => selectFilter(e, 'division', 'Office')}/>
                        <label class="form-check-label" for="flexCheckDefault">  Office   </label>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={handleClose}>Submit</button>


                    </form>



                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Filter;