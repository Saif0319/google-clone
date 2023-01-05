import { useEffect } from "react"
import { useState } from "react"
import { useResult } from "../context/ResultProvider"
import Loading from "./Loading"
import "../styles/results.css"
import gif from "../images/google.gif"
import { AiOutlineSearch } from "react-icons/ai"
import { MdKeyboardVoice } from "react-icons/md"
import { RxCross2 } from "react-icons/rx"
import { AiFillCamera } from "react-icons/ai"
import { Link } from "react-router-dom"
import { BiNews } from "react-icons/bi"
import { FaRegImage } from "react-icons/fa"
import { FcSearch } from "react-icons/fc"



const Results = () => {
    
    const { getResult, result, loading, searchTerm, setSearchTerm } = useResult()

    useEffect(() => {
        getResult()
    }, [searchTerm])



    //Search box
    const [search, setSearch] = useState("")

    const displayCross = () => {
        if(search === ""){
            return "none"
        }
        return "block"
    }


    if(loading) {
      return <Loading />
    }


    //Search term
    const searchInputHandler = (e) => {
      setSearch(e.target.value)
    }


    //Submit search
    const submitHandler = (e) => {
      e.preventDefault()

      setSearchTerm(search)
    }

    

  return (
    <div className="results-container">

      <nav className="results-navbar">
      <Link to={"/"}  className="results-google-logo" >
        <img src={gif} alt="Google Logo" className="results-google-logo" />
        </Link>
        <form className="searchBar-container2" style={{position: "absolute", top: 0,  right:"50%"} } onSubmit={submitHandler}>
                <input type={"text"} className='searchBar' value={search} onChange={searchInputHandler} />
                    <AiOutlineSearch className="AiOutlineSearch"/>
                    <RxCross2 className="RxCross2" title="Clear" display={displayCross()} onClick={() => setSearch("")} />
                    <MdKeyboardVoice className="MdKeyboardVoice" title="Search by voice"/>
                    <AiFillCamera className="AiFillCamera" title="Search by image"/>
        </form>
        
      </nav>



      <nav className="result-type-container">
          <div className="result-type">
            <Link to={"/search"} style={{borderBottom: "3px solid #8ab4f8"}}> <FcSearch size={"1em"} /> All</Link>
            <Link to={"/images"}> <FaRegImage size={"1em"} /> Images</Link>
            <Link to={"/news"}> <BiNews size={"1em"} /> News</Link>
          </div>
      </nav>



      <div className="result-links-container">
        {result && result.value.map(res => {
          return (
            <div className="result-links" key={res.id}>
              <p className="link">{res.url.length > 40? res.url.substring(0,40) + " > ...": res.url}</p>
              <a href={res.url}>{res.title}</a>
              <p>{res.description.length > 150? res.description.substring(0,145) + " ...": res.description}</p>
            </div>
          )
        })}

      </div>
        
       
    </div>
  )
}

export default Results