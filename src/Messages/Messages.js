function Message(props) {
  return (
    <>
      <p>
        {props.message.author}: {props.message.content}
      </p>
    </>
  );
}

export default Message;
