import React, { PropsWithChildren } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';

interface EmblaCarouselProps {
  options?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  className?: string;
}

const EmblaCarousel: React.FC<PropsWithChildren<EmblaCarouselProps>> = ({ options, plugins, className, children }) => {
  const [emblaRef] = useEmblaCarousel(options, plugins);
  return (
    <div className={className} ref={emblaRef}>
      {children}
    </div>
  );
};

export default EmblaCarousel;
