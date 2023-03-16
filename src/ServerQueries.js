import React, {useState, useEffect} from 'react';
const ServerQueries = () => {
    const [users, setUsers] = useState(false);
    useEffect(() => {
    getUsers();
    }, []);
    function getUsers() {
    fetch('http://192.168.0.107:3001')
        .then(response => {
        return response.text();
        })
        .then(data => {
        setUsers(data);
        });
    }
    return(
        <div className="Users">
        {users ? users : 'There is no user data available'}
        </div>
    );

}
export default ServerQueries;