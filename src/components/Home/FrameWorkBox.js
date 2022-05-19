import React from 'react'
import '../../styles/index.css'

function FrameWorkBox(props) {
  return (
    <div>
        <div className="framwork-box">

      <h5>{props.title}</h5>
      <p>{props.description}</p>
        </div>
    </div>
  )
}

export default FrameWorkBox
