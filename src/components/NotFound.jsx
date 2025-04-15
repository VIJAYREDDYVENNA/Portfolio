import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [count, setCount] = useState(10);
  
  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    return () => clearInterval(timer);
  }, [count]);
  
  useEffect(() => {
    if (count === 0) {
      window.location.href = '/';
    }
  }, [count]);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <div className="mb-4">
          <h1 className="display-1 fw-bold text-primary">4<span className="text-danger">0</span>4</h1>
          <div className="position-relative d-inline-block">
            <i className="bi bi-emoji-dizzy display-1 text-warning"></i>
            <i className="bi bi-question-circle position-absolute top-0 end-0 fs-1 text-info animate-pulse"></i>
          </div>
        </div>
        
        <h2 className="fs-1 mb-4">Oops! Page Not Found</h2>
        
        <div className="mb-4">
          <p className="lead">
            The page you're looking for seems to have wandered off...
          </p>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <div className="p-3 bg-light border rounded shadow-sm">
              <i className="bi bi-compass fs-1 text-primary"></i>
              <p>Lost in space</p>
            </div>
            <div className="p-3 bg-light border rounded shadow-sm">
              <i className="bi bi-map fs-1 text-success"></i>
              <p>Off the map</p>
            </div>
            <div className="p-3 bg-light border rounded shadow-sm">
              <i className="bi bi-signpost-split fs-1 text-danger"></i>
              <p>Wrong turn</p>
            </div>
          </div>
        </div>
        
        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          <Link to="/" className="btn btn-primary btn-lg px-4">
            <i className="bi bi-house-door me-2"></i>
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-outline-secondary btn-lg px-4">
            <i className="bi bi-arrow-left me-2"></i>
            Go Back
          </button>
        </div>
        
        <div className="mt-4 text-muted">
          <p>Redirecting to home in <span className="fw-bold text-primary">{count}</span> seconds</p>
          <div className="progress" style={{ height: '5px' }}>
            <div 
              className="progress-bar bg-primary" 
              role="progressbar" 
              style={{ width: `${(count/10)*100}%` }}
              aria-valuenow={count} 
              aria-valuemin="0" 
              aria-valuemax="10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;