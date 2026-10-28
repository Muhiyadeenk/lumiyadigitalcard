import { lumiyaConfig as c } from "./config.js";
import { useProgressBar } from "./hooks.js";
import Hero from "./components/Hero.jsx";
import ConnectSection from "./components/ConnectSection.jsx";
import VisitSection from "./components/VisitSection.jsx";

export default function App() {
  const progress = useProgressBar();

  return (
    <>
      <div className="progress" ref={progress} aria-hidden="true" />
      <main>
        <Hero
          brandName={c.brandName}
          subtitle={c.subtitle}
          taglines={c.taglines}
        />
        <ConnectSection config={c} />
        <VisitSection config={c} />
      </main>
    </>
  );
}
