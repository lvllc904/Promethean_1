import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// Components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle2 } from "lucide-react";

// Validation schema for the feedback form
const feedbackSchema = z.object({
  userId: z.number().default(1), // Default to user 1 for demo
  content: z.string().min(10, "Please provide at least 10 characters of feedback"),
  rating: z.string().min(1, "Please select a rating"),
  category: z.string().min(1, "Please select a category"),
});

type FeedbackFormValues = z.infer<typeof feedbackSchema>;

// Rating and category options
const ratingOptions = [
  { value: "1", label: "1 - Poor" },
  { value: "2", label: "2 - Below Average" },
  { value: "3", label: "3 - Average" },
  { value: "4", label: "4 - Good" },
  { value: "5", label: "5 - Excellent" },
];

const categoryOptions = [
  { value: "platform", label: "Platform Experience" },
  { value: "property", label: "Property Listings" },
  { value: "dao", label: "DAO Governance" },
  { value: "marketplace", label: "Marketplace" },
  { value: "other", label: "Other" },
];

export default function FeedbackPage() {
  const { toast } = useToast();
  
  // Query to fetch existing reviews (optional, for demonstration)
  const { data: reviews = [], isLoading: isLoadingReviews } = useQuery<any[]>({
    queryKey: ['/api/reviews'],
    enabled: true,
  });
  
  // Form setup
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      userId: 1, // Default user ID for demo
      content: "",
      rating: "",
      category: "",
    },
  });
  
  const { formState } = form;
  const { isSubmitting } = formState;

  const onSubmit = async (data: FeedbackFormValues) => {
    try {
      // Convert rating to number
      const submitData = {
        ...data,
        rating: parseInt(data.rating),
      };
      
      // Submit the review
      await apiRequest('POST', '/api/reviews', submitData);

      // Show success toast
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! Your insights help us improve the platform.",
        variant: "default",
      });

      // Reset the form
      form.reset({
        userId: 1,
        content: "",
        rating: "",
        category: "",
      });
      
      // Invalidate reviews query to refresh the list
      queryClient.invalidateQueries({ queryKey: ['/api/reviews'] });
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your feedback. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container py-10 max-w-3xl mx-auto">
      <div className="space-y-10">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter">
            Share Your Feedback
          </h1>
          <p className="text-muted-foreground">
            Your feedback helps shape the future of our platform through our AI-driven governance system.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Feedback Form</CardTitle>
            <CardDescription>
              All feedback is analyzed by our AI system to generate platform improvements and governance proposals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select 
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categoryOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rating</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a rating" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {ratingOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Share your thoughts, suggestions, or concerns about the platform..."
                          className="min-h-32 resize-y"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Feedback"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Display recent reviews (optional) */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Community Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoadingReviews ? (
              <div className="flex justify-center items-center py-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.slice(0, 5).map((review: any) => (
                  <div key={review.id} className="border rounded-lg p-4">
                    <div className="flex justify-between">
                      <div className="font-medium">Category: {review.category || "Uncategorized"}</div>
                      <div className="text-sm text-muted-foreground">
                        Rating: {review.rating}/5
                      </div>
                    </div>
                    <div className="mt-2">{review.content}</div>
                    {review.processed && (
                      <div className="mt-2 flex items-center text-sm text-green-600">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        Processed by AI
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No feedback submissions yet. Be the first to share your thoughts!
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}