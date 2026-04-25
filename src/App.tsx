import './App.css'

function App() {
  return (
    <>
      <section className="card-section">
        <div className="card-inner p-4 h-full" >
          <div className="text-center font-cinzel text-lg h-full px-4 py-10 flex flex-col justify-around border-solid border-2 border-[#e3cfdc]">
            <div>
              <div className="">Il battesimo di</div>
              <div className="font-eyesome text-7xl mt-12 mb-6">Virginia</div>
              <div>Domenica 24 Maggio 2026</div>
            </div>
            <div>
              <div className="font-eyesome text-4xl">Cerimonia</div>
              <div>
                <div className="mt-8">Duomo di San Martino di Lupari</div>
                <div className="text-[#af96a9]">Ore 11.00</div>
              </div>
            </div>
            <div>
              <div className="font-eyesome text-4xl">Festeggiamenti</div>
              <div className="mt-8">
                <div>Al Monte di Livio</div>
                <div className="text-[#af96a9]">Via Fratta 83</div>
                <div className="text-[#af96a9]">Colceresa VI</div>
              </div>
            </div>
            <div className="font-eyesome">
              stai pensando ad un regalo?
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
