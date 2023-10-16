import React from 'react';
import Farm from "../../../src/assets/Images/Farm.jpg";
import Farm1 from "../../../src/assets/Images/Farm1.jpg";
import Farm2 from "../../../src/assets/Images/Farm2.jpg";
import Farming from "../../../src/assets/Images/Farming.jpg";
import '../header/Home.css';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="background-image">
            <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={Farm} alt="Farm" className="img-fluid" />
                </div>
                <div className="carousel-item">
                  <img src={Farm1} alt="Farming" className="img-fluid" />
                </div>
                <div className="carousel-item">
                <img src={Farm2} alt="Farming" className="img-fluid" />
              </div>
              <div className="carousel-item">
              <img src={Farming} alt="Farming" className="img-fluid" />
            </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;