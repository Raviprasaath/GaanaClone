// api.js

import axios from 'axios';

const BASE_URL = 'https://academics.newtonschool.co/api/v1/music';
const PROJECT_ID = 'ghmumg9x1zid';
const DEFAULT_LIMIT = 100;

export const fetchSongs = async (filter, limit) => {
  const headers = {
    'Content-Type': 'application/json',
    projectId: PROJECT_ID,
  };

  const response = await axios.get(`${BASE_URL}/song?filter=${filter}&limit=${limit}`, {
    headers,
  });

  return response.data.data;
};

export const fetchAllSongs = async (limit = 100) => {
  const headers = {
    'Content-Type': 'application/json',
    projectId: PROJECT_ID,
  };

  const response = await axios.get(`${BASE_URL}/song?&limit=${limit}`, {
    headers,
  });
  return response.data.data;
};

export const fetchArtists = async (limit = 200) => {
  const headers = {
    'Content-Type': 'application/json',
    projectId: PROJECT_ID,
  };

  const response = await axios.get(`${BASE_URL}/artist?limit=${limit}`, {
    headers,
  });

  return response.data.data;
};


export const fetchAlbum = async (limit) => {
  const headers = {
    'Content-Type': 'application/json',
    projectId: PROJECT_ID,
  };
  const response = await axios.get(`${BASE_URL}/album?limit=${limit}`, {
    headers,
  });

  return response.data.data;
}



export const fetchDataByType = async (type) => {
  switch (type) {
    case 'Trending songs':
      return fetchSongs('{"featured":"Trending songs"}', DEFAULT_LIMIT);
    case 'Soul soother':
      return fetchSongs('{"featured":"Soul soother"}', DEFAULT_LIMIT);
    case 'Evergreen melodies':
      return fetchSongs('{"featured":"Evergreen melodies"}', DEFAULT_LIMIT);
    case 'Top 20 of this week':
      return fetchSongs('{"featured":"Top 20 of this week"}', DEFAULT_LIMIT);
    case 'happy':
      return fetchSongs('{"mood":"happy"}', DEFAULT_LIMIT);
    case 'romantic':
      return fetchSongs('{"mood":"romantic"}', DEFAULT_LIMIT);
    case 'sad':
      return fetchSongs('{"mood":"sad"}', DEFAULT_LIMIT);
    case 'excited':
      return fetchSongs('{"mood":"excited"}', DEFAULT_LIMIT);
    case 'artists':
      return fetchArtists(DEFAULT_LIMIT);
    default:
      throw new Error(`Invalid type: ${type}`);
  }
};
