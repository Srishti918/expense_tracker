import "./AddBalance.css";
import { useState } from "react";
import { useSnackbar } from "notistack";

export default function AddBalance({ setIsOpen, setBalance }) {
  const [income, setIncome] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Number(income) < 0) {
      enqueueSnackbar("Income should be greater than 0", {
        variant: "warning",
      });
      setIsOpen(false);
      return;
    }

    setBalance((prev) => prev + Number(income));
    setIsOpen(false);
  };

  return (
    <div className="formWrapper">
      <h3>Add Balance</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Income Amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />

        <button type="submit" className="button primary">
          Add Balance
        </button>

        <button
          onClick={() => setIsOpen(false)}
          className="button secondary"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
