import SongForm from "../components/SongForm";
import { SongTable } from "../components/SongTable";
import Loader from "../components/Loader";

export const Home = ({ handleSearch, loading, url, mySongs, setMySongs }) => {
  return (
    <div>
      <SongForm handleSearch={handleSearch} url={url} />
      {loading && <Loader />}
      <SongTable mySongs={mySongs} setMySongs={setMySongs} />
    </div>
  );
};
