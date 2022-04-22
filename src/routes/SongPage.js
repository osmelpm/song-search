import { useParams } from "react-router";
import SongDetail from "../components/SongDetail";

export const SongPage = ({ mySongs }) => {
  const { id } = useParams();
  const { search, bio, lyric } = mySongs[id];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Página de la canción</h2>
      <div className="grid-1-2">
        <SongDetail search={search} bio={bio} lyric={lyric} />
      </div>
    </div>
  );
};
