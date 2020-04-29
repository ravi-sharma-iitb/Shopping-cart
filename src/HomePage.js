import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <nav className="navigation">
        <div className="menu-bar">
          <div className="_1170px-container">
            <a
              href="https://www.test/"
              aria-current="page"
              className="logo-link w-inline-block w--current"
            >
              <img
                src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2eb3c0d4edc_Fast-LogoBlack.svg")}
                alt=""
              />
            </a>
            <div className="desktop-nav">
              <a href="https://www.test/sellers" className="custom-nav-links">
                Merchant Benefits
              </a>
              <div className="career-link">
                <div className="div-block-2">
                  <a
                    href="https://www.test/careers"
                    className="custom-nav-links"
                  >
                    User Benefits
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="menu-btn-login-btn">
                <a
                  href="https://theclosecompany.com/login"
                  target="_self"
                  className="button nav-button w-button"
                >
                  Close Login
                </a>

                <div
                  data-w-id="13c4f68c-6818-07a8-f880-65db00a98c4f"
                  className="menuicons"
                >
                  <img
                    src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c27d0f0d4ef5_Hamburger Menu.svg")}
                    alt=""
                    className="hamburger"
                  />
                  <img
                    src="./Fast _ 1-click checkout and login_files/5e349c95d8d0c2416c0d4ef3_Hamburger Menu Close.svg"
                    alt=""
                    className="closed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed-navbar-offset" />
        <div
          className="mobilenav"
          style={{
            transform:
              "translate3d(0px, -102vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        >
          <div>
            <div className="mobile-menu-cta-btn-wrapper">
              <a
                id="activatecheckout-mm"
                href="https://theclosecompany.com/signup"
                className="button cta-button w-button"
              >
                Close Signup
              </a>
            </div>
            <a href="https://www.test/sellers" className="custom-nav-links">
              Merchant Benefits
            </a>
            <div className="mm-link-wrapper" />
            <a className="mm-link-wrapper w-inline-block">
              <div className="career-link">
                <div className="div-block-2">
                  <div className="custom-nav-links mm-career-widthoverride">
                    User Benefits
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="mobile-menu-social-icons">
            <a
              href="https://twitter.com/fast"
              target="_blank"
              className="mobile-menu-link-block w-inline-block"
            >
              <img
                src="./Fast _ 1-click checkout and login_files/5e349c95d8d0c2b7bc0d4edd_Twitter-Black.svg"
                alt=""
                style={{ display: "none !important" }}
              />
            </a>
            <a
              href="https://www.instagram.com/passwordless/"
              target="_blank"
              className="mobile-menu-link-block w-inline-block"
            >
              <img
                src="./Fast _ 1-click checkout and login_files/5e349c95d8d0c2216a0d4f0d_Insta-black.svg"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/fast/"
              target="_blank"
              className="mobile-menu-link-block w-inline-block"
            >
              <img
                src="./Fast _ 1-click checkout and login_files/5e349c95d8d0c242890d4f0c_LinkedIn-Black.svg"
                alt=""
                style={{ display: "none !important" }}
              />
            </a>
          </div>
        </div>
      </nav>
      <div
        style={{
          backgroundColor: "#FF5A5F",
          marginTop: "5px",
          color: "white",
          width: "100%",
          textAlign: "center",
          padding: "5px"
        }}
      >
        <a
          style={{ color: "white", textDecoration: "none" }}
          href="http://shop.letsdooit.com/"
        >
          Go To Merchant Site For Demo
        </a>
      </div>
      <div className="hero-section _0px-bottom-padding desktop">
        <div className="_1170px-container mobile-full-bleed-0-lr-padding">
          <div className="two-col---grid-layout">
            <div
              id="w-node-187a68491465-740d4e9b"
              className="mobile-left-right-padding"
            >
              <h1>
                1-Tap Checkout.
                <br />
                Get Rewards too.
              </h1>
              <p className="hero-subheading">
                Sign up now for the smartest checkout experience
              </p>
              <div className="sticky-button">
                <a
                  href="https://theclosecompany.com/signup"
                  className="button cta-button w-button"
                >
                  Close Signup
                </a>
              </div>
            </div>
            <div id="w-node-187a6849146f-740d4e9b">
              <img
                src={require("./Fast _ 1-click checkout and login_files/5e7c451c3e38b882ce47affc_Fast-Hero2.png")}
                sizes="(max-width: 991px) 100vw, 38vw"
                alt=""
                className="col-image"
              />
              <div className="fast-video w-video w-embed" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section _0px-bottom-padding mobile">
        <div className="_1170px-container mobile-full-bleed-0-lr-padding">
          <div className="two-col---grid-layout">
            <div
              id="w-node-7ebd00a4cbbb-740d4e9b"
              className="mobile-left-right-padding"
            >
              <h1>
                1-Tap Checkout.
                <br />
                Get Rewards too.
              </h1>
              <p className="hero-subheading">
                Sign up now for the smartest checkout experience
                <br />
              </p>
              <div>
                <div className="fast-video w-video w-embed" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-button mobile">
        <a
          href="https://theclosecompany.com/signup"
          className="button cta-button w-button"
        >
          Close Signup
        </a>
      </div>
      <div className="video-wrapper mobile">
        <div className="fast-video w-video w-embed" />
      </div>
      <a
        href="https://www.test/#scroll"
        className="scroll-arrow w-inline-block"
      >
        <img
          src="./Fast _ 1-click checkout and login_files/5e349c95d8d0c276f40d4ee2_Arrow Down.svg"
          alt=""
        />
      </a>
      <div id="scroll" className="section---120px-padding off-white">
        <div className="_1170px-container">
          <div className="two-col---grid-layout">
            <div id="w-node-a91cb47bd110-740d4e9b">
              <h2 className="section-heading">How it works</h2>
              <p className="col-paragraph">
                Ready for Next-Gen Transaction Experience?
              </p>
              <div className="icon-list">
                <div className="list-item no-bottom-margin">
                  <div className="list-icon">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c246500d4eee_One-ListIcon.svg")}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title">Register</h3>
                    <p className="list-description">
                      Give us your checkout &amp; payment details for use at all
                      partners.{" "}
                      <strong className="bold-text-2"> Only once</strong>.
                    </p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-icon">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2d5720d4ed2_Two-ListIcon.svg")}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title">Smart Checkout</h3>
                    <p className="list-description">
                      When you buy with our partners: 1-Tap Login and Checkout
                      without password. Checkout details and best offers
                      auto-applied with payment method recommendation.
                    </p>
                  </div>
                </div>
                <div className="list-item">
                  <div className="list-icon">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2d5720d4ed2_Three-ListIcon.svg")}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title">Get Rewards</h3>
                    <p className="list-description">
                      After you buy: Get rewards for transacting at your
                      favorite merchants &amp; manage all your orders on Close
                      App
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.test/checkout"
                className="text-link-arrow-icon w-inline-block"
              >
                <div className="block-text-link">
                  Learn more about Close App
                </div>
                <div className="arrow-icon">
                  <img
                    src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c266200d4ed8_Arrow.svg")}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div id="w-node-49a9d95f5cd9-740d4e9b">
              <img
                src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c2b7fd0d4f26_ISTOCK-1129689109.jpg")}
                width={488}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 488px, 38vw"
                alt=""
                className="image-4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section---120px-padding">
        <div className="_1170px-container">
          <div className="two-col---grid-layout">
            <div id="w-node-4094d153e3df-740d4e9b">
              <img
                src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c23e550d4f25_iStock-1151968369 (1).jpg")}
                width={488}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 488px, 38vw"
                alt=""
                className="image-5"
              />
            </div>
            <div>
              <h2 className="section-heading mobile-center-section-heading">
                Why Close Checkout?
              </h2>
              <p className="col-paragraph mobile-center">
                Smartest way to shop online.
              </p>
              <div className="icon-list">
                <div className="list-item vertical-li no-bottom-margin">
                  <div className="list-icon mobile-remove-right-margin-8px-bottom">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e4c5061ae186f03189b03d0_lock-icon-three.png")}
                      width={56}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title mobile-center-li-title">
                      Super Easy
                    </h3>
                    <p className="list-description mobile-center-li-desc">
                      No need to give same details at partner sites again. 1-Tap
                      login &amp; checkout without password.
                    </p>
                  </div>
                </div>
                <div className="list-item vertical-li">
                  <div className="list-icon mobile-remove-right-margin-8px-bottom">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e4c5061ae186f03189b03d0_lock-icon-high.png")}
                      width={56}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title mobile-center-li-title">
                      Super Savings
                    </h3>
                    <p className="list-description mobile-center-li-desc">
                      We auto apply best coupons &amp; offers for you. No need
                      to browse sites, email and sms.
                    </p>
                  </div>
                </div>
                <div className="list-item vertical-li">
                  <div className="list-icon mobile-remove-right-margin-8px-bottom">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e4c5f2b9ea1e6748d5b82e4_fast-icon.png")}
                      width={56}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title mobile-center-li-title">
                      Super Rewarding
                    </h3>
                    <p className="list-description mobile-center-li-desc">
                      Get rewards for transacting at your favorite merchants.
                    </p>
                  </div>
                </div>
                <div className="list-item vertical-li">
                  <div className="list-icon mobile-remove-right-margin-8px-bottom">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e4c5061ae186f03189b03d0_lock-icon-two.png")}
                      width={56}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title mobile-center-li-title">
                      Super Safe
                    </h3>
                    <p className="list-description mobile-center-li-desc">
                      Highly secure payments and access all your account and
                      orders details through Close App.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.test/login"
                className="text-link-arrow-icon mobile-center-link w-inline-block"
              >
                <div className="block-text-link">
                  Learn more about User Benefits
                </div>
                <div className="arrow-icon">
                  <img
                    src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c266200d4ed8_Arrow.svg")}
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section---120px-padding _0px-top-padding black">
        <div className="_1170px-container mobile-full-bleed-0-lr-padding">
          <div className="two-col---grid-layout">
            <div className="mobile-left-right-padding">
              <h2 className="section-heading white-text">
                Every transaction smart &amp; rewarding
              </h2>
              <p className="light-grey-paragraph remove-paragraph-padding">
                Our mission is to create a trustful network of Close partners
                &amp; users where people get higher value for money and
                delighful shopping experience. <br />
                People can transact without worrying about anything with best
                value for their time and money.
                <br />
                <br />
                <br />
                <a className="inline-text-link white-link">
                  Getting people closer.
                </a>
              </p>
            </div>
            <div id="w-node-0470af307336-740d4e9b">
              <img
                src={require("./Fast _ 1-click checkout and login_files/5e4c261a0df7eb08f729e71e_righthands.jpg")}
                width={488}
                sizes="(max-width: 991px) 100vw, 38vw"
                alt=""
                className="col-image mobile-no-radius-drop-shadow"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section---120px-padding">
        <div className="_1170px-container">
          <div className="two-col---grid-layout">
            <div id="w-node-4094d153e3df-740d4e9b">
              <img
                src={require("./Fast _ 1-click checkout and login_files/5e349c95d8d0c23e550d4f25_iStock-1151968369 (2).jpg")}
                width={488}
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 488px, 38vw"
                alt=""
                className="image-5"
              />
            </div>
            <div>
              <h2 className="section-heading mobile-center-section-heading">
                For Merchants
              </h2>
              <p className="col-paragraph mobile-center">
                Are you looking to increase sales and checkout conversion?
              </p>
              <div className="icon-list">
                <div className="list-item vertical-li no-bottom-margin">
                  <div className="list-icon mobile-remove-right-margin-8px-bottom">
                    <img
                      src={require("./Fast _ 1-click checkout and login_files/5e4c5f2b9ea1e6748d5b82e4_fast-icontwo.png")}
                      width={56}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title mobile-center-li-title">
                      Sell directly
                    </h3>
                    <p className="list-description mobile-center-li-desc">
                      Sell directly on product, promotion or affiliate page
                      without need to login or go to cart.
                    </p>
                  </div>
                </div>
                <div className="list-item vertical-li">
                  <div className="list-icon mobile-remove-right-margin-8px-bottom">
                    <img
                      src="./Fast _ 1-click checkout and login_files/5e4c5f2b9ea1e6748d5b82e4_fast-icon.png"
                      width={56}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title mobile-center-li-title">
                      Easier checkout
                    </h3>
                    <p className="list-description mobile-center-li-desc">
                      We auto apply all the details for customers leading to
                      easier and faster checkout.
                    </p>
                  </div>
                </div>
                <div className="list-item vertical-li">
                  <div className="list-icon mobile-remove-right-margin-8px-bottom">
                    <img
                      src="./Fast _ 1-click checkout and login_files/5e4c5f2b9ea1e6748d5b82e4new1.png"
                      width={56}
                      alt=""
                      className="image"
                    />
                  </div>
                  <div className="list-text">
                    <h3 className="list-title mobile-center-li-title">
                      Increased Connect
                    </h3>
                    <p className="list-description mobile-center-li-desc">
                      New touch-point to interact with customers for merchants.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.test/login"
                className="text-link-arrow-icon mobile-center-link w-inline-block"
              >
                <div className="block-text-link">
                  Learn more about Merchant Benefits
                </div>
                <div className="arrow-icon">
                  <img
                    src="./Fast _ 1-click checkout and login_files/5e349c95d8d0c266200d4ed8_Arrow.svg"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
