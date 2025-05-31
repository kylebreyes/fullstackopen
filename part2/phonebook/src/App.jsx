import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const isExisiting = persons.some(persons => persons.name.toLowerCase() === newName.toLowerCase())

    if (isExisiting) {
      alert(`${newName} is already added to phonebook`)
      clearNameInput()
      return
    }

    clearNameInput()
    setPersons(persons.concat({ name: newName }))
  }

  const clearNameInput = () =>
    setNewName('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input onChange={(e) => setNewName(e.target.value)} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <div key={person.name}>{person.name}</div>
      )}
    </div>
  )
}

export default App