import React, {Component} from 'react';

class About extends Component {
    render(){
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-primary">About DailyNews</h1>
        <p className="lead">Your one-stop destination for trusted and trending news headlines.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-primary">Our Mission</h5>
              <p className="card-text">
                At DailyNews, we aim to keep you informed with the latest headlines from around the world.
                Whether it's business trends, tech innovations, or health updates — we’ve got you covered!
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-primary">Categories We Cover</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">📰 General</li>
                <li className="list-group-item">📈 Business</li>
                <li className="list-group-item">🎬 Entertainment</li>
                <li className="list-group-item">💊 Health</li>
                <li className="list-group-item">🔬 Science</li>
                <li className="list-group-item">🏏 Sports</li>
                <li className="list-group-item">💻 Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 className="text-muted">Stay Updated. Stay Informed. Stay Ahead.</h4>
        <p className="text-secondary">Powered by <strong className='text-primary'>NewsAPI</strong></p>
      </div>
    </div>
  );}
};

export default About;
