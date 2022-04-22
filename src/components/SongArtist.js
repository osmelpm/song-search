function SongArtist({ artist }) {
  //console.log(artist)
  return (
    <section>
      <h3>{`Intérprete: ${artist.strArtist}`}</h3>
      <img width="50%" src={artist.strArtistThumb} alt={artist.strArtist} />
      <p>{`Desde: ${artist.intBornYear} - ${
        artist.intDiedYear || 'Presente'
      }`}</p>
      <p>{`País: ${artist.strCountry}`}</p>
      <p>{`Género musical: ${artist.strGenre} - ${artist.strStyle}`}</p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Sitio Web Oficial
      </a>
      <p style={{ whiteSpace: 'pre-wrap' }}>{artist.strBiographyEN}</p>
    </section>
  )
}

export default SongArtist
