import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
  }

  const personsToShow = filterInput ? persons.filter(person => person.name.toLowerCase().includes(filterInput)) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={(e) => setFilterInput(e.target.value)} value={filterInput}/>
      <h2>Add a New</h2>
      <PersonForm 
        submitHandler={handleSubmit}
        nameHandler={(e) => setNewName(e.target.value)}
        numberHandler={(e) => setNewNumber(e.target.value)}
        nameVal={newName}
        numVal={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App