import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-dom'

// let skyData = {
//   total: 50,
//   powder: 20,
//   backcountry: 10,
//   goal: 100
// }

// class SkiDayCounter extends Component {

//   getPercent = decimal => {
//     return decimal*100 + '%';
//   }

//   calPercent = (total, goal) => {
//     return this.getPercent(total/goal);
//   }
//   render() {
//     const { total, powder, backcountry, goal } = this.props
//     return (
//       <section>
//         <div>
//           <p>Total Days: {total}</p>
//         </div>
//         <div>
//           <p>Powder Days: {powder}</p>
//         </div>
//         <div>
//           <p>Backcountry Days: {backcountry}</p>
//         </div>
//         <div>
//           <p>Goal Progress: {this.calPercent(total, goal)}</p>
//         </div>
//       </section>
//     )
//   }
// }

// ReactDOM.render(
//   <SkiDayCounter
//     total={skyData.total}
//     powder={skyData.powder}
//     backcountry={skyData.backcountry}
//     goal={skyData.goal}
//   />,
//   document.getElementById('root')
// );

// const bookList = [
//   { "title": "Book One", "author": "Author One", "pages": 100 },
//   { "title": "Book Two", "author": "Author Two", "pages": 200 },
//   { "title": "Book Three", "author": "Author Three", "pages": 115 }
// ];

// const Book = ({ title, author, pages }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>By: {author}</p>
//       <p>Pages: {pages} pages</p>
//     </div>
//   );
// }


// const Hiring = () =>
//   <div>
//     <p>Library is hiring. Please visit www.Library.com/jobs for more.</p>
//   </div>

// const NotHiring = () =>
//   <div>
//     <p>Library is Nor hiring. Please check back later for more info.</p>
//   </div>

// // const Library = ({ books }) => {
// class Library extends Component {

//   state = {
//     open: false,
//     bookDisplay: { "display": "none" },
//     hiring: false
//   }
//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     open: false,
//   //     bookDisplay: {"display": "none"}
//   //   }
//   //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
//   // }

//   // toggleOpenClosed() {
//   toggleOpenClosed = () => {
//     this.setState(prevState => ({
//       open: !prevState.open,
//       bookDisplay: prevState.bookDisplay.display === "none" ? { "display": "block" } : { "display": "none" }
//     }))
//   }

//   render() {
//     const { books } = this.props;
//     return (
//       <div>
//         {this.state.hiring ? <Hiring /> : <NotHiring />}
//         <h1>Library is {this.state.open ? "Open" : "Closed"}</h1>
//         <button onClick={this.toggleOpenClosed}>{!this.state.open ? "Open" : "Close"} Library</button>
//         <div style={this.state.bookDisplay}>
//           {books.map(
//             (book, i) =>
//               <Book key={i} title={book.title} author={book.author} pages={book.pages} />
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// render(
//   <Library books={bookList} />,
//   document.getElementById('root')
// );

class FavouriteColorForm extends Component {
  state = {
    value: ''
  }

  newColor = (e) =>
    this.setState({ value: e.target.value });

  showColor = (e) => {
    console.log("New Color : "+this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.showColor}>
        <label>Favourite Color:
          <input type="color" onChange={this.newColor} />
        </label>
        <button>Submit</button>
      </form>
    );
  }
}

render(
  <FavouriteColorForm />,
  document.getElementById('root')
)
