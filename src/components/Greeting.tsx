'use client'
import React, { useEffect, useState } from 'react'

const Greeting = () => {

const [greeting, setGreeting] = useState('')

useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
        setGreeting('Good Morning')
    } else if ( currentHour < 18) {
        setGreeting('Good Afternoon')
    } else {
        setGreeting('Good Evening')
    }
}, [])

  return (
    <h1 className="font-semibold text-3xl mt-10">{greeting}</h1>
  )
}

export default Greeting