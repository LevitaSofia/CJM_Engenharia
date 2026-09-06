"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

const scenes = [
  { label: "Inspeção", title: "Cada componente importa.", detail: "Coifas, filtros e rede de dutos.", image: null, alt: "" },
  { label: "Limpeza", title: "Precisão em cada superfície.", detail: "Limpeza técnica de coifas e filtros.", image: "/fotos/limpeza-coifa-equipe.jpg", alt: "Profissionais limpando uma coifa industrial" },
  { label: "Manutenção", title: "Cuidado que mantém a operação.", detail: "Atenção aos equipamentos de exaustão.", image: "/fotos/manutencao-exaustor-grelha.jpg", alt: "Profissional inspecionando um equipamento de exaustão" },
] as const;

function ExtractionDrawing() {
  return (
    <svg viewBox="0 0 800 700" fill="none" aria-hidden="true" className="hero-engineering-drawing">
      <g className="hero-drawing-guides" stroke="currentColor" strokeWidth="1">
        <path d="M80 140H720M80 580H720M140 70V640M660 70V640" strokeDasharray="4 8" />
        <path d="M115 210V490M105 210H125M105 490H125M205 540H635M205 530V550M635 530V550" />
        <circle cx="420" cy="340" r="255" strokeDasharray="2 12" />
      </g>
      <g className="hero-drawing-lines" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
        <path pathLength="1" d="M340 90V240L220 350L180 445L575 505L665 430L600 320L475 245V90M340 150L475 175M340 205L475 230" />
        <path pathLength="1" d="M220 350L600 400L665 430M180 445L575 505V455L220 395L180 445M220 350V395M600 400L575 455M220 395L600 400M475 245L340 240" />
        <path pathLength="1" d="M235 410L205 442M265 414L235 447M295 419L265 452M325 424L295 457M355 429L325 462M385 434L355 467M415 439L385 472M445 444L415 477M475 449L445 482M505 454L475 487M535 459L505 492M565 464L535 497" />
      </g>
      <g className="hero-drawing-flow" stroke="#69b68c" strokeWidth="2">
        <path pathLength="1" d="M305 610V525M415 630V545M525 650V560M405 205V115M395 130L405 115L415 130" />
      </g>
    </svg>
  );
}

export function HeroExperience({ children }: { children: ReactNode }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [replay, setReplay] = useState(0);
  const [readyImage, setReadyImage] = useState<string | null>(null);
  const scene = scenes[sceneIndex];

  function selectScene(index: number) {
    setSceneIndex(index);
    setReadyImage(null);
    setReplay((value) => value + 1);
  }

  return (
    <div className="hero-experience" aria-label="Explore os serviços de exaustão">
      <div key={`${sceneIndex}-${replay}`} className="hero-scene" data-ready={!scene.image || readyImage === scene.image}>
        <div className="hero-scene-photo">
          {children}
          {scene.image && (
            <Image
              src={scene.image}
              alt={scene.alt}
              fill
              sizes="(max-width: 1279px) 100vw, 55vw"
              className={`hero-service-photo ${readyImage === scene.image ? "is-ready" : ""}`}
              onLoad={() => setReadyImage(scene.image)}
            />
          )}
        </div>
        <div className="hero-photo-shade" />
        <div className="hero-blueprint"><ExtractionDrawing /></div>
        <div className="hero-reveal-edge" aria-hidden="true" />
      </div>

      <div className="hero-media-topline">
        <span>Sistemas de exaustão <span aria-hidden="true">/</span> CJM</span>
        <button type="button" className="hero-replay" onClick={() => setReplay((value) => value + 1)} aria-label="Repetir entrada animada">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 10a8 8 0 1 1 1 7M4 4v6h6" /></svg>
          <span>Ver animação</span>
        </button>
      </div>

      <div className="hero-scene-caption" aria-live="polite" aria-atomic="true">
        <p key={sceneIndex} className="hero-scene-title">{scene.title}</p>
        <p className="hero-scene-detail">{scene.detail}</p>
      </div>
      <div className="hero-scene-nav" role="group" aria-label="Selecionar cena técnica">
        {scenes.map((item, index) => (
          <button type="button" key={item.label} aria-pressed={index === sceneIndex} onClick={() => selectScene(index)}>
            <span className="hero-scene-marker" aria-hidden="true" />
            {item.label}
            <span className="hero-scene-arrow" aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
    </div>
  );
}
