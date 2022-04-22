import React, { useState } from "react";
import { useNavigate } from "react-router";

const initialForm = {
  artist: "",
  song: "",
};
function SongForm({ handleSearch, url }) {
  const [form, setForm] = useState(initialForm);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.artist || !form.song) {
      alert("Datos incompletos");
    } else {
      const song = form.song.match(/\w+/g).join("-").toLowerCase() ?? "";
      const artist = form.artist.match(/\w+/g).join("-").toLowerCase() ?? "";
      const url = `/${song}&&${artist}`;
      handleSearch({ ...form, url });
      navigate(url);
      setForm(initialForm);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del intérprete"
          value={form.artist}
          onChange={handleChange}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          value={form.song}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SongForm;
