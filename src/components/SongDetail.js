import axios from "axios";
import { React, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

const SongDetail = (props) => {
  const state = props.location.state;
  const { artist, title } = state ? state : { undefined };

  const [lyrics, setLyrics] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (state) {
      const fetchData = async () => {
        try {
          setIsPending(true);
          const reqUrl = `https://api.lyrics.ovh/v1/${artist}/${title}`;
          const response = await axios.get(reqUrl);
          setLyrics(response.data.lyrics);
          setIsPending(false);
          setError(null);
        } catch (error) {
          setLyrics(null);
          setIsPending(false);
          setError(error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div>
      {!state && <Redirect to={"/"} />}
      <h1>
        {artist}'s {title} Lyrics
      </h1>
      {isPending && <p>Getting Lyrics ...</p>}
      {error && <p>{error}</p>}
      {lyrics && <p>{lyrics}</p>}
    </div>
  );
};

export default SongDetail;
