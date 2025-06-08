const Notification = ({ message, valid }) => {
  if (message === null) {
    return null
  }

  const color = valid ? "valid-notif" : "error-notif"

  return (
    <div className={color}>
      {message}
    </div>
  )
}

export default Notification