import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count)
    if (amount < 0) {
      setText(data.slice(0, 1));
      return;
    }
    setText(data.slice(0, amount));

  }


  return (
    <>
      <section className="section-center">
        <h3>tired of bording lorem ipsum ?</h3>
        <form onSubmit={handleSubmit} className="lorem-form">
          <label htmlFor="amount">paragraph</label>
          <input name="amount" id="amount" value={count} type="number" onChange={(e) => setCount(e.target.value)} />
          <button type="submit" className="btn">generate</button>
        </form>
        <article className="lorem-text">
          {
            text.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          }
        </article>
      </section>
    </>
  )
}

export default App;
