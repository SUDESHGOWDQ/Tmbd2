import { Link } from 'react-router-dom';
import './index.css';
import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";

const SidePanel = () => {
  const { currentUser, logout } = useContext(MovieContext);

  const fallbackImage = '/src/assets/userFallback.webp';

  return (
    <div className="side-panel">
      <div className="user-profile">
        <img
          src="/path/to/avatar.png"
          onError={(e) => (e.target.src = fallbackImage)}
          alt="User Avatar"
          className="avatar"
        />
        {currentUser ? (
          <div className='Login-details'>
            <h3 className="user-name">{currentUser.username}</h3>
            <p className="user-role">Role: {currentUser.role}</p>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <h3 className="user-name">Guest</h3>
        )}
      </div>

      <div className="categories">
        <h4>Categories</h4>
        <ul>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <a href="#top-rated">Top Rated</a>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <a href="#now-playing">Now Playing</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;