import "./App.css";

const photos = [
  "/images/1.jpg",
  //"/images/2.jpg",
  "/images/55.jpg",
  "/images/53.jpg",
  "/images/5.jpg",
  //"/images/6.jpg",
  //"/images/7.jpg",
  //"/images/8.jpg",
  "/images/9.jpg",
 // "/images/10.jpg",
  //"/images/11.jpg",
  //"/images/12.jpg",
  "/images/13.png",
  "/images/14.jpg",
  
  //"/images/17.jpg",
  //"/images/25.png",
  "/images/19.png",
  "/images/24.png",
  "/images/23.png",
  //"/images/30.jpg",
  //"/images/29.jpg",
  //"/images/27.jpg",
  "/images/48.png",
  "/images/31.jpg",
  "/images/32.png",
  "/images/54.jpg",
  "/images/34.png",
  //"/images/35.jpg",
  //"/images/36.jpg",
  
  "/images/58.png",
  //"/images/39.jpg",
 
  

  "/images/45.png",
  "/images/46.jpg",
  "/images/47.jpg",
  "/images/37.jpg",
  "/images/40.jpg",
  "/images/42.jpg",
  "/images/51.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/33.png",
  "/images/50.jpg",
  "/images/49.jpg",
  "/images/52.jpg",
  "/images/43.jpg",
  "/images/21.jpg",
  "/images/41.jpg",
  "/images/20.jpg",
  "/images/44.jpg",
  "/images/56.jpg",
  "/images/57.jpg",
  "/images/38.png",

  


];

export default function WeddingPortfolio() {
  return (
    <div className="portfolio">

      <header className="header">
  <div className="header-left">
    <span className="logo">JAGAN</span>
  </div>

 
</header>


      {/* HERO SECTION */}
      <section className="hero">
  <video
    className="hero-video"
    src="/videos/HeroVideo.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="hero-content">
    <h1>CLIXION PHOTOGRAPHY</h1>
    <button>View Gallery</button>
  </div>
</section>


      {/* GALLERY SECTION */}
      <section className="gallery">
        {photos.map((src, index) => (
          <img key={index} src={src} alt="Wedding moment" />
        ))}
      </section>

      <footer className="footer">
  <div className="footer-content">
    <p>
      <strong>Clixion Photography</strong>
    </p>

    <p>
      <a href="mailto:clixionphotography@gmail.com">
        clixionphotography@gmail.com
      </a>
    </p>

    <p>
      <a href="tel:+918667542701">
        +91 86675 42701
      </a>
    </p>

    <p>
      <a
        href="https://instagram.com/jag_raphy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram · @jag_raphy
      </a>
    </p>
  </div>

  <div className="footer-bottom">
    © {new Date().getFullYear()} Clixion Photography · All Rights Reserved
  </div>
</footer>


    </div>
  );
}
