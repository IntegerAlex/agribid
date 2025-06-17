import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const blogPosts = [
  {
    id: 1,
    img: "/assets/images/blog/blog-v1-img1.jpg",
    date: "July 30, 2021",
    author: "Jessica",
    comments: "2 Comments",
    title: "Why Eco and Walking or Agriculture for the Environment?",
    link: "news-details.html",
  },
  {
    id: 2,
    img: "/assets/images/blog/blog-v1-img2.jpg",
    date: "July 30, 2021",
    author: "Jessica",
    comments: "2 Comments",
    title: "Leverage agile frameworks to provide a robust synopsis",
    link: "news-details.html",
  },
  {
    id: 3,
    img: "/assets/images/blog/blog-v1-img3.jpg",
    date: "July 30, 2021",
    author: "Jessica",
    comments: "2 Comments",
    title: "Bring to the table win-win survival strategies to ensure",
    link: "news-details.html",
  },
];

const BlogSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:flex-row">
        {/* Left Panel */}
        <div className="lg:w-1/3">
          <div className="mb-6">
            <img src="/agribid.png" alt="Icon" className="h-8" />
          </div>
          <p
            className="mb-2 text-sm font-semibold uppercase"
            style={{ color: "#f1cf69" }}
          >
            From the blog
          </p>
          <h2
            className="mb-6 text-4xl leading-tight font-bold"
            style={{
              color: "#334b35",
              fontFamily: "'Averia Sans Libre', cursive",
            }}
          >
            Latest News &<br />
            Articles
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#687469", fontFamily: "'DM Sans', sans-serif" }}
          >
            We are committed to providing our customers with exceptional service
            while offering our employees the best training.
          </p>

          {/* Nav Buttons */}
          <div className="mt-10 flex gap-4">
            <button
              ref={prevRef}
              className="h-14 w-14 rounded-full border bg-white text-2xl shadow transition hover:bg-[#f1cf69] hover:text-[#334b35]"
              style={{ color: "#334b35", borderColor: "#687469" }}
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="h-14 w-14 rounded-full border bg-white text-2xl shadow transition hover:bg-[#f1cf69] hover:text-[#334b35]"
              style={{ color: "#334b35", borderColor: "#687469" }}
            >
              →
            </button>
          </div>
        </div>

        {/* Right Panel (Swiper) */}
        <div className="lg:w-2/3">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div
                  className="overflow-hidden rounded-lg border bg-white shadow-lg transition hover:shadow-xl"
                  style={{ borderColor: "#6d8c54" }}
                >
                  <div className="relative">
                    <img
                      src={post.img}
                      alt="Blog"
                      className="h-64 w-full object-cover"
                    />
                    <div
                      className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold shadow"
                      style={{
                        backgroundColor: "#f1cf69",
                        color: "#334b35",
                      }}
                    >
                      {post.date}
                    </div>
                    <div className="bg-opacity-0 hover:bg-opacity-30 absolute inset-0 flex items-center justify-center bg-black transition">
                      <a
                        href={post.link}
                        className="text-3xl font-bold text-white opacity-0 transition-opacity hover:opacity-100"
                      >
                        +
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <ul
                      className="mb-2 flex gap-4 text-sm"
                      style={{ color: "#687469" }}
                    >
                      <li className="flex items-center gap-1">
                        <i className="far fa-user-circle"></i> {post.author}
                      </li>
                      <li className="flex items-center gap-1">
                        <i className="far fa-comments"></i> {post.comments}
                      </li>
                    </ul>
                    <h3
                      className="text-xl font-semibold transition"
                      style={{
                        color: "#334b35",
                        fontFamily: "'Averia Sans Libre', cursive",
                      }}
                    >
                      <a href={post.link} className="hover:text-[#f1cf69]">
                        {post.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
