import ImageGallery from "react-image-gallery";

const Gallery = () => {
  const images = [
    {
      original: "/static/img/gallery-1.jpg ",
      thumbnail: "/static/img/gallery-1.jpg ",
    },
    {
      original: "/static/img/gallery-2.jpg ",
      thumbnail: "/static/img/gallery-2.jpg ",
    },
    {
      original: "/static/img/gallery-3.jpg ",
      thumbnail: "/static/img/gallery-3.jpg ",
    },
    {
      original: "/static/img/gallery-4.jpg ",
      thumbnail: "/static/img/gallery-4.jpg ",
    },
    {
      original: "/static/img/gallery-5.jpg ",
      thumbnail: "/static/img/gallery-5.jpg ",
    },
    {
      original: "/static/img/gallery-6.png ",
      thumbnail: "/static/img/gallery-6.png ",
    },
    {
      original: "/static/img/gallery-7.png ",
      thumbnail: "/static/img/gallery-7.png ",
    },
    {
      original: "/static/img/gallery-8.png ",
      thumbnail: "/static/img/gallery-8.png ",
    },
    {
      original: "/static/img/gallery-9.png ",
      thumbnail: "/static/img/gallery-9.png ",
    },
    {
      original: "/static/img/gallery-10.png ",
      thumbnail: "/static/img/gallery-10.png ",
    },
  ];
  return (
    <div className="relative">
       <img
          data-aos="fade-up"
          src="/static/img/bookHorseLeft.png"
          className="absolute left-0 hidden xl:block "
          style={{ width: '200px', bottom: '10%', zIndex: -1 }}
        />
        <img
          data-aos="fade-up"
          src="/static/img/bookHorseRight.png"
          className="absolute right-0 hidden xl:block"
          style={{ width: '200px', top: '10%', zIndex: -1 }}
        />
    <div className="py-24 container mx-auto lg:px-32">
      {" "}
      <ImageGallery items={images} />
    </div>
    </div>
  );
};
export default Gallery;
