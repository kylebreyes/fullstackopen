const Content = ({ data }) => {
  if (data.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (data.length > 1) {
    return (
      <>
        {data.map(country => <div key={country.ccn3}>{country.name.common}</div>)}
      </>
    )
  } else if (data.length === 1) {
    const country = data[0]
    const languages = Object.values(country.languages)
    return (
      <>
        <h1>{country.name.common}</h1>
        <div>Capital: {country.capital[0]}</div>
        <div>Area: {country.area}</div>

        <h3>Languages</h3>
        <ul>
          {languages.map(language => <li key={language}>{language}</li>)}
        </ul>
        <img src={country.flags.svg} alt="flag" width={150} length={150} />
      </>
    )
  }
}

export default Content