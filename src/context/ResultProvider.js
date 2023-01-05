import { useState, useContext, createContext } from "react"
import axios from "axios"



export const ResultContext = createContext()


const ResultProvider = ({children}) => {

    const [searchTerm, setSearchTerm] = useState("React")
    const [result, setResult] = useState("")
    const [imgResult, setImgResult] = useState("")
    const [newsResult, setNewsResult] = useState("")
    const [loading, setLoading] = useState(false)





    //All

    const baseURL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=15&autoCorrect=true`

    
    const getResult = async () => {

        setLoading(true)

        const response = await axios.get(baseURL, {
            headers: {
                'X-RapidAPI-Key': 'd83f055fe3msh651c099a2345446p18dcf6jsnb90eb9b31e1c',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        })

        const data = await response.data
        setResult(data)
        console.log(data)
        setLoading(false)
    }




    //Images
    const imgURL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=20&autoCorrect=true`

    const getImgResult = async () => {
        setLoading(true)

        const response = await axios.get(imgURL, {
            headers: {
                'X-RapidAPI-Key': 'd83f055fe3msh651c099a2345446p18dcf6jsnb90eb9b31e1c',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        })

        const data = await response.data
        setImgResult(data)
        console.log(data)
        setLoading(false)
    }




    //News 

    const newsURL = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=20&autoCorrect=true`

    const getNewsResult = async () => {
        setLoading(true)

        const response = await axios.get(newsURL, {
            headers: {
                'X-RapidAPI-Key': 'd83f055fe3msh651c099a2345446p18dcf6jsnb90eb9b31e1c',
                'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        })

        const data = await response.data
        setNewsResult(data)
        console.log(data)
        setLoading(false)
    }





  return (
    <ResultContext.Provider value={{getResult, result, loading, searchTerm, setSearchTerm, 
        imgResult, getImgResult, newsResult, getNewsResult}}>
            
        {children}
    </ResultContext.Provider>
  )
}

export const useResult = () => useContext(ResultContext)

export default ResultProvider