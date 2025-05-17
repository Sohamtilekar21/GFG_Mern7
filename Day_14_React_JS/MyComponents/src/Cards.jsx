import React from 'react'

export default function Cards({pic,title,team,plays,colorz}) {
  return (
    <div className='card' >
        <img src={[pic]} alt="photo" />
        <h4>{title} , {team}</h4>
        <p>He is a {plays}</p>
    </div>
  )
}
