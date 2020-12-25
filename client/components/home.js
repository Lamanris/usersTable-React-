import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import UserTable from './userTable'
import { getUsers } from '../redux/reducers/userData'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <div>
      <Route exact path="/" component={() => <UserTable />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
