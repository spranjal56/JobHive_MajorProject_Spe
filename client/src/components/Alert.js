import React from 'react'
import { useAppContext } from '../context/appContext'

const Alert = () => {
    const {alertType, alertText} = useAppContext()
  return (
    <div className={`alert alert-${alertType}`}>
        {/* Alert goes here */}
        {alertText}
    </div>
  )
}

export default Alert