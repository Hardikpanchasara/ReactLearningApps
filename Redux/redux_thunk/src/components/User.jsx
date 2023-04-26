import React from 'react'

const User = ({ users }) => {
    console.log(users);
    console.log(users.length);
    return (
        <div>
            {/* {users[0].name} */}
            <table border="2px solid black">
                <thead >
                    <tr>
                        <th>username</th>
                        <th>useremail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data, ind) => (
                            <tr key={ind}>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User