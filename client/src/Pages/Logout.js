import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {

  let navigate = useNavigate()
  const keysToRemove = ['username', 'firstName', 'lastName', 'email', 'token', 'isAdmin']

  function logout() {
    keysToRemove.forEach(function (key) {
      localStorage.removeItem(key);
    });
    navigate("/")
    window.location.reload(false);
  }
  useEffect(() => {
    logout()
  })

  return (
    <div></div>
  )
}