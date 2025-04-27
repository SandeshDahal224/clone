import { FilledUser } from "../../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Typography } from "../../styles/StyledComponent";
import { Fade } from "react-reveal";
const bestSuite = [
  {
    id: 1,
    avatar: require("../../assets/other/dev.png"),
    author: "Dev Raj Bhattarai",
    position: "React Developer",
    quotes:
      "An excellent student management software with easy implementation and simple interface. My overall experience with Dynamic Academic ERP is very smooth and easy.",
  },
  {
    id: 2,
    avatar: require("../../assets/other/suresh.png"),
    author: "Suresh Paudel",
    position: "FullStack Developer",
    quotes:
      "Using Dynamic Academic ERP system for our institute was scary at first but with a friendly training & support team and easy user interface, it became easy to implement.",
  },
  {
    id: 3,
    avatar: require("../../assets/other/shushant.png"),
    author: "Shushant Ghimire",
    position: "UX/UI Designer",
    quotes:
      "Its very easy to use and very smooth functioning . All modules are covered which are required for academic management. Customer support is superb.",
  },
  {
    id: 4,
    avatar: require("../../assets/other/anil.png"),
    author: "Anil Thapa",
    position: "Android Developer",
    quotes:
      "The team has been much supportive, enabling us to streamline our process and making it efficient at the same time. Their product is feature-rich and robust and it is working well to our benefit. I wish them all the best.",
  },
];

const videoTestmonial = [
  {
    id  : 0,
    embeed : <iframe width="100%" height="250px" style={{ borderRadius: "12px", overflow: "hidden" }} src="https://www.youtube.com/embed/4ud6JlpXOWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    id  : 1,
    embeed : <iframe width="100%" height="250px" style={{ borderRadius: "12px", overflow: "hidden" }} src="https://www.youtube.com/embed/HLOAhYO6OTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
  {
    id  : 2,
    embeed : <iframe width="100%" height="250px" style={{ borderRadius: "12px", overflow: "hidden" }} src="https://www.youtube.com/embed/v7e5iCsHPfc?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  },
]

export const Testomonials = () => {
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
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1324: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {videoTestmonial.map((user, i) => {
          return (
            <SwiperSlide key={user.id}>
              <Fade left dalay={i * 50}>
                {/* <div
                  className="p-4 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    minHeight: "390px",
                    minWidth: "290px",
                    background:
                      "linear-gradient(133.29deg, #097A57 1.02%, #73BF43 115.96%)",
                    borderRadius: "0px 50px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "110px",
                      height: "110px",
                      border: "2px solid #fff",
                      background: "#F6F6F6",
                      overflow: "hidden",
                    }}
                  >
                    {user.avatar !== "" && user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.author}
                        width="100%"
                        height="100%" style={{borderRadius : '8px' }}
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <FilledUser />
                    )}
                  </div>
                  <Typography className="text-center mt-2" color="#fff">
                    {user.quotes}
                  </Typography>
                  <div className=" mt-2">
                    <Typography
                      className="text-center mt-2"
                      fontWeight="600"
                      fontSize="18px"
                      color="#fff"
                    >
                      {user.author}
                    </Typography>
                    <Typography className="text-center" color="#fff">
                      {user.position}
                    </Typography>
                  </div>
                </div> */}
                <div
                  className="p-2 d-flex flex-column justify-content-center align-items-center">
                  {user.embeed}
                </div>
              </Fade>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
