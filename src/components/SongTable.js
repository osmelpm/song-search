import SongTableRow from "./SongTableRow";

export const SongTable = ({ mySongs, setMySongs }) => {
  return (
    <div>
      <h3>Mis canciones favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2" style={{ textAlign: "center" }}>
              Artista
            </th>
            <th>Canción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs?.length > 0 ? (
            mySongs.map((song, index) => (
              <SongTableRow
                key={index}
                song={song}
                id={index}
                mySongs={mySongs}
                setMySongs={setMySongs}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin canciones favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
