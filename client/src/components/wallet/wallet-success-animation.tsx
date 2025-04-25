import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WalletSuccessAnimationProps {
  address: string;
  onAnimationComplete?: () => void;
}

export const WalletSuccessAnimation: React.FC<WalletSuccessAnimationProps> = ({ 
  address,
  onAnimationComplete 
}) => {
  const [stage, setStage] = useState(0);
  
  useEffect(() => {
    // Progress through animation stages
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => {
      setStage(3);
      if (onAnimationComplete) {
        setTimeout(onAnimationComplete, 1000);
      }
    }, 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onAnimationComplete]);
  
  return (
    <AnimatePresence>
      <div className="relative w-full h-64 flex flex-col items-center justify-center">
        {/* Circle Background */}
        <motion.div 
          className="absolute w-32 h-32 bg-primary-50 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Connection line animation */}
        {stage >= 1 && (
          <motion.div 
            className="absolute w-full max-w-xs h-1 bg-gradient-to-r from-primary-200 via-primary-500 to-primary-300"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
        
        {/* Success checkmark */}
        {stage >= 2 && (
          <motion.div
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.7 }}
          >
            <div className="h-16 w-16 rounded-full bg-primary-500 flex items-center justify-center">
              <Check className="h-10 w-10 text-white" />
            </div>
          </motion.div>
        )}
        
        {/* Connected address animation */}
        {stage >= 3 && (
          <motion.div
            className="absolute bottom-0 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-medium mb-1">Wallet Connected Successfully</p>
            <div className="flex items-center justify-center text-sm text-neutral-600">
              <ShieldCheck className="h-4 w-4 mr-1 text-green-500" />
              <span className="font-mono">
                {address.substring(0, 6)}...{address.substring(address.length - 4)}
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};