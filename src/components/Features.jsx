import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    // Explore video animation
    // Does not use the animateWithGsap util function since it will be different
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features-heading", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding relative h-full overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h2 id="features-heading" className="section-heading">
            Explore the full story.
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="mb-24 mt-32 pl-24">
            <h3 className="text-5xl font-semibold lg:text-7xl">iPhone.</h3>
            <h3 className="text-5xl font-semibold lg:text-7xl">
              Forged in titanium.
            </h3>
          </div>

          <div className="flex-center flex-col sm:px-10">
            <div className="relative flex h-[50vh] w-full items-center">
              <video
                playsInline
                id="exploreVideo"
                className="size-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="relative flex w-full flex-col">
              <div className="feature-video-container">
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore1Img}
                    alt="Titanium1"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="h-[50vh] flex-1 overflow-hidden">
                  <img
                    src={explore2Img}
                    alt="Titanium2"
                    className="feature-video g_grow"
                  />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecraft use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-center flex-1">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">lightest Pro models ever</span>
                    . You&apos;ll notice the difference the moment you pick one
                    up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
