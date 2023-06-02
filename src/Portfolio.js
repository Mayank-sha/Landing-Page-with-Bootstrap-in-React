import React from 'react'

const Portfolio = () => {
  return (
    <div>
        <section id="portfolio" className="portfolio section-padding">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2> Our Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur <br/>adipisicing elit. Nisi, consequatur!</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-12 g-md-3 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src='./project-1-img/project-1.jpg' alt="" className="img-fluid" />
                  </div>
                  <h3 className="card-title">Building In Toronto</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore laborum impedit recusandae? Repudiandae odio similique eveniet officia id. Veniam.</p>
                  <button className="btn btn-warning text-dark">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 g-md-3 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src="./project-1-img/project-2.jpg" alt="" className="img-fluid" />
                  </div>
                  <h3 className="card-title">Empire State</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore laborum impedit recusandae? Repudiandae odio similique eveniet officia id. Veniam.</p>
                  <button className="btn btn-warning text-dark">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 g-md-3 col-lg-4">
              <div className="card text-center bg-white pb-2">
                <div className="card-body text-dark">
                  <div className="img-area mb-4">
                    <img src="project-1-img/project-3.jpg" alt="" className="img-fluid" />
                  </div>
                  <h3 className="card-title">Sulekha Infinium</h3>
                  <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore laborum impedit recusandae? Repudiandae odio similique eveniet officia id. Veniam.</p>
                  <button className="btn btn-warning text-dark">Learn More</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
