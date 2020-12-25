import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import UserList from './userList'

const UserTable = () => {
  const usersList = useSelector((user) => user.userData.users)
  const selected = useSelector((user) => user.userData.selected)
  const [allCheck, setAllCheck] = useState(false)

  useEffect(() => {
    if (selected.length === 0) {
      setAllCheck(false)
    }
  }, [selected.length])
  return (
    <>
      <table className="table-auto border-separate border border-blue-500 py-3">
        <thead>
          <tr>
            <th className="border-separate border border-blue-500 w-1/8">
              <input
                type="checkbox"
                checked={allCheck}
                onChange={(e) => setAllCheck(e.target.checked)}
              />
            </th>
            <th className="border-separate border border-blue-500">Имя</th>
            <th className="border-separate border border-blue-500">Фамилия</th>
            <th className="border-separate border border-blue-500">Телефон</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((el) => (
            <UserList key={el.id} el={el} allCheck={allCheck} />
          ))}
        </tbody>
      </table>
      <div className="flex">
        <h4>Пользователи:</h4>
        {selected.map((name) => (
          <h4 key={name.id}>{`${name.name}`}</h4>
        ))}
      </div>
    </>
  )
}

export default UserTable
