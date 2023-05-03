// What's the state we need

const heardStyles = {
  textDecoration: "line-through",
  color: "green",
};
function Message({ message, handleDelete }) {
  const handleClick = () => {
    handleDelete(message);
  };
  // The syntax ? : is a shorter version of the if statement
  // {message.author === "Tom K" && <span>🔥</span>} => anothere way of writing an if statement
  return (
    <div>
      <span style={message.heard ? heardStyles : {}}>
        {message.author}: {message.content}
      </span>
      {message.author === "Tom K" && <span>🔥</span>}
      {message.author === "Hamza Ak" ? <span>🔥</span> : <span>🌊</span>}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Message;
