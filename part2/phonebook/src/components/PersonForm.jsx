const PersonForm = ({ submitHandler, nameHandler, numberHandler, nameVal, numVal}) => (
  <form onSubmit={submitHandler}>
      <div>
        Name: <input onChange={nameHandler} value={nameVal}/><br/>
        Number: <input onChange={numberHandler} value={numVal}/>
      </div>
      <div>
      <button type="submit">add</button>
    </div>
  </form>
)

export default PersonForm