import { useEffect } from "react";

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    let listener = (e) => {
      if (!ref.current.contains(e.target)) {
        handler(e);
      }
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}
