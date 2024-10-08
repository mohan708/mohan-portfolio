import React from 'react'
import parse from 'html-react-parser'

const Resumeitem = ({icon,year,title,desc}) => {
  return (
    <div className="resume__item">
        <div className="resume__icon">
            {icon}
        </div>
        <span className="resume__date">
            {year}
        </span>
        <h3 className="resume__subtitle">
            {parse(title)}
        </h3>
        <p>{desc}</p>
    </div>
  )
}

export default Resumeitem