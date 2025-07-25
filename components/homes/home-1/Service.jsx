import AnimatedText from "@/components/common/AnimatedText";
import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-lg-6 mb-md-60 mb-sm-30">
          <h2 className="section-caption mb-xs-10">Serviciile Noastre</h2>
          <h3 className="section-title mb-30">
            <AnimatedText text="Solutii pentru toate problemele" />
          </h3>
          <div className="row">
            <div className="col-lg-10">
              <p
                className="section-descr mb-50 mb-sm-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Anii de experienta isi spun cuvantul in fiecare lucrare pe care o facem. Acoperim o gama larga de servicii pentru cei mai pretentiosi clienti.
              </p>
            </div>
          </div>
          <ul
            className="nav nav-tabs services-tabs wow fadeInUp"
            data-wow-delay="0.55s"
            role="tablist"
          >
            <li role="presentation">
              <a
                href="#services-item-1"
                className="active"
                aria-controls="services-item-1"
                role="tab"
                aria-selected="true"
                data-bs-toggle="tab"
              >
                Curatare completa <span className="number">01</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-2"
                aria-controls="services-item-2"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Albire talpi <span className="number">02</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-3"
                aria-controls="services-item-3"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Reparare interior <span className="number">03</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-4"
                aria-controls="services-item-4"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Revopsire <span className="number">04</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-5"
                aria-controls="services-item-5"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Reparatii rupturi <span className="number">05</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-6"
                aria-controls="services-item-6"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Reparatii perne aer <span className="number">06</span>
              </a>
            </li>
            <li role="presentation">
              <a
                href="#services-item-7"
                aria-controls="services-item-6"
                role="tab"
                aria-selected="false"
                data-bs-toggle="tab"
              >
                Schimbat parti <span className="number">07</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 d-flex wow fadeInLeft"
          data-wow-delay="0.55s"
          data-wow-offset={275}
        >
          <div className="tab-content services-content">
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item show fade active"
              id="services-item-1"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Curatare completa</h4>
                  <p className="text-gray mb-0">
                    Curatarea completa readuce prospetimea sneakerșilor tai printr-un 
                    proces detaliat de igienizare, curatare a talpilor, 
                    materialelor si interiorului,
                    fara a compromite structura originala.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-1.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-2"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Albire talpi</h4>
                  <p className="text-gray mb-0">
                    Albirea talpilor elimina ingalbenirea si murdaria acumulata, 
                    redand aspectul curat si fresh al sneakerșilor si al pantofilor, 
                    fara a afecta materialul original.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-2.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-3"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Reparare Interior</h4>
                  <p className="text-gray mb-0">
                    Inlocuim sau refacem captuseala uzata pentru un interior curat
                     si confortabil, folosind materiale rezistente si 
                     finisaje de calitate.

                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-3.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-4"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Revopsire</h4>
                  <p className="text-gray mb-0">
                    Restaurarea culorii readuce nuanta originala a pantofilor, 
                    acoperind decolorarile si uzura cu vopsele profesionale 
                    si aplicare controlata.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-4.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-5"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Reparatii Rupturi</h4>
                  <p className="text-gray mb-0">
                    Facem tot posibilul sa iti readucem la viata perechea de 
                    incaltaminte folosind tehnici dobandite in ani de experienta
                    si prin numeroase teste si incercari.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-5.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-6"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Reparatii perne aer</h4>
                  <p className="text-gray mb-0">
                    Daca ai ramas in pana, nu iti face griji, noi avem solutia. Umplerea cu silicon este unica tehnica de a salva perechea ta de sneakers.
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-6.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              className="tab-pane services-content-item fade"
              id="services-item-7"
              role="tabpanel"
            >
              <div className="services-text">
                <div className="services-text-container">
                  <h4 className="services-title">Schimbat parti</h4>
                  <p className="text-gray mb-0">
                    Schimbam aproape orice element pentru a te ajuta sa obtii din nou o pereche de incaltaminte 100% purtabila
                  </p>
                </div>
              </div>
              <Image
                width={945}
                height={1016}
                className="services-image"
                src="/assets/images/services/service-7.jpg"
                alt="Image Description"
              />
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
