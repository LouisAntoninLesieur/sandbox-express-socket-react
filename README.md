# .tellme

Welcome to **.tellme**!

This repo goes with **two main folders** :
- back
- front

NB : Do not install dependencies **without being placed into back or front.**

## 🇬🇧 Project Description & Initialization
<details>
<summary>Details</summary>

**.tellme** is a real-time chat application built with React for the front-end and Socket.IO for real-time communication. The project also uses an authentication context to manage the user's state. This project aims to demonstrate the use of Socket.IO and React to create an interactive and responsive chat application.

### Key Features

- **Real-time Chat**: Users can send and receive messages instantly.
- **Authentication**: Manage user state with an authentication context.
- **React Hooks**: Use `useState` and `useEffect` hooks to manage state and side effects in functional components. Create a custom hook `useAuth`.
- **CORS Support**: Configure CORS to allow cross-origin requests.

### Technologies Used

- **React**: To build the user interface.
- **Socket.IO**: For real-time communication between the client and the server.
- **Express**: To create the backend server.
- **Node.js**: Runtime environment for the backend server.

### Project Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/tellme.git
    ```
2. Install backend dependencies:
    ```bash
    cd tellme
    cd back
    npm install
    ```
3. Initialize .env:
    ```bash
    cp .env.example .env
    touch .env
    ```
4. Set up the local database (depending on your computer (in my case, Mac)):
    ```sql
    psql postgres
    CREATE USER <your_user> WITH LOGIN PASSWORD '<your_password>';
    CREATE DATABASE <database_name> OWNER <your_user>;
    ```
5. Configure .env:
    ```bash
    BASE_URL=http://localhost:
    PORT=3000
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=<your_user>
    DB_PASSWORD=<your_password>
    DB_DATABASE=<database_name>
    DB_URL=postgresql://<your_user>:<your_password>@localhost:5432/<database_name>
    DB_DIALECT=postgres
    JWT_SECRET=<your_secret>
    ```
6. Initialize the database:
    ```bash
    npm run db:reset
    ```
7. Start the server:
    ```bash
    npm run dev
    ```
8. Install front-end dependencies:
    ```bash
    cd ..
    cd front/
    pnpm i
    ```
9. Start the front-end:
    ```bash
    pnpm run dev
    ```

### Usage

1. Open your browser and go to `http://localhost:5173` to use the chat application.
2. Log in or sign up to start chatting in real-time.

### Contribution

Contributions are welcome! Please submit a pull request or open an issue to discuss the changes you want to make.

### License

This project is licensed under the ISC License.
</details>



## 🇫🇷 Description du Projet & Initialisation

<details>
<summary>Détails</summary>

**.tellme** est une application de chat en temps réel construite avec React pour le front-end et Socket.IO pour la communication en temps réel. Le projet utilise également un contexte d'authentification pour gérer l'état de l'utilisateur. Ce projet a pour but de démontrer l'utilisation de Socket.IO et de React pour créer une application de chat interactive et réactive.

### Fonctionnalités Principales

- **Chat en temps réel** : Les utilisateurs peuvent envoyer et recevoir des messages instantanément.
- **Authentification** : Gestion de l'état de l'utilisateur avec un contexte d'authentification.
- **Hooks React** : Utilisation des hooks `useState` et `useEffect` pour gérer l'état et les effets secondaires dans les composants fonctionnels. Création d'un custom hook `useAuth`.
- **Support CORS** : Configuration CORS pour permettre les requêtes cross-origin.

### Technologies Utilisées

- **React** : Pour construire l'interface utilisateur.
- **Socket.IO** : Pour la communication en temps réel entre le client et le serveur.
- **Express** : Pour créer le serveur backend.
- **Node.js** : Environnement d'exécution pour le serveur backend.

### Installation du projet

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/tellme.git
    ```
2. Installez les dépendances côté back :
    ```bash
    cd tellme
    cd back
    npm install
    ```
3. Initialisez .env :
    ```bash
    cp .env.example .env
    touch .env
    ```
4. Configurez la BDD en local (en fonction de votre ordinateur (dans mon cas, Mac)) :
    ```sql
    psql postgres
    CREATE USER <votre_user> WITH LOGIN PASSWORD '<votre_mot_de_passe>';
    CREATE DATABASE <nom_de_la_base> OWNER <votre_user>;
    ```
5. Configurez .env :
    ```bash
    BASE_URL=http://localhost:
    PORT=3000
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=<votre_user>
    DB_PASSWORD=<votre_mot_de_passe>
    DB_DATABASE=<nom_de_la_base>
    DB_URL=postgresql://<votre_user>:<votre_mot_de_passe>@localhost:5432/<nom_de_la_base>
    DB_DIALECT=postgres
    JWT_SECRET=<votre_secret>
    ```
6. Initialiser la base de données :
    ```bash
    npm run db:reset
    ```
7. Démarrez le serveur :
    ```bash
    npm run dev
    ```
8. Installez les dépendances côté front :
    ```bash
    cd ..
    cd front/
    pnpm i
    ````
9. Démarrez le front :
    ```bash
    pnpm run dev
    ```

### Utilisation

1. Ouvrez votre navigateur et accédez à `http://localhost:5173` pour utiliser l'application de chat.
2. Connectez-vous ou inscrivez-vous pour commencer à chatter en temps réel.

### Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

### Licence

Ce projet est sous licence ISC.
</details>

## Personnal reminder

<details>
<summary>Course reminder 🇫🇷</summary>

## Introduction
Ce projet est une application de chat en temps réel construite avec React pour le front-end et Socket.IO pour la communication en temps réel. Nous utilisons également un contexte d'authentification pour gérer l'état de l'utilisateur.

**Ceci est un projet d'essai de la technologie Socket.IO ET de React.**

**Ce projet constitue un chat entre plusieurs utilisateurs connectés**

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