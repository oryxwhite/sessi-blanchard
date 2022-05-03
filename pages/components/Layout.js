import Navbar from "./navbar"

export default function Layout({ children }) {
  return (
    <div className="content">
        <Navbar />
        <main>{ children }</main>    
        
    </div>
  )
}
