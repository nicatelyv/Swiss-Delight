import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.scss'

function AdminPanelMessagesComponent() {
    const [messages, setMessages] = useState([])
    const [messageStats, setMessgeStats] = useState([])
    const [search, setSearch] = useState("")

    const URL = "https://swiss-delight-api.vercel.app/api/contact-messages"

    const getMessage = async () => {
        const response = await axios.get(URL);
        setMessages(response.data);
    };

    const getMessageStat = async () => {
        const response = await axios.get("https://swiss-delight-api.vercel.app/api/contact-messages/stats");
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
                        <th>Tarih</th>
                        <th></th>
                    </tr>
                    {messages ?
                        (messages.filter(data => data.email.toLocaleLowerCase().includes(search)).map((element, index) => (
                            <tr key={index}>
                                <td>{element.firstName}</td>
                                <td>{element.email}</td>
                                <td>{element.message}</td>
                                <td>
                                    {element.createdAt[0]}
                                    {element.createdAt[1]}
                                    {element.createdAt[2]}
                                    {element.createdAt[3]}
                                    {element.createdAt[4]}
                                    {element.createdAt[5]}
                                    {element.createdAt[6]}
                                    {element.createdAt[7]}
                                    {element.createdAt[8]}
                                    {element.createdAt[9]}
                                    /
                                    {element.createdAt[11]}
                                    {element.createdAt[12]}
                                    {element.createdAt[13]}
                                    {element.createdAt[14]}
                                    {element.createdAt[15]}
                                </td>
                                <td><button onClick={() => handleDelete(element._id)}>Sil</button></td>
                            </tr>)
                        )) : <img title='Data is loaded...' src='https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif' alt='Loading' />}
                </table>
            </div>
        </section>
    )
}

export default AdminPanelMessagesComponent