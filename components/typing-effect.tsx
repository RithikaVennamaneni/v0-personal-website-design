"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  texts: string[]
  className?: string
}

export function TypingEffect({ texts, className = "" }: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex]

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(150)

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(75)

        if (currentText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed])

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
