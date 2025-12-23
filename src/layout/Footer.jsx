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
            <span className="text-2xl font-semibold tracking-wide">GOLVIO</span>
          </div>

          <p className="max-w-xs text-lg leading-relaxed font-bold">
            Born from a lifelong
            <br />
            love of football.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-md ml-40">
          <a href="#">Matches</a>
          <a href="#">News</a>
          <a href="#">About us</a>
          <a href="#">Advertise</a>
          <a href="#">Guess the score</a>
          <a href="#">FAQ</a>
          <a href="#">Newsletter</a>
        </div>
      </div>

      <div className="border-t border-neutral-800 px-10 py-5 text-xs">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
          <span className="leading-tight">© Copyright 2025 Golvio</span>

          <p className="max-w-sm leading-relaxed">
            Terms of use · Cookie policy · Privacy policy
            <br />
            The use of automatic services (robots, crawlers, indexing etc.) as
            well as other methods or systematic or regular use is not permitted.
          </p>

          <span className="text-white leading-tight">Follow us</span>
        </div>
      </div>
    </footer>
  );
}
