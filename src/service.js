import React from 'react'

const Service = () => {
  return (
    <div>
      <section id="services" className="services section-padding">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2> Our Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Nisi, consequatur!</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 g-md-3 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-subtract"></i>
                  <h3 className="card-title">Best Quality</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat exercitationem veniam modi deleniti dolores! Sequi exercitationem magni perspiciatis eveniet? Dolore vel explicabo facilis sed!</p>
                  <button className="btn btn-warning text-dark">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 g-md-3 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-slack"></i>
                  <h3 className="card-title">Integrity</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat exercitationem veniam modi deleniti dolores! Sequi exercitationem magni perspiciatis eveniet? Dolore vel explicabo facilis sed!</p>
                  <button className="btn btn-warning text-dark">Read More</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 g-md-3 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <i className="bi bi-playstation"></i>
                  <h3 className="card-title">Sustainblity</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat exercitationem veniam modi deleniti dolores! Sequi exercitationem magni perspiciatis eveniet? Dolore vel explicabo facilis sed!</p>
                  <button className="btn btn-warning text-dark">Read More</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Service
