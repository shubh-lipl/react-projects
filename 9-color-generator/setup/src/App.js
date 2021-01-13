import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#ff00ff').all(5))

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const colors = new Values(color).all(5);
      setError(false)
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }


  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f525df" className={error ? 'error' : null} />
          <button type="submit" className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
          })
        }
      </section>
    </>
  )
}

export default App
