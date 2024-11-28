"use client"

import React from 'react'
import Image from 'next/image'

import {
  EmblaOptionsType,
  EmblaPluginType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './carousel-dots'

type PropType = {
  slides: any[]
  options?: EmblaOptionsType
  plugins?: EmblaPluginType[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, props.plugins)
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi)

  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    emblaApi?.plugins()?.autoScroll.stop()
    onDotButtonClick(index);
    setTimeout(() => emblaApi?.plugins()?.autoScroll.play(), 1500);
    event.stopPropagation();
  }

  return (
    <div>
      <div
        className="overflow-hidden rounded-xl outline-offset-4"
        ref={emblaRef}
        tabIndex={0}
      >
        <div className="flex touch-pan-y touch-pinch-zoom -ml-4">
          {slides.map((slide, index) => (
            <div
              className="flex items-center justify-center transform-none shrink-0 grow-1 h-[50svh] min-w-0 pl-3"
              key={index}
            >
              <div className="embla__slide__number rounded-xl overflow-hidden select-none shadow-muted text-4xl font-semibold transition-all h-full">
                <Image src={slide} alt={(index+1)+" screenshot"} className='h-auto w-auto max-w-full max-h-full'></Image>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls md:cursor-auto" onClick={event => event.stopPropagation()} onKeyUp={event => event.stopPropagation()}>
        <div className="embla__dots flex flex-wrap justify-left items-center pt-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={event => handleClick(event, index)}
              onKeyUp={event => event.key === 'Enter' ? handleClick(event, index) : null}
              className={'embla__dot appearance-none touch-manipulation inline-flex cursor-pointer rounded-full mr-2 w-3 h-3 border-gray-500 border outline-offset-4 transition-all'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel