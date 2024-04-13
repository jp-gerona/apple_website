import React from "react";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#highlights-heading", { opacity: 1, y: 0 });

    // Added another object as argument for the scrollprops
    animateWithGsap(
      ".link",
      { opacity: 1, y: 0, duration: 1, stagger: 0.25 },
      {
        trigger: ".link",
        toggleActions: "restart reverse restart reverse",
        start: "top 80%",
      }
    );
  }, []);

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h2 id="highlights-heading" className="section-heading">
            Get the highlights.
          </h2>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film <img src={watchImg} alt="Watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the Event{" "}
              <img src={rightImg} alt="Event" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
