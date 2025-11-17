import React, { useState, useMemo } from 'react';
import { ITEMS } from './constants';
import { ItemCard, ResultModal, InfoModal, Logo } from './components/ui';

function App() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [showResultModal, setShowResultModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const shuffledItems = useMemo(() => {
    const array = [...ITEMS];
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }, []);

  const totalScore = useMemo(() => {
    // FIX: Explicitly type the accumulator 'acc' as a number to resolve the TypeScript error.
    return Array.from(selectedIds).reduce((acc: number, id) => {
      const item = ITEMS.find(i => i.id === id);
      return acc + (item?.points || 0);
    }, 0);
  }, [selectedIds]);

  const handleItemSelect = (id: string) => {
    setSelectedIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        if (newIds.size < 5) {
          newIds.add(id);
        }
      }
      return newIds;
    });
  };

  const handleSubmit = () => {
    if (selectedIds.size === 5) {
      setShowResultModal(true);
    }
  };

  const handlePlayAgain = () => {
    setSelectedIds(new Set());
    setShowResultModal(false);
  };
  
  const selectionCount = selectedIds.size;
  const canSelectMore = selectionCount < 5;

  return (
    <div className="bg-sky-50 min-h-screen text-gray-800 selection:bg-sky-200">
      {showResultModal && <ResultModal score={totalScore} onPlayAgain={handlePlayAgain} onClose={() => setShowResultModal(false)} />}
      {showInfoModal && <InfoModal onClose={() => setShowInfoModal(false)} />}
      
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <main className="container mx-auto p-4 sm:p-6 md:p-8">
        <header className="text-center mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-sky-800">PREŽIVETJE VSŠ VELENJE</h1>
                <p className="text-lg text-gray-600 mt-2">Puščavski otok – Izbira predmetov za preživetje</p>
            </div>
            <Logo onClick={() => setShowInfoModal(true)} className="flex-shrink-0" />
        </header>

        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8 sticky top-4 z-40 border">
          <h2 className="text-xl font-bold mb-2">Navodila za igro:</h2>
          <div className="text-gray-600 space-y-2">
            <p><strong>Puščavski otok - izbira predmetov za preživetje</strong></p>
            <p>Predstavljajte si, da ste se znašli na odmaknjenem puščavskem otoku z omejenimi možnostmi za preživetje. Iz predloženega seznama predmetov izberite <strong>pet takih</strong>, za katere verjamete, da bi vam v naslednjih sedmih dneh najbolj pomagali premagovati vsakdanje izzive izolacije in naravnih sil.</p>
            <p>Premišljeno ocenite nujnost, večnamenskost in praktično vrednost posameznih predmetov. Svoje odločitve nato primerjajte z odločitvami drugih udeležencev in ugotovite, kdo je najbolje ocenil potrebe za preživetje v nepredvidljivih razmerah.</p>
          </div>
          <div className="mt-4 flex justify-between items-center gap-4">
             <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
               <div className="bg-sky-500 h-4 rounded-full transition-all duration-300 ease-out" style={{ width: `${(selectionCount / 5) * 100}%` }}></div>
             </div>
            <span className="text-lg font-bold text-sky-600 whitespace-nowrap">{selectionCount} / 5</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 pb-28">
          {shuffledItems.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              isSelected={selectedIds.has(item.id)}
              onSelect={handleItemSelect}
              isDisabled={!canSelectMore && !selectedIds.has(item.id)}
            />
          ))}
        </div>

        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-sky-50 via-sky-50/90 to-transparent flex justify-center items-center pointer-events-none">
            <div className="pointer-events-auto">
                {selectionCount === 5 && (
                    <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white font-bold py-4 px-10 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 text-xl animate-pulse"
                    >
                    Preveri možnosti preživetja
                    </button>
                )}
             </div>
        </footer>
      </main>
    </div>
  );
}

export default App;