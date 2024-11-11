# Documentation Commentée

## Introduction
Ce projet est une application de chat en temps réel construite avec React pour le front-end et Socket.IO pour la communication en temps réel. Nous utilisons également un contexte d'authentification pour gérer l'état de l'utilisateur.

**Ceci est un projet d'essai de la technologie Socket.IO ET de React.**

## Concepts Clés

## Hooks

Les hooks sont des fonctions spéciales de React qui permettent d'utiliser l'état et d'autres fonctionnalités de React sans écrire de classes. Les deux hooks les plus couramment utilisés sont `useState` et `useEffect`.

`useState`

`useState` est un hook qui permet d'ajouter l'état local à un composant fonctionnel. Il retourne une paire : la valeur de l'état actuel et une fonction qui permet de mettre à jour cette valeur.

```jsx
const [newMessage, setNewMessage] = useState('');
```

- `newMessage` : La valeur actuelle de l'état.
- `setNewMessage` : La fonction pour mettre à jour la valeur de `newMessage`.

`useEffect`

`useEffect` est un hook qui permet d'exécuter des effets secondaires dans les composants fonctionnels. Il prend une fonction comme argument, qui sera exécutée après chaque rendu du composant.

```jsx
  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  socket.on('message', handleMessage);

  return () => {
    socket.off('message', handleMessage);
  };
}, []);
```

- La fonction passée à `useEffect` est exécutée après chaque rendu.
- Le tableau vide `[]` en deuxième argument indique que l'effet ne doit être exécuté qu'une seule fois, après le premier rendu.
- La fonction retournée par `useEffect` est une fonction de nettoyage qui est exécutée lorsque le composant est démonté.

## Socket.IO

Socket.IO est une bibliothèque qui permet une communication en temps réel entre le client et le serveur. Dans ce projet, nous utilisons Socket.IO pour envoyer et recevoir des messages de chat.

### Connexion au serveur Socket.IO

```jsx
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

export default socket;
```

- `io` : Fonction pour initialiser une connexion Socket.IO.
- `socket` : Instance de la connexion Socket.IO.

### Écouter les messages

```jsx
useEffect(() => {
  const handleMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  socket.on('message', handleMessage);

  return () => {
    socket.off('message', handleMessage);
  };
}, []);
```

- `socket.on('message', handleMessage)` : Écoute les événements `message` et exécute `handleMessage` lorsqu'un message est reçu.
- `socket.off('message', handleMessage)` : Supprime l'écouteur d'événements lorsque le composant est démonté.

### Envoyer des messages

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  socket.emit('message', { author: username, authorId: userId, text: newMessage });
  setNewMessage('');
};
```

- `socket.emit('message', { ... })` : Envoie un événement `message` avec les données du message au serveur.

### Création du contexte

```jsx
import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    const storedUserId = localStorage.getItem('userId');
    if (storedToken && storedUsername && storedUserId) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
      setUserId(storedUserId);
    }
  }, []);

  const login = (token, username, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    setIsAuthenticated(true);
    setUsername(username);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    setIsAuthenticated(false);
    setUsername('');
    setUserId('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
```

- `AuthContext` : Contexte pour l'authentification.
- `AuthProvider` : Composant fournisseur qui enveloppe l'application et fournit l'état de l'authentification.

### Utilisation du contexte

```jsx
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

- `useAuth` : Hook personnalisé pour accéder au contexte d'authentification.

## Exemple Complet

### Form.jsx

```jsx
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
```

## Conclusion

En suivant cette documentation, vous devriez avoir une meilleure compréhension des concepts clés utilisés dans ce projet, y compris les hooks, Socket.IO, et le contexte d'authentification. N'hésitez pas à explorer davantage la documentation officielle de React et Socket.IO pour approfondir vos connaissances.