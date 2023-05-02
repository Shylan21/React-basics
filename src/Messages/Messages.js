// What's the state we need
function Message({ message, handleDelete }) {
  const handleClick = () => {
    handleDelete(message);
  };
  return (
    <div>
      <span>
        {message.author}: {message.content}
      </span>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Message;
