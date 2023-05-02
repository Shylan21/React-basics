import { useState } from "react";
// If we call useState, it'll the return value will be an array with two values:
// the current state and a function to update it.
import Message from "../Messages/Messages";

const initialMessage = [
  {
    content: "No', says Tom Kennedy",
    author: "Tom K",
  },
  {
    content: "Good Morning, Good Afternnon, Good Evening, Good Night",
    author: "Hamza Ak",
  },
];

// Given I type text in the input field
// When click on button
// Should see the text display in the list

// Probably need eventListener for the submit event
// Function to run when it triggers
// When it does => UPDATE STATE!
function MessageBoard() {
  const [messages, setMessages] = useState(initialMessage);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Event", event); //.target is getting the form
    const newMessage = event.target[0].value;
    // messages.push(newMessages) => no, no, no, no. Don't mutate old states.

    // COPY THE ARRAY
    // const newMessages = messages.map((message) => message);
    // newMessages.push(newMessage); // yes, yes, yes. Mutate new states.
    // setMessages(newMessages);
    // Shorter way
    // const newMessages = [...messages, newMessage];
    // console.log(newMessages);
    // setMessages(newMessages);
    setMessages([...messages, newMessage]);
  };
  return (
    <>
     
      <form onSubmit={handleSubmit}>
        <label>
          What's your fave saying?
          <input type="text" />
        </label>
        <button>Share</button>
      </form>
      {/* div */}
      {
        // Using .map or forEach the first argument is always the one we know.
        messages.map((messageObj, index) => (
          <Message key={index} message={messageObj} />
        ))
      }
      {/* </div> */}
    </>
  );
}

export default MessageBoard;
