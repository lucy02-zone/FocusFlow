import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container home-container">
      <h1>Welcome to FocusFlow</h1>
      <p>Your ultimate productivity companion.</p>

      <div className="buttons">
        <Link to="/focus" className="btn"> Start Focus Session</Link>
        <Link to="/analytics" className="btn"> View Analytics</Link>
      </div>

      <div className="features">
        <div className="feature">
          <h3>Block Distractions</h3>
          <p>Stay focused by blocking distracting websites and apps automatically.</p>
        </div>
        <div className="feature">
          <h3>Timer & Progress</h3>
          <p>Track your focus sessions with a clean timer and visual progress bar.</p>
        </div>
        <div className="feature">
          <h3> Insights</h3>
          <p>Visualize your productivity stats over time and optimize your focus strategy.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
