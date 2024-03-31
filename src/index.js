import React from "react"
import ReactDOM from "react-dom/client"

function Greeting() {
    return (
        <>
            <Person />
            <Message />
        </>
    )
}

const Person = () => <h2>John</h2>
const Message = () => <h2>Hello</h2>
    
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)

export default Greeting