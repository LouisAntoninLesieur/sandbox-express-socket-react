import HeaderButtonsZone from './HeaderButtonsZone';
import '../styles/header.css';

export default function Header() {

  return (
    <header>
      <h1 className='header-title'>.tellme</h1>
      <HeaderButtonsZone className='header-buttons-area' />
    </header>
  )

}