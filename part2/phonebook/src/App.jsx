import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')
 
  useEffect(() => {
    personService.getAll()
      .then(initialContacts => setPersons(initialContacts))
  }, [])

  // Event handler for submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const isExisiting = persons.some(persons => persons.name.toLowerCase() === newName.toLowerCase())

    if (isExisiting) {
      alert(`${newName} is already added to phonebook`)
      clearInput()
      return
    }

    personService.addNumber({name: newName, number: newNumber})
      .then(newContact => {
        clearInput()
        setPersons(persons.concat(newContact))
      })
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