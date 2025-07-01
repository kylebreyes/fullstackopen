import { useEffect, useState } from "react"
import Content from "./components/Content"
import axios from "axios"

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [searchValue, setSearchValue] = useState(null)
  const [result, setResult] = useState([])

  useEffect(() => {
    if (searchValue) {
      axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        const filteredInput = response.data
        return setResult(filteredInput.filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase())))
      })
    }
  }, [searchValue])

  const handleForm = (e) => {
    e.preventDefault()
    console.log("submitted");
    setSearchValue(searchInputValue)
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="search">Find countries: </label>
        <input id="search" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)}/>
      </form>
      <Content data={result} />
    </>
  )
}

export default App