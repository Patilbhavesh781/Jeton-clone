import React from "react";
import "../styles/JetonCardOverview.css";

const JetonCardOverview = () => {
  return (
    <section className="_jeton-card-overview my-180-64">
      {/* Top heading section */}
      <div className="g-row justify-center text-center">
        <div className="g-col xxl-8 md-10 sm-12 xs-16">
          <span className="_tag relative body-small inline-block" data-tone="orange">
            <div className="outline absolute inset-0"></div>
            Jeton Card
            <svg
              className="absolute w-full h-full top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              width="94.175"
              height="27.6"
              viewBox="0 0 94.175 27.6"
            >
              <rect x="0" y="0" width="100%" height="100%" rx="13.8"></rect>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="13.8"
                style={{ "--length": 219.29, "--p": 1 }}
              ></rect>
            </svg>
          </span>
          <h2 className="title-5 -medium mt-16 whitespace-pre-line">
            Contactless payments? Sure.
            {"\n"}Spending limits? Check.
            {"\n"}Card freezing? Also check.
          </h2>
        </div>
      </div>

      {/* Video section */}
      <div className="g-row justify-center my-96-48">
        <div className="g-col xxl-10 md-12 sm-14 xs-16">
          <video
            className="_video-asset media inset-0 block br-20-8 overflow-hidden"
            src="/videos/jeton-card-rip.mp4"
            type="video/mp4"
            width="1960"
            height="1240"
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"
            style={{
              transform: "translate(0%, 10%) rotate(0deg) scale(0.9, 0.9)",
            }}
          ></video>
        </div>
      </div>

      {/* Bottom content with CTA */}
      <div className="g-row justify-center text-center">
        <div className="g-col xxl-10 sm-12 xs-16 flex flex-col items-center gap-32-24 -medium">
          <h3 className="title-3">Jeton Card: Your Go-To for Every Purchase</h3>
          <p className="subhead-2 w-cols-6 md-w-cols-8 sm-w-cols-10 xs-w-cols-16"></p>
          <div className="flex justify-center gap-8">
            <a
              href="/jeton-card"
              className="_button no-tap-highlight"
              data-button=""
              data-label="true"
              data-tone="orange"
              data-variant="primary"
            >
              <div data-button-background=""></div>
              <span className="label relative body -book">
                <span data-split-text="" className="whitespace-nowrap">
                  <span className="c">L</span>
                  <span className="c">e</span>
                  <span className="c">a</span>
                  <span className="c">r</span>
                  <span className="c">n</span>
                  <span className="c -space"> </span>
                  <span className="c">m</span>
                  <span className="c">o</span>
                  <span className="c">r</span>
                  <span className="c">e</span>
                </span>
                
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JetonCardOverview;
