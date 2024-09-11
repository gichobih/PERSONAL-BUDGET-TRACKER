import React, { useContext, useState } from 'react';
import axios from 'axios';
import { format, addDays } from 'date-fns';

const today = new Date();
const formattedDate = format(today, 'yyyy-MM-dd');
const futureDate = addDays(today, 5);


const BASE_URL = "http://localhost:5000/api/v1/";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [error, setError] = useState(null);
    const [expenses, setExpenses] = useState([]);

    //calculates Expenses
    const addExpense = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, income);
            
        } catch (err) {
            setError(err.response ? err.response.data.message : "Error");
        }
        getExpenses()
    }

    const getExpenses = async () =>{
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }


    const deleteExpense = async (id) => {
            try {
                await axios.delete(`${BASE_URL}delete-expense/${id}`);
                // Optionally refresh incomes
                getExpenses();  // Ensure getIncomes is correctly handled
            } catch (error) {
                console.error('Error deleting income:', error);
                // Handle error state if needed
            }
                getExpenses()
        }
    const totalExpenses = () => {
            let totalIncome = 0;
            expenses.forEach((income) => {
                totalIncome += income.amount;
            });
            return totalIncome;
        };
        
        
    //calculates Incomes
    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income);
            
        } catch (err) {
            setError(err.response ? err.response.data.message : "Error");
        }
        getIncomes()
    }

    const getIncomes = async () =>{
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
        }


    const deleteIncome = async (id) => {
        try {
             await axios.delete(`${BASE_URL}delete-income/${id}`);
                // Optionally refresh incomes
            getIncomes();  // Ensure getIncomes is correctly handled
         } catch (error) {
            console.error('Error deleting income:', error);
                // Handle error state if needed
        }
            getIncomes()
        }

    const totalIncome = () => {
            let totalIncome = 0;
            incomes.forEach((income) => {
                totalIncome += income.amount;
            });
            return totalIncome;
        };
                
    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () =>{
        const history = [...incomes, ...expenses]
        history.sort((a, b) =>{
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }
        return (
        <GlobalContext.Provider value={{
            getIncomes,
            addIncome,
            incomes,
            expenses,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
            // Include any other context values here
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}