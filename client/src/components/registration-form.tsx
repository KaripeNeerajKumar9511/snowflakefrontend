import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEnrollmentSchema } from "@shared/schema";
import type { InsertEnrollment } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Send, Shield, CheckCircle } from "lucide-react";

export default function RegistrationForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertEnrollment>({
    resolver: zodResolver(insertEnrollmentSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: undefined,
    },
  });

  const enrollmentMutation = useMutation({
    mutationFn: async (data: InsertEnrollment) => {
      const response = await apiRequest("POST", "/api/enrollments", data);
      return response.json();
    },
    onSuccess: (data) => {
      setShowSuccess(true);
      form.reset();
      toast({
        title: "Enrollment Successful!",
        description: "You will receive a confirmation email shortly.",
      });
    },
    onError: (error: any) => {
      console.error("Enrollment error:", error);
      toast({
        title: "Enrollment Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertEnrollment) => {
    enrollmentMutation.mutate(data);
  };

  if (showSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-border">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              Your enrollment has been submitted successfully. You will receive a confirmation email shortly.
            </p>
            <Button
              onClick={() => setShowSuccess(false)}
              variant="outline"
              className="w-full"
              data-testid="button-submit-another"
            >
              Submit Another Enrollment
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id="registration-form" className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-border">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-foreground mb-2">Enroll Now</CardTitle>
        <p className="text-muted-foreground">Start your Snowflake journey today</p>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      {...field}
                      data-testid="input-fullName"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      {...field}
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      {...field}
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Experience Level *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-experience">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                      <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                      <SelectItem value="senior">Senior (3-7 years)</SelectItem>
                      <SelectItem value="expert">Expert (7+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground py-4 text-lg hover:bg-primary/90 transition-all transform hover:scale-[1.02]"
              disabled={enrollmentMutation.isPending}
              data-testid="button-submit-enrollment"
            >
              {enrollmentMutation.isPending ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Reserve Your Seat
                </>
              )}
            </Button>
          </form>
        </Form>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <Shield className="w-4 h-4 inline mr-1" />
          Your information is secure and confidential
        </div>
      </CardContent>
    </Card>
  );
}
