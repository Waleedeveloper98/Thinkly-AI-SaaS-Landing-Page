import React from 'react'

const Heading = ({title}) => {
  return (
    <h2 className="text-3xl font-semibold text-[var(--text-heading)] md:text-5xl text-shadow">{title}</h2>
  )
}

export default Heading