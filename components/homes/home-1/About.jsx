"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            <Image
              width={960}
              height={539}
              src="/assets/images/sneakers/about-image.jpg"
              className="image-fullwidth relative"
              alt="Logo Sneakers Restore"
            />
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <Image
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">Cum a pornit totul</h4>
        <p className="text-gray">
          De cand eram mic am fost fermecat de cultura streetwear și de încălțămintea din această sferă. Pasiunea pentru sneakers a fost unul din factorii motivaționali care a condus la crearea acestui brand. Pe lângă asta, îmi place să repar lucruri. Am combinat aceste elemente și s-a născut Sneaker Restore. Sunt foarte norocos că am avut sprijin material dar mai ales emoțional din partea acestor persoane foarte importante din viața mea. Ele au avut încredere în mine de la bun început pentru a putea înființa acest concept.
        </p>
        <h4 className="h5">Viziunea Sneaker Restore</h4>
        <p className="text-gray">
           

Fiecare pereche de încălțăminte beneficiază de atenție până la cel mai mic detaliu, fiindcă ceea ce fac nu este doar un business menit să aducă profit și atât. Cred foarte mult în ideea de sustenabilitate, de a nu renunța atât de ușor la articolele preferate din garderoba noastră. Într-o eră a consumerismului ajută-mă să diminuez acest cerc vicios. Oferă-mi oportunitatea să îți demonstrez că merită să apelezi la acest tip de servicii.
        </p>
      </div>
    </div>
  );
}
