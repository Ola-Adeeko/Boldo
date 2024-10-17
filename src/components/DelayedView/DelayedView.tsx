import { useState, ReactNode } from "react";
import { InView } from "react-intersection-observer";

interface Props {
  delay: number;
  children: ReactNode;
}
const DelayedView = ({ delay, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <InView
      triggerOnce={true}
      onChange={(inView) => {
        if (inView) {
          setTimeout(() => setIsVisible(true), delay);
        }
      }}
    >
      {({ ref }) => (
        <div ref={ref} className={isVisible ? "animate-fadeIn" : ""}>
          {isVisible && children}
        </div>
      )}
    </InView>
  );
};

export default DelayedView;
