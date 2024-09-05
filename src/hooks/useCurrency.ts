import { createContext, useContext } from "react";

export interface CurrencyContextType {
    sourceCurrency: string;
    targetCurrency: string;
    amount: string;
    convertedAmount: string;
    error: string;
    setSourceCurrency: (currency: string) => void;
    setTargetCurrency: (currency: string) => void;
    setAmount: (amount: string) => void;
  }

export const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const useCurrency = (): CurrencyContextType => {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
      throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
  };