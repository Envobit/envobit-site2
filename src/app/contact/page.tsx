"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ServicesCrystal from "@/components/landing/services-crystal";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  website: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .optional()
    .or(z.literal("")),
  budget: z.string({ required_error: "Please select a budget." }),
  help: z
    .array(z.string())
    .nonempty({ message: "Please select at least one option." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const helpOptions = [
  "Product",
  "No-code",
  "Low-code",
  "Development",
  "Automation",
  "DevOps",
  "AI",
  "Other",
];

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      help: [],
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset({
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      budget: undefined,
      help: ["Low-code", "Development"],
      message: "",
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <ServicesCrystal />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <h1 className="font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                  <span className="text-muted-foreground/50">Ready to </span>
                  <span className="text-accent">start</span>
                  <span> your project?</span>
                </h1>
              </div>

              <div className="mt-16">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input {...field} />
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
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Select a Budget *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="< $10k">
                                  &lt; $10,000
                                </SelectItem>
                                <SelectItem value="$10k-$50k">
                                  $10,000 - $50,000
                                </SelectItem>
                                <SelectItem value="$50k-$100k">
                                  $50,000 - $100,000
                                </SelectItem>
                                <SelectItem value="> $100k">
                                  &gt; $100,000
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="help"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How can we help you? *</FormLabel>
                          <FormControl>
                            <ToggleGroup
                              type="multiple"
                              variant="outline"
                              className="flex flex-wrap justify-start gap-2"
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              {helpOptions.map((option) => (
                                <ToggleGroupItem
                                  key={option}
                                  value={option}
                                  className="rounded-full data-[state=on]:bg-foreground data-[state=on]:text-background"
                                >
                                  {option}
                                </ToggleGroupItem>
                              ))}
                            </ToggleGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[150px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        variant="outline"
                        className="rounded-full"
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
