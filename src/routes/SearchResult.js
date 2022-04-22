import SongDetail from "../components/SongDetail";

export const SearchResult = ({
  search,
  loading,
  lyric,
  bio,
  setMySongs,
  mySongs,
}) => {
  const handleSaveButton = () => {
    const favorite = {
      search,
      bio,
      lyric,
    };
    setMySongs((mySongs) => [...mySongs, favorite]);
    alert("La cancion ha sido agregada a favoritos");
  };

  return (
    <>
      {search && !loading && (
        <>
          <div className="favoritos">
            <button onClick={handleSaveButton}>Agregar canción</button>
          </div>
          <section className="grid-1-2">
            <SongDetail search={search} lyric={lyric} bio={bio} />
          </section>
        </>
      )}
    </>
  );
};
