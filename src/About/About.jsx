import "./About.css";

export default function About() {
  return (
    <div className="container-fluid home-about pt-5">
      <div
        className="container mx-auto bg-white shadow px-4 px-lg-5 rounded"
        data-aos="fade-up"
      >
        <h1 className="pt-5 pb-4 text-uppercase text-center">
          <div className="about-priscilla">
            <span className="text-thin">About Attorney</span> Priscilla C. Tran
          </div>
        </h1>
        <div className="row pb-4">
          <div className="about-photo col-sm-5 col-md-5 col-lg-4 d-flex align-items-center">
            <img
              className="w-100 rounded shadow"
              src="/assets/headshots/priscilla_1_edit.jpg"
              alt="Attorney Priscilla C. Tran"
            />
          </div>
          <div className="col-sm-7 col-md-7 col-lg-8 d-flex align-items-center">
            <p className="about-text m-0 mt-4 mt-lg-0">
              <b>Attorney Priscilla C. Tran</b> lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Enim nulla aliquet porttitor lacus.
              Eleifend mi in nulla posuere sollicitudin aliquam ultrices
              sagittis. Viverra nam libero justo laoreet sit amet cursus. Proin
              nibh nisl condimentum id venenatis a condimentum. Massa tincidunt
              dui ut ornare. Lorem donec massa sapien faucibus et molestie ac
              feugiat sed. Duis tristique sollicitudin nibh sit. Semper risus in
              hendrerit gravida rutrum quisque non. Commodo quis imperdiet massa
              tincidunt nunc pulvinar. Sed ullamcorper morbi tincidunt ornare
              massa. Tempus quam pellentesque nec nam aliquam sem et. Posuere
              urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
              Malesuada pellentesque elit eget gravida cum sociis natoque
              penatibus. Donec pretium vulputate sapien nec sagittis aliquam
              malesuada. A lacus vestibulum sed arcu non odio euismod lacinia
              at. In vitae turpis massa sed elementum. Malesuada pellentesque
              elit eget gravida cum sociis. Risus viverra adipiscing at in
              tellus. Lobortis elementum nibh tellus molestie nunc non blandit.
              Massa tincidunt dui ut ornare. Lorem donec massa sapien faucibus
              et molestie ac feugiat sed. Duis tristique sollicitudin nibh sit.
              Semper risus in hendrerit gravida rutrum quisque non. Commodo quis
              imperdiet massa tincidunt nunc pulvinar. Sed ullamcorper morbi
              tincidunt ornare massa. Lorem donec massa sapien faucibus et
              molestie ac feugiat sed. Duis tristique sollicitudin nibh sit.
              Semper risus in hendrerit gravida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
