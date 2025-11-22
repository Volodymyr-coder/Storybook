import { useEffect, useState } from 'react';
import css from './toast.module.css';

type ToastProps = {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onDismiss: () => void;
};

export const Toast = ({
  message,
  type = 'info',
  duration = 3000,
  onDismiss
}: ToastProps) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (exiting && e.animationName === 'toastExit') {
      onDismiss();
    }
  };

  return (
    <div
      className={`${css.toast} ${
        css[`toast${type.charAt(0).toUpperCase() + type.slice(1)}`]
      } ${exiting ? css.toastExit : css.toastEnter}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {message}
    </div>
  );
};
