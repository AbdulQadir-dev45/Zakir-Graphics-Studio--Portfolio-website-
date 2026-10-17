import React, { ElementType, CSSProperties } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number; // ms
  duration?: number; // ms
  distance?: number; // px
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  as?: ElementType;
  style?: CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 650,
  distance = 28,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  as: Component = 'div',
  style = {},
}) => {
  const { ref, isVisible } = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'none':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const combinedStyles: CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <Component ref={ref} className={className} style={combinedStyles}>
      {children}
    </Component>
  );
};
