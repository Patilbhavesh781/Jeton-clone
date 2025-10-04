import React from "react";
import "../styles/CurrencyExchange.css";

const CurrencyExchange = () => {
  return (
    <section className="_currency-exchange-calculator flex flex-col items-center color-orange no-select">
      <canvas width="1901" height="1394" className="absolute inset-0"></canvas>

      {/* Header */}
      <div className="w-cols-10 xs-w-cols-14 mb-96-48 flex flex-col items-center pointer-events-none">
        <span className="_tag relative body-small inline-block" data-tone="orange">
          <div className="outline absolute inset-0" style={{ display: "none" }}></div>
          Exchange
          <svg
            className="absolute w-full h-full top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            width="85"
            height="28"
            viewBox="0 0 85.075 27.6"
            style={{ display: "block" }}
          >
            <rect x="0" y="0" width="100%" height="100%" rx="14"></rect>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              rx="14"
              style={{ "--length": 201.1, "--p": 1 }}
            ></rect>
          </svg>
        </span>

        <h2 className="title-3 xs-title-4 -medium mt-16 whitespace-pre-line">
          Convert fiat cash easily.
        </h2>

        <div className="relative mt-24 w-cols-4 md-w-cols-6 sm-w-cols-8 xs-w-cols-12 caption -book text-center">
          <p className="opacity-50">
            *The displayed conversion rates and fees may vary during the currency exchange
            process, and the rates shown were last updated at 05:29 on 05.10.2025.
          </p>
        </div>
      </div>

      {/* Converter */}
      <div className="converter-container w-cols-4 md-w-cols-6 sm-w-cols-7 xs-w-cols-12">
        <div className="_currency-converter flex flex-col gap-8">
          {/* From Currency */}
          <div className="_currency-card">
            <div className="_dropdown _currency-select" role="button">
              <button className="flex items-center justify-between gap-32 br-16">
                <div className="background absolute inset-0 br-inherit"></div>
                <div className="label relative flex gap-8 items-center">
                  <img
                    className="currency-icon"
                    src="icons/currencies/EUR.svg"
                    alt="EUR"
                  />
                  <span className="body -book uppercase">EUR</span>
                </div>
                <span className="_icon chevron br-full">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 13.9393L6.53033 8.46967L5.46967 9.53033L10.409 14.4697C11.2877 15.3483 12.7123 15.3484 13.591 14.4697L18.5303 9.53033L17.4697 8.46967L12 13.9393Z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="slot subhead-2 -medium color-orange-900">
              <div className="input-container relative flex gap-4 items-center">
                <div className="whitespace-nowrap">€</div>
                <input
                  defaultValue="10"
                  type="number"
                  min="0"
                  max="100000"
                  placeholder="100"
                  className="grow"
                />
                <span className="input-focus absolute" aria-hidden="true"></span>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <button className="swap-btn mx-auto" aria-label="swap button">
            <span className="_icon">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.25 14.7502H18.9395L15.4456 19.1173L16.6169 20.0544L20.1107 15.6873C20.8965 14.7051 20.1973 13.2502 18.9395 13.2502L4.25 13.2502V14.7502Z"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.75 9.2502H5.06047L8.55418 4.88307L7.38288 3.94602L3.88917 8.31316C3.10345 9.2953 3.80271 10.7502 5.06047 10.7502L19.75 10.7502V9.2502Z"
                ></path>
              </svg>
            </span>
          </button>

          {/* To Currency */}
          <div className="_currency-card">
            <div className="_dropdown _currency-select" role="button">
              <button className="flex items-center justify-between gap-32 br-16">
                <div className="background absolute inset-0 br-inherit"></div>
                <div className="label relative flex gap-8 items-center">
                  <img
                    className="currency-icon"
                    src="icons/currencies/GBP.svg"
                    alt="GBP"
                  />
                  <span className="body -book uppercase">GBP</span>
                </div>
                <span className="_icon chevron br-full">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 13.9393L6.53033 8.46967L5.46967 9.53033L10.409 14.4697C11.2877 15.3483 12.7123 15.3484 13.591 14.4697L18.5303 9.53033L17.4697 8.46967L12 13.9393Z"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="slot subhead-2 -medium color-orange-900">
              <div className="flex gap-4 items-center">
                <span>£</span>
                <span>8,72</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-120-64"></div>
    </section>
  );
};

export default CurrencyExchange;
