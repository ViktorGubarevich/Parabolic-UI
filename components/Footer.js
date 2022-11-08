import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-4 pb-11 bg-[#212b38] flex items-center justify-between text-lg text-gray-700 max-xl:mx-4">
      <div className="w-full m-auto xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px]">
        <div className="flex justify-between pt-5 pb-6">
          <Link href="/">
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="m-3"
              src="/parabolic-logo.png"
              width={235}
              height={84}
              alt="Parabolic Logo"
            />
          </Link>
          <div className="hidden w-full md:flex md:items-center md:w-auto">
            <ul className="pt-4 text-base text-white md:flex md:justify-between md:pt-0 space-x-2">
              <li>
                <Link
                  href="https://www.facebook.com/TradeSmithTM"
                  className="pr-4 block"
                  target="_blank"
                >
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <svg
                    id="network"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 408.788 408.788"
                  >
                    <path
                      fill="#ffb80b"
                      d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
	h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
	v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
	l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
	c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
	C408.786,24.662,384.124,0,353.701,0z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/TradeSmith_TM"
                  className="pr-4 block"
                  target="_blank"
                >
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <svg
                    id="network"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 512.002 512.002"
                  >
                    <path
                      fill="#ffb80b"
                      d="M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193
	c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764
	c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201
	c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075
	c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568
	c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468
	c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638
	c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665
	c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736
	c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451
	c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906
	C507.7,94.204,503.76,93.294,500.398,94.784z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/tradesmith"
                  target="_blank"
                >
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <svg
                    id="network"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 382 382"
                  >
                    <path
                      fill="#ffb80b"
                      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="pb-4">
            <p className="text-white text-lg font-semibold leading-none">
              To talk to a Customer Service representative:
            </p>
            <p className="text-white text-lg leading-none">
              Toll free:{" "}
              <Link
                href="tel:(866) 385-2076"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
              >
                (866) 385-2076
              </Link>{" "}
              | Local:{" "}
              <Link
                href="tel:(352)-593-2267"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
              >
                (352)-593-2267
              </Link>
            </p>
            <p className="text-white text-lg leading-none">
              Hours: Monday - Friday 9 am - 5 pm (Eastern)
            </p>
            <p className="leading-none">
              <Link
                href="mailto:support@tradesmith.com"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
              >
                support@tradesmith.com
              </Link>
            </p>
          </div>
          <div className="pb-4">
            <p className="text-white text-lg font-semibold text-right leading-none">
              To talk to a Sales representative:
            </p>
            <p className="text-white text-lg text-right leading-none">
              Toll free:{" "}
              <Link
                href="tel:(866) 220-1107"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
              >
                (866) 220-1107
              </Link>{" "}
            </p>
            <p className="text-white text-lg pb-4 text-right leading-none">
              Hours: Monday - Friday 9 am - 6 pm (Eastern)
            </p>
            <p className="text-white text-lg text-right leading-none">
              © 2022 TradeSmith. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <ul>
            <li>
              <Link
                href="https://tradesmith.com/tradesmith-privacy-policy/"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
                target="_blank"
              >
                Privacy Policy |
              </Link>{" "}
              <Link
                href="https://tradesmith.com/terms-of-service/"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
                target="_blank"
              >
                Terms of Use |
              </Link>{" "}
              <Link
                href="https://tradesmith.com/tradesmith-privacy-policy/#adchoice"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
                target="_blank"
              >
                Ad Choices |
              </Link>{" "}
              <Link
                href="https://beaconstreet-privacy.my.onetrust.com/webform/c246f198-7123-4766-b29c-917342eff0f7/27b6313f-c0de-427c-b720-3623acacb14f"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
                target="_blank"
              >
                Do Not Sell My Personal Information |
              </Link>{" "}
              <Link
                href="#"
                className="text-[#007bff] hover:text-[#0056b3] hover:underline"
                target="_blank"
              >
                Cookie Preferences
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
