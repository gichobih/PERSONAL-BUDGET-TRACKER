import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from '../../context/Globalcontext'
import Button from '../Button/Button'
import { plus } from '../../utils/Icons'

function ExpenseForm() {
    const { addExpense, error,setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, date, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value });
        setError()
    }

    const handleDateChange = date => {
        setInputState({ ...inputState, date: date ? date.toISOString() : '' });
    }

    const handleSubmit = e => {
        e.preventDefault();
        addExpense(inputState)

        setInputState({
            title: '',
            amount: '',
            date: '',
            category: '',
            description: '',
        })
      
    }

    return (
        <ExpenseFormStyled onSubmit={handleSubmit}>
             {error && <p className='error'>{error}</p>}
            <div className='input-control'>
                <input
                    type='text'
                    value={title}
                    name='title'
                    placeholder='Expense Title'
                    onChange={handleInput('title')}
                />
            </div>
            <div className='input-control'>
                <input
                    value={amount}
                    type='text'
                    name='amount'
                    placeholder='Expense Amount'
                    onChange={handleInput('amount')}
                />
            </div>
            <div className='select input-control'>
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date ? new Date(date) : null}
                    dateFormat="dd/MM/yyyy"
                    onChange={handleDateChange}
                />
            </div>
            <div className='selects input-control'>
                <select required value={category} name='category' id='category' onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
                    <option value="education">Education</option>
                    <option value="gloceries">Gloceries</option>
                    <option value="health">Health</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="takeaways">Takeaways</option>
                    <option value="clothing">Clothing</option>
                    <option value="travelling">Travelling</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className='select input-control'>
                <textarea
                    name='description'
                    value={description}
                    placeholder='Add A Reference'
                    id='description'
                    cols='30'
                    rows='4'
                    onChange={handleInput('description')}
                ></textarea>
            </div>
            <div className='submit-btn'>
            <Button
                name={'Add Expense'}
                icon={plus}
                bPad={'.6rem .6rem'}
                bRad={'30px'}
                bg={'red'}
                color={'#fff'}
           />
           </div>
        </ExpenseFormStyled>
    )
}
const ExpenseFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem;
        border-radius: 10px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);

        &::placeholder {
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control {
        input {
            width: 100%;
        }
    }
    .selects {
    display: flex;
    justify-content: flex-end;
    select {
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active {
            color: rgba(34, 34, 96, 1);
        }
    }
   .submit-btn {
    button {
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.6);
        &:hover {
            background: var(--color-green) !important;
            transition: background 0.3s ease-in-out;
        }
    }
}

`;

export default ExpenseForm;
