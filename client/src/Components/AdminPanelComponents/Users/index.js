import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.scss'

function AdminPanelUsersComponent() {
    const [users, setUsers] = useState([])
    const [userStats, setUserStats] = useState([])
    const [search, setSearch] = useState("")

    const URL = "http://localhost:5555/api/users"

    const getData = async () => {
        const response = await axios.get(URL);
        setUsers(response.data);
    };

    const getUserStat = async () => {
        const response = await axios.get("http://localhost:5555/api/users/stats");
        setUserStats(response.data);
    };
    useEffect(() => {
        getData()
        getUserStat()
    }, [])

    async function handleDelete(id) {
        let result = window.confirm("Silmek istediğinden emin misin?")
        if (!result) return false
        let response = await axios.delete(URL + "/" + id)
        getData()
    }
    return (
        <section className='AdminPanelUsers'>
            <div className='AdminPanelUsersMain'>
                <table>
                    <div id='TotalUser'>
                        <input onChange={(e) => setSearch(e.target.value)} placeholder='Kullanıcı adı arayın...' />
                        <h3><i style={{ color: "black", marginRight: "10px" }} class="fa-regular fa-user"></i>Toplam Kullanıcı: {userStats.map(element => element.total)} </h3>
                    </div>
                    <tr>
                        <th>İsim</th>
                        <th>Soyisim</th>
                        <th><i style={{ color: "black", marginRight: "10px" }} class="fa-regular fa-user"></i> Kullanıcı adı</th>
                        <th><i style={{ color: "black", marginRight: "10px" }} class="fa-regular fa-envelope"></i>E-posta</th>
                        <th></th>
                    </tr>
                    {users ?
                        (users.filter(data => data.username.toLocaleLowerCase().includes(search)).map((element, index) => (
                            <tr key={index}>
                                <td>{element.firstName}</td>
                                <td>{element.lastName}</td>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td><button onClick={() => handleDelete(element._id)}>Sil</button></td>
                            </tr>)
                        )) : <img title='Data is loaded...' src='https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif' alt='Loading' />}
                </table>
            </div>
        </section>
    )
}

export default AdminPanelUsersComponent