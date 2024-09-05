####User magement

##POST   ‘/api/ register ’
Register a new user account and respond with a confirmation of successful registration or error message.

##POST  ‘/api/ login’
Log in an existing user and respond with authentication token and user information.

##GET  ‘ /api/ logout ’
Log out the current user and respond with confirmation of successful logout.

#### Income Management

##POST  ‘ /api/ income’
Add a new income entry and respond with confirmation of the income entry being saved.

##GET  ‘/api/ income’
 Retrieve all income entries for the logged-in user and respond with a list of all income entries with details.

##DELETE  ‘/api/income:id ’
Delete a specific income entry by its ID and respond with confirmation of successful deletion.

#### Expense Management

##POST  ‘/api/expenses’
Log a new expense and respond with confirmation of the expense entry being saved.

##GET  ‘/api/expenses’
Retrieve all expenses for the logged-in user and respond with a list of all expense entries with details.

##DELETE ‘/api/expenses/ :id’
Delete a specific expense entry by its ID and respond with confirmation of successful deletion.

####Savings Goals Management

##POST  ‘/api/savings ’
Create a new savings goal and respond with a confirmation of the new saving goal being created .

##GET  ‘/api/savings’
Retrieve all savings goals for the logged-in user and respond with a list of all savings goals with details.

##PATCH  ‘/api/savings/ :id’
Update a specific savings goal by its ID and respond with a confirmation of the savings goal being updated.

##DELETE  ‘/api/savings/ :id’
Delete a specific savings goal by its ID and respond with a confirmation of successful deletion.

####Reports and Analytics

##GET ‘/api/reports/ income vs expenses’
Generate a report comparing income vs. expenses for a specific period and respond with a summary of income vs. expenses within the specified period.

##GET ‘/api/reports/ category-summary’
Get a summary of expenses by category and respond with a breakdown of expenses by category with total amounts.
These API routes will allow the web client to perform all necessary operations, from managing user accounts to logging financial data and generating reports. Each route is designed to be secure, efficient, and user-friendly.

####User Stories
The following user stories define the key features that will be satisfied when the Personal Budget Tracker MVP is complete. Each story is designed to focus on the specific needs of the user, ensuring that the application delivers value and meets user expectations.

## User Registration and Login
Story: As a new user, I want to register for an account so that I can securely log in and start tracking my finances.
Acceptance Criteria:
The user should be able to register with a unique email and password.
Upon registration, the user should receive a confirmation email.
The user should be able to log in using their registered credentials.

## Adding Income Entries
Story: As a logged-in user, I want to add income entries so that I can keep a record of my earnings.
Acceptance Criteria:
The user should be able to input the amount, source, and date of the income.
The system should validate the entered data (e.g., amount must be a positive number).
The income entry should be saved to the user’s account and displayed in their income summary.

## Logging Expenses
Story: As a logged-in user, I want to log my expenses so that I can monitor and categorize my spending.
Acceptance Criteria:
The user should be able to input the amount, category, and date of the expense.
The system should allow the user to select from predefined categories (e.g., Food, Transportation).
The expense entry should be saved and reflected in the user’s expense summary.

##Setting Savings Goals
Story: As a user, I want to set and track savings goals so that I can work towards specific financial objectives.
Acceptance Criteria:
The user should be able to create a new savings goal with a target amount, description, and deadline.
The system should allow the user to update the current amount saved towards the goal.
Progress towards the goal should be visually represented (e.g., progress bar).

## Viewing Financial Reports
Story: As a user, I want to view reports comparing my income and expenses so that I can better understand my financial situation.
Acceptance Criteria:
The user should be able to select a date range for the report.
The system should generate a visual comparison (e.g., bar chart) of income vs. expenses.
The report should highlight any discrepancies or trends in spending.
These user stories provide a clear direction for the development of the Personal Budget Tracker MVP. By focusing on specific user needs, the project ensures that the final product will be both functional and user-centric.



