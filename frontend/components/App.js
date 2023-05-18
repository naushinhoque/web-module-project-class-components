import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          <li>Walk</li>
          <li>Clean</li>
          <li>HomeWork</li>

          <form>
            <input/>
            <button>Add</button>
          </form>

          <button>Clear</button>
        </ul>
      </div>
    )
  }
}
