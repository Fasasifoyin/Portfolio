import { useState } from "react";
import { Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const Project = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const { width } = useWindowSize();

  return (
    <div className="text-white mt-5 pb-5 " id="project">
      <Container>
        <div className="d-flex justify-content-center">
          <h3
            className="rounded-3 p-2 text-center fw-bold text-white"
            style={{ backgroundColor: "rgb(255, 5, 19)" }}
          >
            Projects
          </h3>
        </div>

        <div className="d-flex flex-column gap-5 mt-3 mt-lg-4">
          <div className="d-lg-flex justify-content-between">
            <div
              className="position-relative picturediv"
              style={{ height: "600px" }}
            >
              <Image
                className="w-100 h-100"
                src={
                  width >= 992
                    ? "https://euro-linux.com/wp-content/uploads/EuroLinux-Desktop-home-1.png"
                    : "https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307__480.png"
                }
              />

              <div
                className="position-absolute top-0 imgheight"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <Image
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src={
                    width >= 992
                      ? "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684151300/Languages/1B03F3F6-0899-4BDE-80DE-88B59489DF26_qpplds.webp"
                      : "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684174459/Languages/9E602D93-F9C5-4ADB-BD86-EBA32750E527_g8jirk.webp"
                  }
                />

                {show && (
                  <div
                    className="d-none d-lg-block position-absolute top-0 w-100 h-100"
                    style={{ background: "rgb(0, 158, 237, 0.7)" }}
                  >
                    <div className="w-100 h-100 d-flex flex-column gap-3 justify-content-center align-items-center">
                      <Link
                        to="https://foyindevflix.netlify.app"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className="border border-none"
                          style={{
                            backgroundColor: "rgb(255, 19, 5)",
                            width: "180px",
                          }}
                        >
                          Live Link
                        </Button>
                      </Link>
                      <Link
                        to="https://github.com/Fasasifoyin/movietrailers"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className="border border-none"
                          style={{
                            backgroundColor: "rgb(255, 19, 5)",
                            width: "180px",
                          }}
                        >
                          See code
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="picturediv mt-2 mt-lg-0 d-flex flex-column justify-content-center align-items-center">
              <h1 style={{ color: "rgb(0, 158, 237)" }}>TMDB MOVIES</h1>
              <p className="text-center knowme">
                TMDB MOVIES is movie website that shows trailers of trending
                movies and so many more. It also contain biography and many
                other things you need to know about your favorite celebrities
              </p>
              <div className="d-lg-none d-flex gap-3">
                <Link
                  to="https://foyindevflix.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className="border border-none"
                    style={{ backgroundColor: "rgb(255, 19, 5)" }}
                  >
                    Live Link
                  </Button>
                </Link>
                <Link
                  to="https://github.com/Fasasifoyin/movietrailers"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className="border border-none"
                    style={{ backgroundColor: "rgb(255, 19, 5)" }}
                  >
                    See code
                  </Button>
                </Link>
              </div>
            </div>
          </div>


          
          <div className="d-flex flex-column flex-lg-row flex-column-reverse justify-content-between">
            <div className="picturediv mt-2 mt-lg-0 d-flex flex-column justify-content-center align-items-center">
              <h1 style={{ color: "rgb(0, 158, 237)" }}>TOMFORD</h1>
              <p className="text-center knowme">
                TOMFORD project is a simple single webpage website that was done with just html and css
              </p>
              <div className="d-lg-none d-flex gap-3">
                <Link
                  to="https://yungdoc-tomfordp.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className="border border-none"
                    style={{ backgroundColor: "rgb(255, 19, 5)" }}
                  >
                    Live Link
                  </Button>
                </Link>
                <Link
                  to="https://github.com/Fasasifoyin/tomford"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className="border border-none"
                    style={{ backgroundColor: "rgb(255, 19, 5)" }}
                  >
                    See code
                  </Button>
                </Link>
              </div>
            </div>

            <div
              className="position-relative picturediv"
              style={{ height: "600px" }}
            >
              <Image
                className="w-100 h-100"
                style={{ objectFit: "fill" }}
                src={
                  width >= 992
                    ? "https://euro-linux.com/wp-content/uploads/EuroLinux-Desktop-home-1.png"
                    : "https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307__480.png"
                }
              />

              <div
                className=" position-absolute top-0 imgheight"
                onMouseEnter={() => setShow2(true)}
                onMouseLeave={() => setShow2(false)}
              >
                <Image
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  src={
                    width >= 992
                      ? "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684256597/Languages/D8D34C24-2477-4EDE-ACAC-E924AC6342BF_yb6xwi.jpg"
                      : "https://res.cloudinary.com/dbxvk3apv/image/upload/v1684256605/Languages/0714F530-4FEC-40A3-870F-FA3A88F34A5E_sdexwz.webp"
                  }
                />

                {show2 && (
                  <div
                    className="d-none d-lg-block position-absolute top-0 w-100 h-100"
                    style={{ background: "rgb(0, 158, 237, 0.7)" }}
                  >
                    <div className="w-100 h-100 d-flex flex-column gap-3 justify-content-center align-items-center">
                      <Link
                        to="https://yungdoc-tomfordp.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className="border border-none"
                          style={{
                            backgroundColor: "rgb(255, 19, 5)",
                            width: "180px",
                          }}
                        >
                          Live Link
                        </Button>
                      </Link>
                      <Link
                        to="https://github.com/Fasasifoyin/tomford"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className="border border-none"
                          style={{
                            backgroundColor: "rgb(255, 19, 5)",
                            width: "180px",
                          }}
                        >
                          See code
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
