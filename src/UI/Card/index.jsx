import React from 'react'
import pen from '../../../public/pen.svg'
import person from '../../../public/person.jpg'
import del from '../../../public/delet.svg'
import './index.scss'

const Card = (props) => {
    const { task } = props;

    console.log(task);
    return (
        <section className='card container'>
            <div className="card__table">
                <table className='card__table-wrapper'>
                    <thead className='card__table--head'>
                        <tr className='card__head-row'>
                            <th className='card__head-text'></th>
                            <th className='card__head-text'> Name</th>
                            <th className='card__head-text'> Email</th>
                            <th className='card__head-text'>Phone</th>
                            <th className='card__head-text'>Date of admission</th>
                            <th className='card__head-text'></th>
                        </tr>
                    </thead>
                    <tbody className='card__table--body'>
                        {
                            task.map(item => {
                                return <tr className='card__body-row'>
                                    <td className='card__body-img'><img src={person} alt="person image" /></td>
                                    <td className='card__body-text'>{item.name}</td>
                                    <td className='card__body-text'>{item.email}</td>
                                    <td className='card__body-text'>{item.tel}</td>
                                    <td className='card__body-text'>{item.day}-{item.month}-{item.year}</td>
                                    <td className='card__body-icon'><img src={pen} alt="pen icon" /> <img src={del} alt="delete icon" /></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Card 