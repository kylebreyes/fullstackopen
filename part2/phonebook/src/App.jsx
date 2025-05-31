import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')
 
  // Event handler for submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const isExisiting = persons.some(persons => persons.name.toLowerCase() === newName.toLowerCase())

    if (isExisiting) {
      alert(`${newName} is already added to phonebook`)
      clearInput()
      return
    }

    clearInput()
    setPersons(persons.concat({ name: newName, number: newNumber}))
  }

  // Clearing form inputs
  const clearInput = () =>{
    setNewName('')
    setNewNumber('')
    setFilteredPersons('')
  }

  const personsToShow = filterInput ? persons.filter(person => person.name.toLowerCase().includes(filterInput)) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <input onChange={(e) => setFilterInput(e.target.value)} value={filterInput}/>

      <h2>Add a New</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input onChange={(e) => setNewName(e.target.value)} value={newName}/><br/>
          Number: <input onChange={(e) => setNewNumber(e.target.value)} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
      {personsToShow.map(person => 
        <div key={person.name}>{person.name} {person.number}</div>
      )}
    </div>
  )
}

export default App