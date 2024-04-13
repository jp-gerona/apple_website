import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="p-5 sm:px-10">
      <div className="screen-max-width">
        <div>
          <p className="text-xs font-semibold text-gray">
            More ways to shop:{" "}
            <span className="cursor-pointer text-blue underline">
              Find an Apple Store{" "}
            </span>
            or{" "}
            <span className="cursor-pointer text-blue underline">
              other retailer
            </span>{" "}
            near you.
          </p>
          <p className="text-xs font-semibold text-gray">
            Or call 1800-1651-0525 (Smart/PLDT), 1800-8474-7382 (Globe).
          </p>
        </div>

        <div className="my-5 h-px w-full bg-neutral-700" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-xs font-semibold text-gray">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>

          <ul className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <li
                key={link}
                className="cursor-pointer text-xs font-semibold text-gray"
              >
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2 cursor-default text-gray">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
