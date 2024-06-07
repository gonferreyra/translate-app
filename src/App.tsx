import { Toaster } from "react-hot-toast";

import TranslateCard from "./components/TranslateCard";
import TranslatedCard from "./components/TranslatedCard";

function App() {
  return (
    <>
      <div className="mb-8">
        <main>
          <div className="w-full pb-12 pt-16 xl:pt-24">
            <img className="mx-auto" src="/logo.svg" alt="" />
          </div>
          <div className="mx-auto mb-8 flex max-w-screen-xl flex-col gap-6 text-[#4D5562] lg:mx-10 xl:flex-row xl:gap-0">
            <TranslateCard />

            <TranslatedCard />
          </div>
        </main>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
