"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

export default function TypewriterText({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetween = 2000,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentDisplayText, setCurrentDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentDisplayText(currentDisplayText.slice(0, -1));
        if (currentDisplayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          timeout = setTimeout(animateText, typingSpeed);
        } else {
          timeout = setTimeout(animateText, deletingSpeed);
        }
      } else {
        if (currentDisplayText.length < currentText.length) {
          setCurrentDisplayText(
            currentText.slice(0, currentDisplayText.length + 1),
          );
          timeout = setTimeout(animateText, typingSpeed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }
    };

    timeout = setTimeout(animateText, typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentDisplayText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetween,
  ]);

  return (
    <span className="text-secondary font-mono">
      {currentDisplayText}
      <span className="animate-pulse">_</span>
    </span>
  );
}
