import Message from "../components/Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

function SongDetail({ search, lyric, bio }) {
  if (!lyric || !bio) return null;
  return (
    <>
      {lyric.error ||
      lyric.name === "AbortError" ||
      lyric.err ||
      !lyric.lyrics ? (
        <Message
          msg={`Error: no existe la canción "${search.song}"`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el intérprete "${search.artist}"`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
}

export default SongDetail;
