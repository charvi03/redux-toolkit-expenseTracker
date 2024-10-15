import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./features/transactionSlice";

const App = () => {
  const exp = useSelector((state) => state.expense);
  const transactions = exp.transactions;

  const [expense, setexpense] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense && type && category) {
      dispatch(add({ type: type, category: category, expenses: expense }));
      setCategory("");
      setType("");
      setexpense("");
    }
  };
  const totalexp = transactions.reduce(
    (total, item) => total + item.expenses,
    0
  );

  const totalsavings = exp.value - totalexp;

  const cash = transactions.filter((item) => item.type === "cash");
  const online = transactions.filter((item) => item.type === "online");
  const cashexp = cash.reduce((total, item) => total + item.expenses, 0);
  const onlineexp = online.reduce((total, item) => total + item.expenses, 0);
  return (
    <div className="container">
      <div className="head">
        <h1>Total income: {exp.value}</h1>
        <h1>Total Savings: {totalsavings}</h1>
      </div>
      <div className="form">
        <form>
          <label>Category/description: </label>
          <input
            type="text"
            placeholder="Enter category of expense "
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />{" "}
          <br />
          <br />
          <label>Type of payment: </label>
          <input
            type="text"
            placeholder="cash/online  "
            value={type}
            onChange={(e) => setType(e.target.value)}
          />{" "}
          <br />
          <br />
          <label>Expense: </label>
          <input
            type="number"
            placeholder="Enter amount "
            value={expense}
            onChange={(e) => setexpense(e.target.value)}
          />{" "}
          <br /> <br />
          <button
            style={{ cursor: "pointer" }}
            onClick={handleSubmit}
            className="btn"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="details">
        <div>
          <h2> Total Expense Details</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>S.no.</th>
                <th>Type</th>
                <th>Category</th>
                <th>Expenses</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transactions) => (
                <tr key={transactions.id}>
                  <td>{transactions.id}</td>
                  <td>{transactions.type}</td>
                  <td>{transactions.category}</td>
                  <td>{transactions.expenses}</td>
                </tr>
              ))}
              <tr>
                <td colSpan=" 3 "> Total expenses</td>
                <td>{totalexp}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2> Cash Expense Details</h2>
          <table border={1}>
            <thead>
              <tr>
                <th>S.no.</th>
                <th>Type</th>
                <th>Category</th>
                <th>Expenses</th>
              </tr>
            </thead>
            <tbody>
              {cash.map((transactions, index) => (
                <tr key={transactions.id}>
                  <td>{index + 1}</td>
                  <td>{transactions.type}</td>
                  <td>{transactions.category}</td>
                  <td>{transactions.expenses}</td>
                </tr>
              ))}
              <tr>
                <td colSpan=" 3 "> Total expenses</td>
                <td>{cashexp}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
        <h2>Online Expense Details</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>S.no.</th>
              <th>Type</th>
              <th>Category</th>
              <th>Expenses</th>
            </tr>
          </thead>
          <tbody>
            {online.map((transactions, index) => (
              <tr key={transactions.id}>
                <td>{index + 1}</td>
                <td>{transactions.type}</td>
                <td>{transactions.category}</td>
                <td>{transactions.expenses}</td>
              </tr>
            ))}
            <tr>
              <td colSpan=" 3 "> Total expenses</td>
              <td>{onlineexp}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default App;
