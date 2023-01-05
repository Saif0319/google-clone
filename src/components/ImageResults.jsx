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
import "../styles/img-results.css"
import { useNavigate } from "react-router-dom"
import { BiNews } from "react-icons/bi"
import { FaRegImage } from "react-icons/fa"
import { FcSearch } from "react-icons/fc"



const ImageResults = () => {

  const navigate = useNavigate()
    
    const { getImgResult, imgResult, loading, searchTerm, setSearchTerm } = useResult()

    useEffect(() => {
        getImgResult("something")
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
            <a onClick={() => navigate("/search")}> <FcSearch size={"1em"} /> All</a>
            <a onClick={() => navigate("/images")} style={{borderBottom: "3px solid #8ab4f8"}}> <FaRegImage size={"1em"} /> Images</a>
            <a onClick={() => navigate("/news")}> <BiNews size={"1em"} /> News</a>
          </div>
      </nav>



      <div className="result-img-container">
        {imgResult && imgResult.value.map(res => {
          return (
            <div className="result-img" key={res.title}>
                <a href={res.url}><img src={res.thumbnail? res.thumbnail: ""} alt={res.title} loading="lazy" /></a>
                <p>{res.thumbnail? res.title.length > 30? res.title.substring(0, 30) + " ..." : res.title : ""}</p>
              
            </div>
          )
        })}

      </div>
        
       
    </div>
  )
}

export default ImageResults