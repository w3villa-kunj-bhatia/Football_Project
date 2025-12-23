import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-8 bg-card text-white">
      <div className="grid grid-cols-1 gap-10 px-8 py-10 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md">
              <FontAwesomeIcon icon={faG} className="text-4xl" />
            </div>
            <span className="text-2xl font-semibold tracking-wide">
              GOLVIO
            </span>
          </div>

          <p className="max-w-xs text-lg leading-relaxed font-bold">
            Born from a lifelong
            <br />
            love of football.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-neutral-300">
          <a href="#" className="hover:text-white">Matches</a>
          <a href="#" className="hover:text-white">News</a>
          <a href="#" className="hover:text-white">About us</a>
          <a href="#" className="hover:text-white">Advertise</a>
          <a href="#" className="hover:text-white">Guess the score</a>
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Newsletter</a>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-neutral-700 px-8 py-4 text-xs md:flex-row md:items-center md:justify-between">
        <span>© Copyright 2025 Golvio</span>

        <p className="max-w-sm text-center leading-relaxed md:text-left">
          Terms of use · Cookie policy · Privacy policy
          <br />
          The use of automatic services (robots, crawlers, indexing etc.)
          as well as other methods or systematic or regular use is not permitted.
        </p>

        <span className="text-white">Follow us</span>
      </div>
    </footer>
  );
}
