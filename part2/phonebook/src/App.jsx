import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterInput, setFilterInput] = useState('')
  const [notification, setNotification] = useState(null)
  const [valid, setValid] = useState(false)

  useEffect(() => {
    personService.getAll()
      .then(initialContacts => setPersons(initialContacts))
  }, [])

  // Event handler for submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const existingContact = persons.find(persons => persons.name.toLowerCase() === newName.toLowerCase())

    if (existingContact) {
      if (confirm(`${existingContact.name} is already added to phonebook, replace the old number with a new one?`)) {
        const updatedNumberObj = { ...existingContact, number: newNumber }
        personService.updateNumber(existingContact.id, updatedNumberObj)
          .then(updatedContact => {
            setPersons(persons.map(p => p.id === updatedContact.id ? updatedContact : p))
          })
          .catch(error => {
            setNotification(`Information about ${updatedNumberObj.name} has already been removed from the server`)
            setValid(false)
            setPersons(persons.filter(person => person.id !== updatedNumberObj.id))
            setTimeout(() => setNotification(null), 5000)
          })
      }
    } else {
      personService.addNumber({ name: newName, number: newNumber })
        .then(newContact => {
          setNotification(`Added ${newContact.name}`)
          setValid(true)
          setPersons(persons.concat(newContact))
          setTimeout(() => setNotification(null), 5000)
        })
    }
    clearInput()
  }

  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id)

    if (confirm(`Delete ${person.name}?`)) {
      personService.deleteNumber(id)
        .then(deletedContact => {
          setPersons(persons.filter(p => p.id !== deletedContact.id))
        })
    }
  }

  // Clearing form inputs
  const clearInput = () => {
    setNewName('')
    setNewNumber('')
  }

  const personsToShow = filterInput ? persons.filter(person => person.name.toLowerCase().includes(filterInput)) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} valid={valid} />
      <Filter onChange={(e) => setFilterInput(e.target.value)} value={filterInput} />
      <h2>Add a New</h2>
      <PersonForm
        submitHandler={handleSubmit}
        nameHandler={(e) => setNewName(e.target.value)}
        numberHandler={(e) => setNewNumber(e.target.value)}
        nameVal={newName}
        numVal={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDelete={handleDelete} />
    </div>
  )
}

export default App