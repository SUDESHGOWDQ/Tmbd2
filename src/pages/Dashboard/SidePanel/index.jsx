import {Link} from 'react-router-dom'
import './index.css';

const SidePanel = () => {


  const fallbackImage = '/src/assets/userFallback.webp';

  return (
    <div className="side-panel">
      <div className="user-profile">
        <img src="/path/to/avatar.png" onError={(e) => e.target.src = fallbackImage} alt="User Avatar" className="avatar" />
        <h3 className="user-name">SUDESH GOWDA</h3>
      </div>

      <div className="categories">
        <h4>Categories</h4>
        <ul>
          <li><Link to="/trending">Trending</Link></li>
          <li><a href="#top-rated">Top Rated</a></li>
          <li><Link to="/upcoming">Upcoming</Link></li>
          <li><a href="#now-playing">Now Playing</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;