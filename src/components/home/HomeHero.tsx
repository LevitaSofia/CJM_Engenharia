import { getImageProps } from "next/image";
import { HomeActions } from "@/components/home/HomeActions";
import { HeroExperience } from "@/components/home/HeroExperience";
import "./hero-experience.css";

const imageProps = {
  alt: "",
  sizes: "(max-width: 1279px) 100vw, 58vw",
  quality: 75,
} as const;

const {
  props: { srcSet: desktopSrcSet },
} = getImageProps({
  ...imageProps,
  src: "/assets/hero/hero-cjm-desktop-v01.webp",
  width: 2752,
  height: 1536,
});

const {
  props: { srcSet: mobileSrcSet, ...mobileImageProps },
} = getImageProps({
  ...imageProps,
  src: "/assets/hero/hero-cjm-mobile-v01.webp",
  width: 1536,
  height: 2752,
  loading: "eager",
  fetchPriority: "high",
});

export function HomeHero() {
  return (
    <section className="home-cinematic-hero bg-brand-navy text-white">
      <div className="hero-layout mx-auto grid max-w-[120rem] xl:grid-cols-12">
        <div className="hero-copy relative z-10 flex items-center px-6 md:px-10 xl:col-span-7 xl:col-start-1 xl:row-start-1 xl:px-12 2xl:px-16">
          <div className="max-w-[48rem]">
            <p className="hero-eyebrow hero-enter text-xs font-semibold uppercase tracking-[0.16em] text-brand-steel-light sm:text-sm">
              Engenharia em cada detalhe
            </p>
            <h1 className="hero-headline hero-enter font-semibold tracking-[-0.05em]">
              Engenharia, limpeza e manutenção para sistemas de exaustão profissional.
            </h1>
            <p className="hero-description hero-enter max-w-2xl text-white/85">
              Soluções técnicas para coifas, dutos, exaustores, lavadores de gases e sistemas de ventilação.
            </p>
            <div className="hero-actions hero-enter">
              <HomeActions />
            </div>
            <p className="hero-proof hero-enter"><span aria-hidden="true" /> Do diagnóstico à execução.</p>
          </div>
        </div>

        <div className="home-hero-media relative overflow-hidden bg-brand-navy-dark xl:col-span-6 xl:col-start-7 xl:row-start-1">
          <HeroExperience>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={desktopSrcSet}
              sizes="(max-width: 1279px) 100vw, 58vw"
            />
            <source media="(max-width: 1023px)" srcSet={mobileSrcSet} sizes="100vw" />
            <img
              {...mobileImageProps}
              alt=""
              aria-hidden="true"
              className="hero-approved-image absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          </HeroExperience>
        </div>
      </div>
    </section>
  );
}
