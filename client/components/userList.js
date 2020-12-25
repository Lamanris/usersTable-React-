import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const UserList = ({ el, allCheck }) => {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setChecked(allCheck)
    if (allCheck || !allCheck) {
      dispatch({
        type: 'SET_SELECTED',
        selected: { name: el.name, id: el.id, status: allCheck }
      })
    }
  }, [allCheck, dispatch, el.id, el.name])
  return (
    <>
      {checked ? (
        <tr key={el.id} className="bg-green-400">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked)
              dispatch({
                type: 'SET_SELECTED',
                selected: { name: el.name, id: el.id, status: e.target.checked }
              })
            }}
          />
          <td className="border-separate border border-blue-500">{el.name}</td>
          <td className="border-separate border border-blue-500">{el.email}</td>
          <td className="border-separate border border-blue-500">{el.phone}</td>
        </tr>
      ) : (
        <tr key={el.id}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked)
              dispatch({
                type: 'SET_SELECTED',
                selected: { name: el.name, id: el.id, status: e.target.checked }
              })
            }}
          />
          <td className="border-separate border border-blue-500">{el.name}</td>
          <td className="border-separate border border-blue-500">{el.email}</td>
          <td className="border-separate border border-blue-500">{el.phone}</td>
        </tr>
      )}
    </>
  )
}

export default UserList
