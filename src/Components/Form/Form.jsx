import React, { useState } from 'react'
import "./index.scss"
import Card from '../../UI/Card'

const Form = () => {
    const [task, setTask] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')

    const addTask = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            name: name,
            email: email,
            tel: tel,
            day: new Date().getDate(),
            month: new Date().getMonth() + 1,
            year: new Date().getFullYear()
        }

        setTask([...task, newTask])

        setName("")
        setEmail("")
        setTel("")
    }


    return (
        <>
            <section className='form container'>
                <div className="form__body">
                    <h1 className='form__title'>ToDo</h1>
                    <form action="#" className='form__wrapper' onSubmit={(e) => addTask(e)}>
                        <div className="form__wrapper-input">

                            <div className="form__inner">
                                <label htmlFor="name" className='form__label'>Name</label>
                                <input required type="text" value={name} onChange={(e) => setName(e.target.value)} id='name' name='name' placeholder='Enter your name' className='form__input' />
                            </div>

                            <div className="form__inner">
                                <label htmlFor="email" className='form__label'>Email</label>
                                <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' placeholder='Enter your email' className='form__input' />
                            </div>
                            <div className="form__inner">
                                <label htmlFor="phone" className='form__label'>Phone</label>
                                <input required type="tel" value={tel} onChange={(e) => setTel(e.target.value)} id='tel' name='tel' placeholder='Enter your pone number' className='form__input' />
                            </div>
                            {/* <div className="form__inner">
                        <label htmlFor="date" className='form__label'>Date </label>
                        <input type="date" id='date' name='date' className='form__input' />
                    </div> */}
                        </div>

                        <button type='submit' className='form__btn'>Click</button>
                    </form>
                </div>
            </section>
            <Card task={task} />
        </>
    )
}

export default Form