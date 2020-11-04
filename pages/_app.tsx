import Link from 'next/link'
import '../styles/sass/global.scss'
function App() {
    return (
        <>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <Link href="/">
            <a className="example">Home</a>
          </Link>
        </li>
        <li className="navbar-menu-item">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
       
      </ul>
       <div className="top-header">BATMAN TV SHOWS</div>
       </>
    )
  }
  
  export default App