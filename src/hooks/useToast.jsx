import { useEffect, useState } from 'react';

const useToast = () => {
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState(false);
  const [duration, setDuration] = useState(3000);

  const showToast = (message, duration = 3000) => {
    setMessage(message);
    setDuration(duration);
    setToast(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
      setMessage('');
      setDuration(3000);
    }, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return { toast, message, showToast };
};

export default useToast;
