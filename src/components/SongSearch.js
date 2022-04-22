import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import { helperHttp } from "../helpers/helpHttp";
import { Home } from "../routes/Home";
import { SongPage } from "../routes/SongPage";
import { SearchResult } from "../routes/SearchResult";

const mySongsInit = JSON.parse(localStorage.getItem("mySongs")) ?? [];

function SongSearch() {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      setLoading(true);
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const [artistRes, songRest] = await Promise.all([
        helperHttp().get(artistUrl),
        helperHttp().get(songUrl),
      ]);

      setBio(artistRes);
      setLyric(songRest);
      setLoading(false);
    };
    fetchData();
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <header>
        <h2>Song Search</h2>
        <Link to="/">Home</Link>
      </header>
      <article>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                handleSearch={handleSearch}
                loading={loading}
                mySongs={mySongs}
                setMySongs={setMySongs}
              />
            }
          />
          <Route
            path={search?.url || ""}
            element={
              <SearchResult
                search={search}
                loading={loading}
                lyric={lyric}
                bio={bio}
                setMySongs={setMySongs}
                mySongs={mySongs}
              />
            }
          />
          <Route
            path="/canciones/:id"
            element={<SongPage mySongs={mySongs} />}
          />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </article>
    </div>
  );
}

export default SongSearch;
