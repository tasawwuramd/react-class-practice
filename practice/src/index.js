import React, { Component } from 'react'
import ReactDOM from 'react-dom'

let skyData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component {

  getPercent = decimal => {
    return decimal*100 + '%';
  }

  calPercent = (total, goal) => {
    return this.getPercent(total/goal);
  }
  render() {
    const { total, powder, backcountry, goal } = this.props
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calPercent(total, goal)}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter
    total={skyData.total}
    powder={skyData.powder}
    backcountry={skyData.backcountry}
    goal={skyData.goal}
  />,
  document.getElementById('root')
);
