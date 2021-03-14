import { React, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const SongList = (props) => {
  const state = props.location.state;
  const artist = state ? state.reqTerm : null;

  const [songs, setSongs] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (state) {
      const fetchData = async () => {
        try {
          setIsPending(true);
          const response = await axios.get(
            `https://api.lyrics.ovh/suggest/${artist}`
          );
          setSongs(response.data.data);
          setIsPending(false);
          setError(null);
        } catch (error) {
          setError(error);
          setSongs(null);
          setIsPending(false);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <>
      {!state && <Redirect to={"/"} />}
      <div>
        <h1>Song List for {artist}</h1>
      </div>
      {isPending && <p>Getting Songs ...</p>}
      {error && <p>{error}</p>}
      {songs &&
        songs.map((song) => {
          return (
            <p key={uuidv4()}>
              <Link
                to={{
                  pathname: "/lyrics",
                  state: {
                    artist: song.artist.name,
                    title: song.title,
                  },
                }}
              >
                {song.title}
              </Link>
            </p>
          );
        })}
    </>
  );
};

export default SongList;
