import { useEffect, useState, useContext } from 'react';
import MessageItem from './MessageItem';
import '../styles/Form.css';
import socket from '../utils/socket';
import AuthContext from '../context/AuthContext';

export default function Form() {
  const { username, userId } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on('message', handleMessage);

    return () => {
      socket.off('message', handleMessage);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    socket.emit('message', { author: username, authorId: userId, text: newMessage });
    setNewMessage('');
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit} className="form">
        <ul className="messages-list">
          {messages.map((message, index) => (
            <MessageItem key={index} sender={message.author} text={message.text} />
          ))}
        </ul>
        <div className="form-input-area">
          <textarea
            className='text-area'
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            placeholder="Enter your message"
          />
          <button className='form-button'>Send</button>
        </div>
      </form>
    </div>
  );
}