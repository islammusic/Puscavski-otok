import React from 'react';
import { ITEMS } from '../constants';
import type { SurvivalItem } from '../types';

// SVG Logo Component
export const Logo: React.FC<{ onClick: () => void; className?: string }> = ({ onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
      title="Klikni za pomen predmetov"
    >
      <svg width="180" height="120" viewBox="0 0 200 135" xmlns="http://www.w3.org/2000/svg" className="bg-[#87ceeb] rounded-lg shadow-md">
        <ellipse cx="100" cy="55" rx="85" ry="45" fill="black" />
        <text
          x="100"
          y="63"
          fontFamily="'Inter', sans-serif"
          fontSize="55"
          fontWeight="900"
          fill="white"
          textAnchor="middle"
          style={{ fontStyle: 'italic', letterSpacing: '-5px' }}
        >
          <tspan dx="-5">V</tspan>
          <tspan>SS</tspan>
        </text>
         <circle cx="148" cy="28" r="7" fill="white" />
        <text
          x="100"
          y="118"
          fontFamily="'Inter', sans-serif"
          fontSize="15"
          fontWeight="bold"
          fill="black"
          textAnchor="middle"
          letterSpacing="1"
        >
          VIŠJA STROKOVNA ŠOLA
        </text>
      </svg>
    </div>
  );
};


// Item Card Component
interface ItemCardProps {
  item: SurvivalItem;
  isSelected: boolean;
  onSelect: (id: string) => void;
  isDisabled: boolean;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, isSelected, onSelect, isDisabled }) => {
  const baseClasses = 'p-4 rounded-xl border-2 transition-all duration-200 ease-in-out cursor-pointer text-center flex flex-col items-center justify-center aspect-square';
  const selectedClasses = 'bg-sky-100 border-sky-500 ring-2 ring-sky-300 shadow-lg scale-105';
  const unselectedClasses = 'bg-white border-gray-200 hover:border-sky-400 hover:shadow-md';
  const disabledClasses = 'opacity-50 cursor-not-allowed bg-gray-100';

  const handleClick = () => {
    if (!isDisabled || isSelected) {
      onSelect(item.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses} ${isDisabled && !isSelected ? disabledClasses : ''}`}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && handleClick()}
    >
      <div className="text-4xl mb-2">{item.icon}</div>
      <h3 className="font-semibold text-gray-800">{item.name}</h3>
    </div>
  );
};


// Result Modal Component
interface ResultModalProps {
  score: number;
  onPlayAgain: () => void;
  onClose: () => void;
}

const getResult = (score: number): { title: string; message: string; survived: boolean, color: string } => {
  if (score >= 12) {
    return {
      title: 'Odlično preživetje! 🎉',
      message: 'Tvoja izbira predmetov je izjemna. Imaš zelo visoke možnosti za dolgoročno preživetje.',
      survived: true,
      color: 'text-green-500'
    };
  }
  if (score >= 8) {
    return {
      title: 'Minimalno preživetje 👍',
      message: 'Uspelo ti je zbrati dovolj točk za preživetje, a vsak dan bo nov izziv. Bodi previden!',
      survived: true,
      color: 'text-yellow-500'
    };
  }
  return {
    title: 'Preživetje ni možno 😥',
    message: 'Tvoja izbira predmetov žal ni zadostovala. Poskusi znova in razmisli o osnovnih potrebah.',
    survived: false,
    color: 'text-red-500'
  };
};

export const ResultModal: React.FC<ResultModalProps> = ({ score, onPlayAgain, onClose }) => {
  const result = getResult(score);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md text-center p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
          aria-label="Zapri"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{result.title}</h2>
        <p className="text-6xl font-black my-4 text-sky-500">{score}</p>
        <p className="text-lg text-gray-600 mb-4">TOČK</p>
        <p className={`text-xl font-semibold mb-6 ${result.color}`}>
          {result.survived ? 'Čestitke, preživel si!' : 'Žal ti ni uspelo preživeti.'}
        </p>
        <p className="text-gray-700 mb-8">{result.message}</p>
        <button
          onClick={onPlayAgain}
          className="w-full bg-sky-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-sky-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-300"
        >
          Igraj znova
        </button>
      </div>
    </div>
  );
};

// Info Modal Component
interface InfoModalProps {
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <div className="sticky top-0 bg-white p-6 border-b z-10 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Pomen predmetov za preživetje</h2>
            <p className="text-gray-600 mt-1">Vsak predmet ima svojo vlogo pri preživetju.</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800 transition-colors"
            aria-label="Zapri"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <ul className="space-y-4">
            {ITEMS.map(item => (
              <li key={item.id} className="p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-sky-700">{item.icon} {item.name}</h3>
                <p className="text-gray-700 mt-1">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
