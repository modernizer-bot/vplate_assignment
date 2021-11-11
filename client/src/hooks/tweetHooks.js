import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function tweetHooks() {
  const connect = () => {
    const socket = io('http://localhost:5000');
    return new Promise((resolve) => {
      socket.on('connect', () => {
        resolve(socket);
      });
    });
  };

  useEffect(async () => {
    const socket = await connect();
    socket.emit('test');
    socket.emit('stream.init', { keyword: 'giveaway' });
    console.log(socket);
    socket.on('tweet.new', (data) => {
      console.log(data);
    });
  }, []);
  return null;
}
