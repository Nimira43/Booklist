import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'

const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    )
}
    
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71VjmMcE-rL._SY466_.jpg"
    alt=""
  />
);



const Title = () => {
    return <h2>The Lord of the Rings</h2>;
}
const Author = () => <h4>J. R. R. Tolkien</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)

export default BookList