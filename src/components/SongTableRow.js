import { useNavigate } from "react-router";

function SongTableRow({ song, id, mySongs, setMySongs }) {
  const { bio, search } = song;
  const [artists] = bio.artists;
  const { song: songTitle } = search;

  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/canciones/${id}`);
  };

  const handleDelete = () => {
    const isConfirm = window.confirm(`¿Desea eliminar la canción?`);
    if (isConfirm) {
      const newSongs = mySongs.filter((song) => song !== mySongs[id]);
      setMySongs(newSongs);
      localStorage.setItem("mySongs", JSON.stringify(newSongs));
    }
  };

  return (
    <tr>
      <td>
        <img
          style={{ width: 40, height: 40 }}
          src={artists.strArtistThumb}
          alt="Imagen del artista"
        />
      </td>
      <td>{artists.strArtist}</td>
      <td>{songTitle}</td>
      <td>
        <button onClick={handleView}>Ver</button>
        <button onClick={handleDelete}>Eliminar</button>
      </td>
    </tr>
  );
}

export default SongTableRow;
