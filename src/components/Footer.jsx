import { Link } from "react-router-dom"

const Footer = () => {

    const styles = {
        backgroundColor: "#171717",
        height:"70px",
        padding: "0 14px",
        display:"flex",
        alignItems:"center",
        margin:0,
        textAlign: "center"
    }

  return (
    <nav className='navbar footer'  style={styles}>
        <div className='left-side'>
            <Link to={"#"} className="link">Advertising</Link>
            <Link to={"#"} className="link">Business</Link>
            <Link to={"#"} className="link">How Search works</Link>
        </div>

        <div className='right-side'>
              <Link to={"#"} className="link">Privacy</Link>
              <Link to={"#"} className="link">Terms</Link>
              <Link to={"#"} className="link">Settings</Link>
        </div>
    </nav>
  )
}

export default Footer