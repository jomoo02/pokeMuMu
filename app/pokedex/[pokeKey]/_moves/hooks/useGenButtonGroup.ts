import { useRef, useLayoutEffect } from 'react';

export default function useGenButtonGroup() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, []);

  return {
    scrollContainerRef,
  };
}
