import React, { memo } from 'react'

const Item = memo( ({id, value , onChange}) => {
  return (
    <div>
        <h5>RE-RENDER {(Math.random()*100).toFixed()}</h5>
       <input type="text" name='text' id='text'
       onChange={e=> onChange(id, e.target.value)} value={value}
       />
    </div>
  )
})

export default Item