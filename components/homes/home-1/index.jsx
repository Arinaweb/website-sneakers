import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";
import Pricing from "@/components/homes/home-1/Pricing2";
import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Link from "next/link";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import Pricing2 from "@/components/homes/home-1/Pricing2";
import Split from "./Split";
import Benefits2 from "./Benefits2";
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section scrollSpysection ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Sneaker Restore</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="Despre noi si misiunea noastra" />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              >
                <Image
                  width="103"
                  height="223"
                  src="/assets/images/decoration-2.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}

              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Lucrari Inainte si dupa {" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Lucrari Inainte si dupa {" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </a>
              ) : (
                <Link
                  href={`/main-pages-about-1${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  <span className="link-strong link-strong-unhovered">
                    Lucrari Inainte si dupa {" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Lucrari Inainte si dupa {" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              )}
            </div>
          </div>
          <About />
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
        }`}
        id="team"
      >
        <Team />
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section>
        <Features />
        <div style={{ paddingBottom: "40px" }} />
      
    
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${
          dark ? "bg-dark-1 light-content z-index-1" : ""
        }`}
      >
        <div className="container position-relative">
          {/* Decorative Waves */}
          <div
            className="decoration-3 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed="-0.7"
            data-rellax-percentage="0.5"
          >
            <Image
              width={148}
              height={148}
              className="svg-shape"
              src="/assets/images/decoration-3.svg"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
          <div className="row text-center wow fadeInUp">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
              <p className="section-descr mb-50 mb-sm-30">
                Incaltamintea ta merita o a doua sansa. Trimite-ne un mesaj si hai sa o readucem la viata.
              </p>
              <div className="local-scroll">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contacteaza-ne</span>
                  </a>
                ) : (
                  <Link
                    href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                    className="btn btn-mod btn-large btn-round btn-hover-anim"
                  >
                    <span>Contacteaza-ne</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Benefits />{" "}
      </section>
      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section>
      
      <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <div className="container position-relative">
          <div className="row">
            {/* Images */}
            <div className="col-lg-7 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div
                  className="call-action-2-image-1"
                  data-rellax-y=""
                  data-rellax-speed="0.5"
                  data-rellax-percentage="0.7"
                >
                  <Image
                    width={386}
                    height={400}
                    src="/assets/images/promo-3.jpg"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={255}
                  />
                </div>
                <div className="call-action-2-image-2">
                  <Image
                    width={810}
                    height={512}
                    src="/assets/images/promo-4.jpg"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                </div>
                <div
                  className="call-action-2-image-3"
                  data-rellax-y=""
                  data-rellax-speed="-0.5"
                  data-rellax-percentage="0.5"
                >
                  <Image
                    width={386}
                    height={500}
                    src="/assets/images/promo-5.jpg"
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={0}
                  />
                </div>
              </div>
            </div>
            {/* End Images */}
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-title mb-50 mb-sm-20">Procesul nostru de lucru</h2>
                <Faq />
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#contact"
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Cere o oferta personalizata</span>
                    </a>
                  ) : (
                    <Link
                      href={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Start a Project</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            {/* End Text */}
          </div>
        </div>
      </section>

      
      
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
