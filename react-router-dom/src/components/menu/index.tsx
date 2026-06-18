import './style.css'
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div>
      <nav className='menu'>
        <ul>
          <li>
            <Link to='/'>Home</ Link>
          </li>
          
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}