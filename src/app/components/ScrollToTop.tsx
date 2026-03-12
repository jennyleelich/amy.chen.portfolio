import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Tooltip.Provider>
      <AnimatePresence>
        {isVisible && (
          <Tooltip.Root delayDuration={200}>
            <Tooltip.Trigger asChild>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 p-4 bg-gray-900 text-white rounded-full shadow-xl hover:bg-gray-700 hover:scale-110 transition-all duration-200 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" strokeWidth={2.5} />
              </motion.button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                sideOffset={8}
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm shadow-lg z-50"
              >
                Back to top
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        )}
      </AnimatePresence>
    </Tooltip.Provider>
  );
}