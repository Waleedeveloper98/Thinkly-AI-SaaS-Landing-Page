import React from 'react'
import Heading from './Heading'
import SubHeading from './SubHeading'

const PageHeader = ({title,subTitle}) => {
  return (
    <div className="feature-header text-center flex flex-col gap-2">
        <Heading title={title}/>
        <SubHeading subTitle={subTitle}/>
      </div>
  )
}

export default PageHeader