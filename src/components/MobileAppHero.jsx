import React from "react";
import "../styles/MobileAppHero.css";

const MobileAppHero = () => {
  return (
    <section className="_mobile-app-hero flex flex-col">
      {/* Background Video */}
      <div className="background absolute inset-0">
        <video
          className="_video-asset h-full w-full object-cover"
          src="/videos/3dapp-mobile.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </div>

      {/* Hero Text + CTA */}
      <div className="g-row relative color-white">
        <div className="g-col xxl-7 md-9 xs-16 flex flex-col gap-32-24">
          <h2 className="title-3 -medium">All your finances, in one app.</h2>
          <p className="subhead-2 -medium">Join 1M+ happy users today. </p>

          <div className="ctas flex gap-24">
            <a
              href="https://portal.jeton.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="_button no-tap-highlight"
              data-button=""
              data-label="true"
              data-tone="neutral"
              data-variant="primary"
            >
              <div data-button-background=""></div>
              <span className="label relative body -book col">Get Started</span>
            </a>
          </div>
        </div>
      </div>

      {/* App Store Buttons */}
      <div className="g-row-full flex gap-24">
        <a
          href="https://play.google.com/store/apps/details?id=com.jeton.app"
          target="_blank"
          rel="noopener noreferrer"
          className="_app-button"
          data-button=""
          data-tone="neutral"
          data-variant="outline"
          aria-label="go to mobile app"
        >
          <div data-button-background=""></div>
          <div className="outline absolute inset-0"></div>
          <img
            className="absolute inset-0"
            src="/images/app-button/google-play-neutral.svg"
            alt="Google Play Store"
          />
        </a>

        <a
          href="https://apps.apple.com/us/app/jeton/id6499320378"
          target="_blank"
          rel="noopener noreferrer"
          className="_app-button"
          data-button=""
          data-tone="neutral"
          data-variant="outline"
          aria-label="go to mobile app"
        >
          <div data-button-background=""></div>
          <div className="outline absolute inset-0"></div>
          <img
            className="absolute inset-0"
            src="/images/app-button/app-store-neutral.svg"
            alt="Apple App Store"
          />
        </a>
      </div>
    </section>
  );
};

export default MobileAppHero;
