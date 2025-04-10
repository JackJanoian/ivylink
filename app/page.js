import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen py-2 ${roboto.variable} ${montserrat.variable} `}
    >
      <section className="hero py-20 bg-white">
        <div className="container mx-auto text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold text-dark-grey ${montserrat.variable}`}
          >
            Welcome to IvyLink
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-dark-grey">
            Craft your perfect college essay with AI.
          </p>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-dark-grey">
            IvyLink helps you tailor your personal statement to each college's
            unique values, ensuring your essay resonates with admissions criteria.
          </p>
          <a href="/signup">
            <button
              className="mt-8 px-8 py-3 rounded-full bg-sky-blue text-white text-lg hover:bg-teal focus:outline-none focus:ring-2 focus:ring-sky-blue focus:ring-opacity-50"
              style={{ backgroundColor: "#4A90E2" }}
            >
              Sign Up
            </button>
          </a>
        </div>
      </section>

      {/* Further content sections can be added here */}
      <footer className="mt-12 py-6 border-t border-light-grey w-full">
        <div className="container mx-auto text-center text-dark-grey">
          <p>&copy; 2024 IvyLink. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
