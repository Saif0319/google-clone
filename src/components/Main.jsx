import "../styles/main.css"
import gif from "../images/google.gif"
import { AiOutlineSearch } from "react-icons/ai"
import { MdKeyboardVoice } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
import { AiFillCamera } from "react-icons/ai"
import { useState } from "react"
import { useResult } from "../context/ResultProvider"
import { useNavigate } from "react-router-dom"

const Main = () => {


    const [search, setSearch] = useState("")
    const { setSearchTerm } = useResult()

    const displayCross = () => {
        if(search === ""){
            return "none"
        }
        return "block"
    }

    

    //Submit search
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
  
        setSearchTerm(search)

        return (navigate("/search"))
      }




  return (
    <div className='main-container'>
        <section className='gif'>
            <img src={gif} alt="Google Logo"/>
        </section>
        
        <section className='searchBar-container'>
            <form className="searchBar-container2" onSubmit={submitHandler}>
                <input type={"text"} className='searchBar' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <AiOutlineSearch className="AiOutlineSearch"/>
                    <RxCross2 className="RxCross2" title="Clear" display={displayCross()} onClick={() => {
                        setSearch("")
                        const input = document.querySelector(".searchBar")
                        input.focus()
                        
                    }} />
                    <MdKeyboardVoice className="MdKeyboardVoice" title="Search by voice"/>
                    <AiFillCamera className="AiFillCamera" title="Search by image"/>
            </form>

            <div className='buttons-container'>
                <button>Google Search</button>
                <a href='https://www.google.com/doodles'><button>I'm Feeling Lucky</button></a>
            </div>
        </section>

        <section className="lang-container">
            <p className="google-lang">Google offered in: <a href='www.google.com'>Français</a></p>
        </section>
    </div>
  )
}

export default Main