import TransactionCard from "../TransactionCard/TransactionCard";
import "./TransactionList.css";
import Modal from "../Modal/Modal";
import AddExpense from "../../components/ModalForms/AddExpense/AddExpense";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function TransactionList({
  transactions,
  title,
  editTransactions,
  balance,
  setBalance,
}) {
  const [editId, setEditId] = useState(0);
  const [isDisplayEditor, setIsDisplayEditor] = useState(false);
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const maxRecords = 3;
  const [totalPages, setTotalPages] = useState(0);

  const handleDelete = (id) => {
    const item = transactions.find((i) => i.id == id);
    const price = Number(item.price);
    setBalance((prev) => prev + price);

    editTransactions((prev) => prev.filter((item) => item.id != id));
  };

  const handleEdit = (id) => {
    setEditId(id);
    setIsDisplayEditor(true);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * maxRecords;
    const endIndex = Math.min(currentPage * maxRecords, transactions.length);

    setCurrentTransactions([...transactions].slice(startIndex, endIndex));
    setTotalPages(Math.ceil(transactions.length / maxRecords));
  }, [currentPage, transactions]);

  useEffect(() => {
    if (totalPages < currentPage && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [totalPages]);

  const updatePage = setCurrentPage;

  const handlePrev = () => {
    if (currentPage > 1) {
      updatePage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (totalPages != currentPage) {
      updatePage((prev) => prev + 1);
    }
  };

  return (
    <div className="transactionsWrapper">
      {title && <h2>{title}</h2>}

      {transactions.length > 0 ? (
        <div className="list">
          <div>
            {currentTransactions.map((transaction) => (
              <TransactionCard
                details={transaction}
                key={transaction.id}
                handleDelete={() => handleDelete(transaction.id)}
                handleEdit={() => handleEdit(transaction.id)}
              />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="paginationWrapper">
              <button onClick={handlePrev} disabled={currentPage == 1}>
                <IoIosArrowRoundBack />
              </button>

              <p>{currentPage}</p>

              <button onClick={handleNext} disabled={totalPages == currentPage}>
                <IoIosArrowRoundForward />
              </button>
            </div>
          )}
        </div>
      ) : (
        ""
      )}

      <Modal isOpen={isDisplayEditor} setIsOpen={setIsDisplayEditor}>
        <AddExpense
          editId={editId}
          expenseList={transactions}
          setExpenseList={editTransactions}
          setIsOpen={setIsDisplayEditor}
          balance={balance}
          setBalance={setBalance}
        />
      </Modal>
    </div>
  );
}
