import { Arrow } from "../../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { SubTitle, Typography } from "../../styles/StyledComponent";
import { useState } from "react";
import { bestSuite } from "../data/bestSuited";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-reveal";

export const BestSuites = () => {
  const navigateTo = useNavigate();
  const [background, setBackground] = useState(1);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination]}
      >
        {bestSuite.map((bs, i) => {
          return (
            <SwiperSlide key={bs.id}>
              <Fade left delay={i * 50}>
                <div
                  className="p-3 d-flex flex-column justify-content-between align-items-center"
                  style={{
                    minHeight: "294px",
                    minWidth: "265px",
                    background:
                      background === bs.id
                        ? "linear-gradient(131.58deg, #097A57 -1.47%, #73BF43 97.29%)"
                        : "#ECEEED",
                    borderRadius: "0px 50px",
                  }}
                  onMouseEnter={() => setBackground(bs.id)}
                >
                  {bs.svg(background === bs.id)}
                  <div>
                    <SubTitle
                      fontWeight="700"
                      className="text-center mt-2"
                      color={background === bs.id ? "#fff" : "#097A57"}
                    >
                      {bs.title}
                    </SubTitle>
                    <Typography
                      className=" mt-2"
                      color={background === bs.id ? "#fff" : "#000"}
                    >
                      {bs.description}
                    </Typography>
                  </div>

                  <Typography
                    className="text-center mt-2"
                    fontWeight="600"
                    color={background === bs.id ? "#fff" : "#097A57"}
                    onClick={() => {
                      navigateTo("/dynamic-academic-erp-best-suited-for");
                      window.scrollTo(0, 0);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {"Read More"}
                    <Arrow color={background === bs.id ? "#fff" : "#097A57"} />
                  </Typography>
                </div>
              </Fade>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
