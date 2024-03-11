import Nav from "./components/Nav";
import Arrow from "./assets/arrow.png"

function App() {
  return (
    <div>
      <Nav />
      {/* Hero Content */}
      <div className="flex flex-col gap-2.5 justify-center items-center">
        <p className="font-jakarta font-extrabold text-6xl text-center leading-tight max-w-3xl">
          Your Magic Wand for Instant Documentation
        </p>
        <p className="font-sans uppercase">
          Turn ANY process into a simple step-by step Guide
        </p>
        <a
          className="px-4 py-2 my-5 bg-black rounded-lg font-mulish flex gap-3 text-sm font-bold items-center text-white"
          href=""
        >
          Install Wizardshot
          <img src={Arrow} alt="logo" className="w-3.5" />
        </a>
        <div className="border-8 border-violet-600 rounded-lg bg-black w-1039 h-596"></div>
      </div>
    </div>
  );
}

export default App;
