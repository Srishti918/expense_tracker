Introduction

Expense Tracker Web Application, designed to help you manage and monitor your spending in an easy and efficient way. This tool allows users to keep track of their expenses by categorizing them based on various types like food, transportation, entertainment. Additionally, users can view a summary of their expenses, manage their wallet balance, and visualize expense trends through charts.

Features

1. Initial Wallet Balance: The wallet balance is set to a default value of 5000.
2. Increase Wallet Balance: Users can increase their wallet balance as needed.
3. Spending Limit: Users cannot spend more than their available wallet balance. An alert is shown if they try to exceed it.
4. Add New Expenses: Users can add new expenses with details including title, amount, category, and date.
5. Auto Update Wallet Balance: The wallet balance is updated automatically whenever a new expense is added, ensuring accurate tracking.
6. Edit Existing Expenses: Users can edit previously entered expenses to correct any mistakes or update details.
7. Delete Expenses: Users can delete expenses that are no longer relevant.
8. Expense Summary: Users can view a summary of total expenses, categorized by date or expense type, for a clear overview of their spending.
9. Persistence with localStorage: All wallet balance data and expense details are stored in localStorage, ensuring that data is preserved even after the page is refreshed.

Functional Requirements

**Functional Requirements for the Expense Tracker Web Application:**

1. Add Expense Form: Provide a form where users can input the title, amount, and date of an expense. All fields are required and must be validated to ensure no missing information.

2. Add Income Form: Provide a field where users can add a balance to their wallet. This allows users to increase their available wallet funds.

3. Expense List: Display a list of all recorded expenses with options to edit or delete each entry, enabling users to manage their expenses efficiently.

4. Expense Summary: Show a visual summary of total expenses, presented in a pie chart that illustrates the proportion spent in each category.

5. Expense Trends: Provide a bar chart displaying the trends in user spending based on categories, allowing users to easily analyze how their spending changes over time.

6. Edit/Delete: Allow users to edit or delete existing expenses. This feature provides flexibility to make adjustments as needed.

7. Responsive Design: Ensure the application is fully responsive, providing an optimal user experience across various devices, including desktops, tablets, and smartphones.

Technologies Used

Frontend: React.js, HTML, CSS, JavaScript.
Third-Party Libraries: Recharts for charts, react-modal for modals, notistack for alerts, react-icons for icons.
Styling: Plain CSS was used.


Additional Pointers

Reusable UI Components: Implement reusable components for UI elements to ensure consistency and ease of maintenance across the application.

Code Quality and Consistency: Maintain high code quality with clear, readable, and consistent coding practices throughout the project.

Design Consistency: Ensure the design follows the provided fonts and color scheme, aligning with the overall visual style and branding.

This project was bootstrapped with React Vite.

Cloning and Running the Application

To clone the repository and run the Expense Tracker application locally, follow these steps:

1. Clone the repository from GitHub:
git clone https://github.com/Srishti918/expense_tracker.git

2. Navigate to the Expense Tracker directory:
cd expense_tracker

3. Install dependencies using npm:
npm install

4. Start the application:
npm run dev

5. The application will start running on http://localhost:5173 in your default web browser.
