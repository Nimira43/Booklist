import React from "react"
import ReactDOM from "react-dom/client"

const BookList = () => {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}
    
const Image = () => (
  <img src="https://m.media-amazon.com/images/I/51wEd2FprXL._SY445_SX342_.jpg" alt="" />
);



const Title = () => {
    return <h2>The Lord of the Rings</h2>;
}
const Author = () => <h4>J. R. R. Tolkien</h4>;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)

export default BookList