import React, { createContext, useContext, useState } from 'react';

interface QuoteFormContextType {
  isOpen: boolean;
  openQuoteForm: (source?: string) => void;
  closeQuoteForm: () => void;
  formSource: string;
}

const QuoteFormContext = createContext<QuoteFormContextType | undefined>(undefined);

export const QuoteFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formSource, setFormSource] = useState('');

  const openQuoteForm = (source = 'unknown') => {
    setFormSource(source);
    setIsOpen(true);
    // Track with analytics if implemented
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        source: source,
      });
    }
  };

  const closeQuoteForm = () => {
    setIsOpen(false);
  };

  return (
    <QuoteFormContext.Provider value={{ isOpen, openQuoteForm, closeQuoteForm, formSource }}>
      {children}
    </QuoteFormContext.Provider>
  );
};

export const useQuoteForm = () => {
  const context = useContext(QuoteFormContext);
  if (!context) {
    throw new Error('useQuoteForm must be used within QuoteFormProvider');
  }
  return context;
};
