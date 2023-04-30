
import Dashboard from "./dashboard";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Navbar = () => {
    return (
        <div>
            <Tabs
                defaultActiveKey="Income"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Income" title="Income">
                    <Dashboard type="income" />
                </Tab>
                <Tab eventKey="Expense" title="Expense">
                    <Dashboard type="expense" />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Navbar;