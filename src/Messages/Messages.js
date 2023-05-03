// What's the state we need

const heardStyles = {
  textDecoration: "line-through",
  color: "green",
};
function Message({ message, handleDelete, handleUpdate }) {
  const handleClick = () => {
    handleDelete(message);
  };

  const handleChange = (e) => {
    // Know whether the checkbox is checked or not
    handleUpdate(message, e.target.checked);
    // Handle event
  };
  // The syntax ? : is a shorter version of the if statement:
  // If it's true, apply what's before the ':', else apply what's after.
  // {message.author === "Tom K" && <span>🔥</span>} => anothere way of writing an if statement
  return (
    <div>
      <span style={message.heard ? heardStyles : {}}>
        {message.author}: {message.content}
      </span>
      {message.author === "Tom K" && <span>🔥</span>}
      {/* {message.author === "Hamza Ak" ? <span>🔥</span> : <span>🌊</span>} */}
      <input type="checkbox" onChange={handleChange} checked={message.heard} />

      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Message;
