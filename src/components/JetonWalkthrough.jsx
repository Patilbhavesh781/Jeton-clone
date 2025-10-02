import React from "react";
import "../styles/JetonWalkthrough.css";

const JetonWalkthrough = () => {
  return (
    <section className="_jeton-walkthrough w-full background-orange">
      <div className="absolute inset-0 grid place-center overflow-hidden">
        <div className="rives relative grid place-center">
          <canvas
            id="nhUKueFFVLQ-8"
            className="_rive-asset"
            width="493"
            height="493"
            style={{ opacity: 0 }}
          ></canvas>
          <canvas
            id="nhUKueFFVLQ-9"
            className="_rive-asset"
            width="493"
            height="493"
            style={{ opacity: 0 }}
          ></canvas>
          <canvas
            id="nhUKueFFVLQ-10"
            className="_rive-asset"
            width="493"
            height="493"
            style={{ opacity: 0 }}
          ></canvas>
          <canvas
            id="nhUKueFFVLQ-11"
            className="_rive-asset"
            width="493"
            height="493"
            style={{ opacity: 0 }}
          ></canvas>
          <canvas
            id="nhUKueFFVLQ-12"
            className="_rive-asset"
            width="493"
            height="493"
            style={{ opacity: 1 }}
          ></canvas>
        </div>
      </div>

      {/* Step 1 */}
      <article data-step="1" style={{ opacity: 1 }}>
        <div className="heading title-3 xs-title-5 text-center">
          <p>All currencies</p>
        </div>
        <div className="heading title-3 xs-title-5 text-center">
          <p>One App</p>
        </div>
        <div className="feature" data-position="left">
          <div className="divider"></div>
          <p className="title subhead-1 xs-subhead-2 mb-8">
            Move your money across Europe
          </p>
          <p className="text body">Send money anywhere in the EU, effortlessly.</p>
        </div>
      </article>

      {/* Step 2 */}
      <article data-step="2" style={{ opacity: 1 }}>
        <div className="feature" data-position="right">
          <div className="divider"></div>
          <p className="title subhead-1 xs-subhead-2 mb-8">
            Add or send in a few taps
          </p>
          <p className="text body">
            Easily add or send money from your account.
          </p>
        </div>
      </article>

      {/* Step 3 */}
      <article data-step="3" style={{ opacity: 1 }}>
        <div className="feature" data-position="left">
          <div className="divider"></div>
          <p className="title subhead-1 xs-subhead-2 mb-8">
            50+ payment methods across Europe
          </p>
          <p className="text body">
            Jeton is seamlessly connected with more than 25 countries, and 50
            payment methods.
          </p>
        </div>
      </article>

      {/* Step 4 */}
      <article data-step="4" style={{ opacity: 1 }}>
        <div className="feature" data-position="right">
          <div className="divider"></div>
          <p className="title subhead-1 xs-subhead-2 mb-8">
            Fast and safe transactions
          </p>
          <p className="text body">
            Fast and safe transactions at your fingertips.
          </p>
        </div>
      </article>

      {/* Step 5 */}
      <article data-step="5" style={{ opacity: 1 }}>
        <div className="subheading title-5 xs-subhead-1" data-position="left">
          <p className="grow">Simple</p>
        </div>
        <div className="subheading title-5 xs-subhead-1" data-position="right">
          <p className="grow">fast &amp; safe</p>
        </div>
        <div className="subheading title-5 xs-subhead-1" data-position="center">
          <p className="grow">Simple, fast &amp; safe</p>
        </div>
      </article>

      {/* Stepper */}
      <div className="stepper">
        <ul className="_stepper body-small flex gap-16 color-white">
          <li>
            <button className="shrink-0" data-active="false">
              <div className="flex items-baseline">
                <div className="index -book flex place-center">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12"></circle>
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <span>01</span>
                </div>
                <div className="label -medium">
                  <div className="pl-8">Account</div>
                </div>
              </div>
            </button>
          </li>

          <li>
            <button className="shrink-0" data-active="false">
              <div className="flex items-baseline">
                <div className="index -book flex place-center">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12"></circle>
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <span>02</span>
                </div>
                <div className="label -medium">
                  <div className="pl-8">Add</div>
                </div>
              </div>
            </button>
          </li>

          <li>
            <button className="shrink-0" data-active="false">
              <div className="flex items-baseline">
                <div className="index -book flex place-center">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12"></circle>
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <span>03</span>
                </div>
                <div className="label -medium">
                  <div className="pl-8">Method</div>
                </div>
              </div>
            </button>
          </li>

          <li>
            <button className="shrink-0" data-active="false">
              <div className="flex items-baseline">
                <div className="index -book flex place-center">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12"></circle>
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <span>04</span>
                </div>
                <div className="label -medium">
                  <div className="pl-8">Review</div>
                </div>
              </div>
            </button>
          </li>

          <li>
            <button className="shrink-0" data-active="true">
              <div className="flex items-baseline">
                <div className="index -book flex place-center">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12"></circle>
                    <circle cx="12" cy="12" r="12"></circle>
                  </svg>
                  <span>05</span>
                </div>
                <div className="label -medium">
                  <div className="pl-8">Done</div>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </div>

      {/* Restart Button */}
      <div className="restart">
        <button className="_button no-tap-highlight" data-variant="outline">
          <span className="_icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.28085 20C3.55044 17.6628 1.95516 12.8313 3.71779 8.5957C5.65948 3.92859 10.9411 1.7511 15.5155 3.73214C20.0899 5.71318 22.2241 11.1028 20.2824 15.7699C19.5554 17.5246 18.309 19.0036 16.7175 20"
                strokeWidth="1.5"
                strokeLinecap="square"
                strokeLinejoin="round"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 19.9968L16.5 14.5L15 14.5L15 19.2453C15 20.4905 16.0074 21.5 17.25 21.5H22L22 19.9968H16.5Z"
              ></path>
            </svg>
          </span>
          <span className="label relative body -book">Restart</span>
        </button>
      </div>
    </section>
  );
};

export default JetonWalkthrough;
