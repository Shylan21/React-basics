import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Repo() {
  const [repo, setRepo] = useState({});
  const [notFound, setNotFound] = useState(false);

  const params = useParams();
  console.log("param", params);

  useEffect(() => {
    fetch(`https://api.github.com/repos/${params.username}/${params.reponame}`)
      .then((res) => res.json()) // read the response format which is stored in JSON
      .then((data) => {
        if (data.message === "Not Found") {
          setNotFound(true);
        } else {
          setNotFound(false);
          setRepo(data);
        }
      });
  }, []);

  return (
    <>
      {notFound ? (
        <div>
          repo '{params.reponame}' of user '{params.username}' does not exist
        </div>
      ) : (
        <div>
          <ul>
            <li>Name: {repo.name}</li>
            <li>Visibility: {repo.visibility}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Repo;
