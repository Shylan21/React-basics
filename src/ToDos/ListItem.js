function ListItem({ missions, handleDelete }) {
  return (
    <>
      <span> {missions} </span>
      <button onClick={() => handleDelete(missions)}>Delete</button>
    </>
  );
}

export default ListItem;
