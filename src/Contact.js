import React from 'react'

const Contact = () => {
  return (
    <div>
            <section id="contact" className="contact section-padding">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2> Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Quo, sunt?</p>
              </div>
            </div>
          </div>

          <div className="row m-0">
            <div className="col-md-12 p-0 pt-0 pb-4">
              <form action="#" className="bg-light p-4 m-auto">
                <div className="row">

                  <div className="col-md-12">
                    <div className="mb-3">
                      <input type="text" className="form-control" requried placeholder="Your Name...." />
                    </div>
                  </div>
  
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input type="email" className="form-control" requried placeholder="Your Email...." />
                    </div>
                  </div>
  
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea rows="3" requried placeholder="What we can do for you..." className="form-control"></textarea>
                    </div>
                  </div>
  
                  <button className="btn btn-warning btn-lg bbtn-block mt-3">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
