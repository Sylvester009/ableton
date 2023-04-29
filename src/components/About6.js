function About6(props) {
  const col4Style = {
    display: "inline-flex",
    marginTop: "100px",
    marginBottom: "50px",
  };
  const colBg4 = {
    backgroundColor: "rgb(83, 58, 241, 0.4)",
    height: "569px",
  };
  const colBg4p = {
    textAlign: "left",
    padding: "120px 120px 40px 120px",
    fontSize: "25px",
    fontWeight: "bold",
    lineHeight: "1.5",
  };
  const colBg4p2 = {
    fontSize: "25px",
    fontWeight: "bold",
    paddingLeft: "120px",
    color: "#0000ff",
  };

  return (
    <div className="sixthpage">
      <div className="body-text">
        <h2>
          We want our employees to love it here. Since we are looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </h2>
        <p>
          If you are joining us in Berlin, we'll help with relocation and
          paperworks, we will even provide you with free German or English.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it's not all work; we
          have several company and team outings through out the year as well as
          variety of fun, informal small group activities.
        </p>
        <div class="collage4" style={col4Style}>
          <img src={props.p8} className="photo8" height={569} />
          <div class="collage-background4" style={colBg4}>
            <p style={colBg4p}>
              We're really proud of the work we have done so far. but there is
              so much more to come. If you'd like to be part of it, please join
              us.
            </p>

            <a href="" style={colBg4p2}>
              See latest jobs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About6;
