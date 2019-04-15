import React from 'react'

export default function PageHeader(props) {
  return (
    <div>
      <h1>{props.title}
      {props.component && props.component}
      </h1>
    </div>
  )
}
