import React from 'react'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="project-1-img/home-1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>Your Dream House</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat est, deserunt aut hic iure?</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="project-1-img/home-2.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>Always Dedicated</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat est, deserunt aut hic iure?</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="project-1-img/home-3.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>True Construction</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quaerat est, deserunt aut hic iure?</p>
              <p><a href="#" className="btn btn-warning mt-3">Learn More</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
