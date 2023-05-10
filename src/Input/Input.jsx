// REQUIREMENTS
// Show all repositories for me on the page
// Show input field where I can type an user's github username
// When I hit the button, i wanna see their repositories on the page.

// Click repo e navigate to /user/repo-name and show information about the repo
// Able to navigate back to the home page and getting back the list of repos of the user


import { useEffect, useState } from "react";

const initialFormData = {
  github: "Shylan21",
};

function Input() {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("Shylan21");
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json()) // read the response format which is stored in JSON
      .then((data) => setRepos(data));
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(formData.github);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, github: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="github"
          onChange={handleChange}
          value={formData.github}
        />
        <button>Get repos!</button>
      </form>
      {repos.map((repo) => (
        <div>{repo.name}</div>
      ))}
    </>
  );
}

export default Input;
