// src/components/HeroIntro.jsx
import { motion } from "framer-motion";
import "../styles/HeroIntro.css";

export default function HeroIntro() {
  return (
    <section className="_common-header" data-layout="full">
      <div className="g-row main-row color-white relative">
        {/* Left column - Title */}
        <div className="g-col xxl-8 md-9 sm-12 xs-16 flex flex-col justify-end">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="title-2 -medium"
          >
            <span data-split-text data-clip="chars">
              One app for all needs.
            </span>
          </motion.h1>
        </div>

        {/* Right column - Subhead + Buttons */}
        <div className="g-col xxl-4 xxl-offset-3 md-6 md-offset-1 sm-8 sm-offset-0 xs-16 flex flex-col justify-end mb-12">
          <p className="subhead-2 -medium">
            Single account for all your payments.
          </p>

          <div className="flex flex-wrap gap-24 mt-32">
            {/* App Store */}
            <a
              href="https://apps.apple.com/us/app/jeton/id6499320378"
              target="_blank"
              rel="noreferrer"
              className="_app-button"
              data-button
              data-tone="neutral"
              data-variant="outline"
              aria-label="go to App Store"
            >
              <div data-button-background=""></div>
              <div className="outline absolute inset-0"></div>
              <img
                className="absolute inset-0"
                src="../images/app-button/app-store-neutral.svg"
                alt="App Store"
              />
            </a>

            {/* Google Play */}
            <a
              href="https://play.google.com/store/apps/details?id=com.jeton.app"
              target="_blank"
              rel="noreferrer"
              className="_app-button"
              data-button
              data-tone="neutral"
              data-variant="outline"
              aria-label="go to Google Play"
            >
              <div data-button-background=""></div>
              <div className="outline absolute inset-0"></div>
              <img
                className="absolute inset-0"
                src="../images/app-button/google-play-neutral.svg"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
