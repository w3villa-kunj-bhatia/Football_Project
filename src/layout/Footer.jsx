import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-8 bg-card text-white">
      {/* Top Section */}
      <div className="flex flex-col gap-10 px-6 py-10 md:flex-row md:justify-between md:px-10 lg:px-20">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md">
              <FontAwesomeIcon icon={faG} className="text-4xl" />
            </div>
            <span className="text-2xl font-semibold tracking-wide uppercase">
              GOLVIO
            </span>
          </div>

          <p className="text-lg font-bold leading-tight">
            Born from a lifelong
            <br />
            love of football.
          </p>
        </div>

        {/* Navigation Links: 2 columns on mobile and desktop */}
        <div className="text-sm font-bold mr-[50%]">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-lime-400">
              Matches
            </a>
            <a href="#" className="hover:text-lime-400">
              News
            </a>
            <a href="#" className="hover:text-lime-400">
              About us
            </a>
            <a href="#" className="hover:text-lime-400">
              Advertise
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-lime-400">
              Guess the score
            </a>
            <a href="#" className="hover:text-lime-400">
              FAQ
            </a>
            <a href="#" className="hover:text-lime-400">
              Newsletter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-800 px-6 py-8 md:px-10 lg:px-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Copyright */}
          <div className="shrink-0 mb-0">
            <span className="text-sm font-medium text-neutral-400">
              © Copyright 2025 Golvio
            </span>
          </div>

          <div className="max-w-sm md:px-10">
            <p className="text-sm leading-relaxed text-neutral-500 tracking-wider">
              <span className="block font-bold text-neutral-300 mb-1">
                Terms of use · Cookie policy · Privacy policy
              </span>
              The use of automatic services (robots, crawlers, indexing etc.) as
              well as other methods or systematic or regular use is not
              permitted.
            </p>
          </div>

          {/* Follow Us: Pushed to the right */}
          <div className="flex flex-col gap-3 shrink-0">
            <span className="text-sm font-bold uppercase tracking-widest text-white">
              Follow us
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
