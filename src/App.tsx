import './App.css'
import flower from './assets/images/ortensia.png'

function App() {
  return (
    <>
      <section>
        <div className="p-4 h-screen" >
          <img src={flower} className="flower big top-left" alt="" />
          <img src={flower} className="flower big bottom-right" alt="" />
          <img src={flower} className="flower small top-left" alt="" />
          <img src={flower} className="flower small bottom-right" alt="" />

          <div className="text-center font-cinzel h-full p-4 flex flex-col justify-around border-solid border-2 border-[#e3cfdc] x-3">
            <div className="font-cinzel">Il battesimo di</div>
            <div className="font-eyesome text-6xl">Virginia</div>
            <div>Domenica 24 Maggio 2026</div>
            <div className="font-eyesome text-4xl">Cerimonia</div>
            <div>
              <div>Duomo di San Martino di Lupari</div>
              <div className="text-[#af96a9]">Ore 11.00</div>
            </div>
            <div className="font-eyesome text-4xl">Festeggiamenti</div>
            <div>
              <div>Al Monte di Livio</div>
              <div className="text-[#af96a9]">Via Fratta 83</div>
              <div className="text-[#af96a9]">Colceresa VI</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
