import '../styles/Form.css';

export default function MessageItem({ sender, text }) {
  return (
    <li className="message-item">
      <p className="message-text">{sender} says: {text}</p>
    </li>
  );
}