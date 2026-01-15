import React from 'react'

const Heading = ({text}) => {
  return (
    <h2 className="text-3xl font-semibold text-[var(--text-heading)] md:text-5xl text-shadow">{text}</h2>
  )
}

export default Heading