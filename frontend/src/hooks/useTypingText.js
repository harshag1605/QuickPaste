import { useEffect, useState } from 'react';

const TYPING_INTERVAL = 24;
const PAUSE_DURATION = 1200;

export default function useTypingText(text) {
  const [value, setValue] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!isDeleting && value.length < text.length) {
      timeoutId = setTimeout(() => {
        setValue(text.slice(0, value.length + 1));
      }, TYPING_INTERVAL);
    } else if (!isDeleting && value.length === text.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_DURATION);
    } else if (isDeleting && value.length > 0) {
      timeoutId = setTimeout(() => {
        setValue(text.slice(0, value.length - 1));
      }, 14);
    } else {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
      }, 260);
    }

    return () => clearTimeout(timeoutId);
  }, [isDeleting, text, value]);

  return value;
}
