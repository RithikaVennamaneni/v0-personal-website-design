"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Feedback {
  id: string
  name: string
  message: string
  rating: number
  created_at: string
}

export function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  const supabase = createClient()

  // Fetch existing feedback on component mount
  useEffect(() => {
    fetchFeedback()

    // Set up real-time subscription
    const channel = supabase
      .channel("feedback_changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "feedback",
        },
        (payload) => {
          const newFeedback = payload.new as Feedback
          setFeedbacks((prev) => [newFeedback, ...prev])
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchFeedback = async () => {
    try {
      const { data, error } = await supabase.from("feedback").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setFeedbacks(data || [])
    } catch (error) {
      console.error("Error fetching feedback:", error)
      toast({
        title: "Error",
        description: "Failed to load feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { data, error } = await supabase
        .from("feedback")
        .insert({
          name: name.trim(),
          message: message.trim(),
          rating,
        })
        .select()
        .single()

      if (error) throw error

      // Add to local state immediately (real-time will also trigger, but this ensures immediate UI update)
      setFeedbacks((prev) => [data, ...prev])

      // Reset form
      setName("")
      setMessage("")
      setRating(5)

      toast({
        title: "Thank you!",
        description: "Your feedback has been submitted successfully.",
      })
    } catch (error) {
      console.error("Error submitting feedback:", error)
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
            className={`${interactive ? "cursor-pointer hover:scale-110 transition-transform" : "cursor-default"}`}
            disabled={!interactive}
          >
            <Star className={`w-5 h-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          </button>
        ))}
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <section id="feedback" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Feedback</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear your thoughts! Share your feedback about my work and portfolio.
          </p>
        </div>

        <Card className="mb-12 bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Share Your Feedback</CardTitle>
            <CardDescription>Your feedback helps me improve and grow professionally.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Rating</Label>
                  <div className="flex items-center gap-2">
                    {renderStars(rating, true, setRating)}
                    <span className="text-sm text-muted-foreground ml-2">
                      {rating} star{rating !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Share your thoughts about my work, portfolio, or any suggestions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting || !name.trim() || !message.trim()}
                className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-6">What Others Are Saying ({feedbacks.length})</h3>

          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">Loading feedback...</p>
            </div>
          ) : feedbacks.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No feedback yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {feedbacks.map((feedback) => (
                <Card key={feedback.id} className="bg-card/30 border-border hover:bg-card/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground">{feedback.name}</h4>
                        <p className="text-sm text-muted-foreground">{formatDate(feedback.created_at)}</p>
                      </div>
                      {renderStars(feedback.rating)}
                    </div>
                    <p className="text-foreground leading-relaxed">{feedback.message}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
