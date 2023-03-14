import {Client, TrackHandler, PlaylistHandler} from 'spotify-sdk';
import * as dotenv from 'dotenv'
dotenv.config()

let client = Client.instance;

client.settings = {
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    secretId: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
    // Need to see where to add these variables to deploy
    redirect_uri: 'REDIRECT_URL This is where it lands after auth'
};