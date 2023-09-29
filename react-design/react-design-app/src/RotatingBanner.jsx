export default function RotatingBanner({ items }) {
  function Banner() {
    return <p>{items}</p>;
  }

  function PrevButton() {
    return <button>Prev</button>;
  }

  function NextButton() {
    return <button>Next</button>;
  }

  function IndicatorButton() {
    return (
      <>
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </>
    );
  }

  return (
    <>
      <header>
        <Banner />
      </header>
      <div>
        <PrevButton />
      </div>
      <IndicatorButton />
      <div>
        <NextButton />
      </div>
    </>
  );
}
