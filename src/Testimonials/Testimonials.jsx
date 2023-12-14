import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="container-fluid bg-black pb-5">
      <div className="container d-flex flex-column" data-aos="fade-up">
        <div className="row">
          <h1 className="mt-4 py-5 text-uppercase text-white text-thin">
            Client Testimonials
          </h1>
        </div>
        <div className="row mb-5">
          <div className="col-lg-4">
            <div className="card me-lg-4 gold-plate floating text-white">
              <div className="card-body text-center p-4">
                <img
                  className="w-50"
                  src="/assets/stars-gold.png"
                  alt="Stars"
                />
                <p className="card-text card-text-desktop pt-4 pb-2">
                  &quot;Semper risus in hendrerit gravida rutrum quisque non.
                  Commodo quis imperdiet massa tincidunt nunc pulvinar. Sed
                  ullamcorper morbi tincidunt ornare massa. Tempus quam
                  pellentesque nec nam aliquam sem et.&quot;
                </p>
                <h5 className="col-7 col-md-4 col-lg-8 btn-shadow bg-black rounded-pill p-2 mx-auto txt-shadow fs-4 text-uppercase">
                  Priscilla C.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mt-5 mt-lg-0 mx-lg-2 gold-plate floating text-white">
              <div className="card-body text-center p-4">
                <img
                  className="w-50"
                  src="/assets/stars-gold.png"
                  alt="Stars"
                />
                <p className="card-text card-text-desktop pt-4 pb-2">
                  &quot;Semper risus in hendrerit gravida rutrum quisque non.
                  Commodo quis imperdiet massa tincidunt nunc pulvinar. Sed
                  ullamcorper morbi tincidunt ornare massa. Tempus quam
                  pellentesque nec nam aliquam sem et.&quot;
                </p>
                <h5 className="col-7 col-md-4 col-lg-8 btn-shadow bg-black rounded-pill p-2 mx-auto txt-shadow fs-4 text-uppercase">
                  Priscilla C.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mt-5 mt-lg-0 ms-lg-4 gold-plate floating text-white">
              <div className="card-body text-center p-4">
                <img
                  className="w-50"
                  src="/assets/stars-gold.png"
                  alt="Stars"
                />
                <p className="card-text card-text-desktop pt-4 pb-2">
                  &quot;Semper risus in hendrerit gravida rutrum quisque non.
                  Commodo quis imperdiet massa tincidunt nunc pulvinar. Sed
                  ullamcorper morbi tincidunt ornare massa. Tempus quam
                  pellentesque nec nam aliquam sem et.&quot;
                </p>
                <h5 className="col-7 col-md-4 col-lg-8 btn-shadow bg-black rounded-pill p-2 mx-auto txt-shadow fs-4 text-uppercase">
                  Priscilla C.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
