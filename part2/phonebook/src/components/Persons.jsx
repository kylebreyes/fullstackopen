const Persons = ({ persons, onDelete }) => {
  return (
    <>
      {persons.map(person => 
        <div key={person.id}>
          {person.name} {person.number}&nbsp;
          <button onClick={() => onDelete(person.id)} >Delete</button>
        </div>
      )}
    </>
  )
}


export default Persons