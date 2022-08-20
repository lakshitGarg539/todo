import React from 'react'

export default function Footer() {
    const myStyle = {
        width: "100%",
        fontColor: "white",
        background: "#212729",
        height:"5vh"
    }
  return (
    <footer className = "text-light text-center" style={myStyle}>
    <p>Copyright &copy; To-Do List.com</p>
    </footer>
  )
}
