import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.scss'

function AdminPanelMessagesComponent() {
    const [messages, setMessages] = useState([])
    const [messageStats, setMessgeStats] = useState([])
    const [search, setSearch] = useState("")

    const URL = "http://localhost:5555/api/contact-messages"

    const getMessage = async () => {
        const response = await axios.get(URL);
        setMessages(response.data);
    };

    const getMessageStat = async () => {
        const response = await axios.get("http://localhost:5555/api/contact-messages/stats");
        setMessgeStats(response.data);
    };
    useEffect(() => {
        getMessage()
        getMessageStat()
    }, [])

    async function handleDelete(id) {
        let result = window.confirm("Silmek istediğinden emin misin?")
        if (!result) return false
        let response = await axios.delete(URL + "/" + id)
        getMessage()
    }
    return (
        <section className='AdminPanelMessages'>
            <div className='AdminPanelMessagesMain'>
                <table>
                    <div id='TotalUser'>
                        <input onChange={(e) => setSearch(e.target.value)} placeholder='E-posta adresi arayın...' />
                    </div>
                    <tr>
                        <th>İsim</th>
                        <th>E-posta</th>
                        <th>Mesaj</th>
                        <th></th>
                    </tr>
                    {messages ?
                        (messages.filter(data => data.email.toLocaleLowerCase().includes(search)).map((element, index) => (
                            <tr key={index}>
                                <td>{element.firstName}</td>
                                <td>{element.email}</td>
                                <td>{element.message}</td>
                                <td><button onClick={() => handleDelete(element._id)}>Sil</button></td>
                            </tr>)
                        )) : <img title='Data is loaded...' src='https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif' alt='Loading' />}
                </table>
            </div>
        </section>
    )
}

export default AdminPanelMessagesComponent