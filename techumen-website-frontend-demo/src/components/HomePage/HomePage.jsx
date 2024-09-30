import React from "react";
import Timer from "./Timer";
import { Link } from "react-router-dom";
import webnaticImage from "../../images/webnaticImage.svg";
import compileItImage from "../../images/compileItImage.svg";
import codeBlastImage from "../../images/codeBlastImage.svg";
import puzzleVaultImage from "../../images/puzzleVaultImage.svg";

function HomePage() {
  return (
    <div className="home-page-main-div z-50 bg-transparent px-4 py-8">
      {/* Header Section */}
      <p className="text-2xl uppercase font-semibold mb-2 text-center nunito-font">
        Association of Computer Science and Engineering Students
      </p>
      <p className="text-lg text-center nunito-font">Presents</p>
      <h1 className="text-8xl font-extrabold font-sans tracking-tight text-center bg-gradient-to-tr from-gray-700 via-slate-200 to-white bg-clip-text uppercase rowdy-font text-transparent">
        Techumen 2<span className="lowercase">k</span>24
      </h1>

      {/* Timer Component */}
      <Timer />

      {/* Event Title */}
      <div className="event-section my-12">
        <h1 className="text-4xl font-bold text-center">Events</h1>
      </div>

      {/* Individual Events */}
      <section className="my-8">
        <h3 className="text-3xl font-semibold text-center mb-6">Individual</h3>
        <div className="event-card-div grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Webnatic Event Card */}
          <div className="event-card bg-white bg-opacity-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={webnaticImage}
              alt="Webnatic"
              className="w-full h-40 object-cover" 
            />
            <div className="p-4 flex flex-col flex-grow"> {/* Reduced padding */}
              <h2 className="event-card-title text-xl font-semibold mb-1"> {/* Slightly smaller text */}
                Webnatic
              </h2>
              <p className="event-card-quote text-lg text-gray-600 mb-3"> {/* Smaller text */}
                Tailwind Your Web Development
              </p>
              <p className="event-card-desc text-sm mb-4 flex-grow">
                A one-day workshop where you’ll learn to build a responsive
                website front-end using HTML, CSS, and Tailwind.
              </p>
              <div className="mt-auto flex space-x-4">
                <a
                  href="/webnatic/rulebook"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  RULEBOOK
                </a>
                <Link
                  to="/webnatic"
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* CodeBlast Event Card */}
          <div className="event-card bg-white bg-opacity-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={codeBlastImage}
              alt="CodeBlast"
              className="w-full h-40 object-cover" 
            />
            <div className="p-4 flex flex-col flex-grow"> {/* Reduced padding */}
              <h2 className="event-card-title text-xl font-semibold mb-1">
                CodeBlast
              </h2>
              <p className="event-card-quote text-lg text-gray-600 mb-3">
                Elite Algorithmic Showdown
              </p>
              <p className="event-card-desc text-sm mb-4 flex-grow">
                An intense online coding contest where elite coders battle it
                out to solve algorithmic challenges.
              </p>
              <div className="mt-auto flex space-x-4">
                <a
                  href="/codeblast/rulebook"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  RULEBOOK
                </a>
                <Link
                  to="/codeblast"
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Events */}
      <section className="my-8">
        <h3 className="text-3xl font-semibold text-center mb-6">Team</h3>
        <div className="event-card-div grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Compile It Event Card */}
          <div className="event-card bg-white bg-opacity-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={compileItImage}
              alt="Compile It"
              className="w-full h-40 object-cover" 
            />
            <div className="p-4 flex flex-col flex-grow"> {/* Reduced padding */}
              <h2 className="event-card-title text-xl font-semibold mb-1">
                Compile It
              </h2>
              <p className="event-card-quote text-lg text-gray-600 mb-3">
                Two Brains, One Breakthrough
              </p>
              <p className="event-card-desc text-sm mb-4 flex-grow">
                In this duo-based event, teams analyze, debug, and solve coding
                challenges together.
              </p>
              <div className="mt-auto flex space-x-4">
                <a
                  href="/compile-it/rulebook"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  RULEBOOK
                </a>
                <Link
                  to="/compile-it"
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          </div>

          {/* Puzzle Vault Event Card */}
          <div className="event-card bg-white bg-opacity-50 rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={puzzleVaultImage}
              alt="Puzzle Vault"
              className="w-full h-40 object-cover" 
            />
            <div className="p-4 flex flex-col flex-grow"> {/* Reduced padding */}
              <h2 className="event-card-title text-xl font-semibold mb-1">
                Puzzle Vault
              </h2>
              <p className="event-card-quote text-lg text-gray-600 mb-3">
                Crack the Puzzle, Uncover the Mystery
              </p>
              <p className="event-card-desc text-sm mb-4 flex-grow">
                A thrilling mystery-solving challenge where you’ll face intricate
                puzzles and riddles, racing against time to unlock the ultimate prize.
              </p>
              <div className="mt-auto flex space-x-4">
                <a
                  href="/puzzle-vault/rulebook"
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                  RULEBOOK
                </a>
                <Link
                  to="/puzzle-vault"
                  className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
                >
                  Read More &gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <div className="sponsor-div mt-10"></div>
    </div>
  );
}

export default HomePage;
