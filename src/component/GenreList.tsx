import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = useGenre();

  return (
    <ul>
      {genre.map((g) => (
        <li>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
