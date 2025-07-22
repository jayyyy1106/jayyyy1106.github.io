
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Bot, HelpCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const Support = () => {
  // FAQ Data
  const faqItems = [
    {
      question: "How do I invite the bot to my server?",
      answer: "Click the 'Invite Bot' button on our website, then select your server from the dropdown menu and authorize the requested permissions. You need 'Manage Server' permissions to add a bot to a Discord server.",
    },
    {
      question: "What permissions does the bot need?",
      answer: "The specific permissions depend on which features you want to use. For basic functionality, the bot needs 'Read Messages', 'Send Messages', and 'Embed Links'. For moderation features, it requires additional permissions like 'Kick Members', 'Ban Members', and 'Manage Messages'. You can view a detailed permissions list in our setup guide.",
    },
    {
      question: "The bot isn't responding to commands. What should I do?",
      answer: "First, check that the bot is online in your server's member list. Then, verify that the bot has the necessary permissions to read and send messages in the channel you're using. Also, make sure you're using the correct prefix (default is '/'). If issues persist, try re-inviting the bot or joining our support server for help.",
    },
    {
      question: "How do I change the bot's prefix?",
      answer: "You can change the prefix using the command '/prefix set [new_prefix]'. For example, '/prefix set !' would change the prefix to '!'. Only server administrators can change the prefix.",
    },
    {
      question: "Can I use the bot in multiple servers?",
      answer: "Yes, you can add Discord Bot - All In One to as many servers as you like. Each server will have its own separate configuration and settings.",
    },
    {
      question: "Is there a premium version of the bot?",
      answer: "Currently, all features are available for free. We may introduce premium features in the future, but our core functionality will always remain free to use.",
    },
    {
      question: "How do I set up auto-moderation?",
      answer: "Use the '/automod setup' command to start the interactive setup process. This will guide you through configuring filters for spam, inappropriate content, excessive caps, and more. You can fine-tune settings with '/automod filter [filter_name] [enable/disable] [punishment]'.",
    },
    {
      question: "How do I report a bug or suggest a feature?",
      answer: "You can report bugs or suggest features by joining our support server and using the appropriate channels. Alternatively, you can use the contact form on our website or open an issue on our GitHub repository if the project is open-source.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Need
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-botBlue to-botBlue-dark mx-2">
                Help?
              </span>
              We've Got You
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions or get support from our community and team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="glass-card rounded-xl overflow-hidden">
              {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="px-6 hover:bg-muted/50 hover:no-underline">
                    <div className="flex items-center gap-2 text-left">
                      <HelpCircle className="h-5 w-5 text-botBlue shrink-0" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-4">
                    <div className="pl-7">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Support Option 1 */}
            <div className="glass-card rounded-xl p-6 text-center flex flex-col hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-botBlue/20 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-botBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Join Discord Server</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Join our community support server to get help from other users and our support team.
              </p>
              <Button
                className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white font-medium shadow-lg shadow-botBlue/25 btn-glow w-full"
              >
                Join Support Server
              </Button>
            </div>
            
            {/* Support Option 2 */}
            <div className="glass-card rounded-xl p-6 text-center flex flex-col hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-botBlue/20 flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-botBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentation</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Browse our comprehensive documentation to learn about commands and features.
              </p>
              <Button
                variant="outline"
                className="neon-border w-full"
                asChild
              >
                <a href="/docs">
                  Read Docs <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            {/* Support Option 3 */}
            <div className="glass-card rounded-xl p-6 text-center flex flex-col hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-botBlue/20 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-botBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Contact Support</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Need direct help? Contact our support team through the contact form.
              </p>
              <Button
                variant="outline"
                className="neon-border w-full"
                asChild
              >
                <a href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
              <p className="text-muted-foreground mb-6">
                Watch step-by-step video guides on setting up and using Discord Bot - All In One.
              </p>
              <div className="rounded-lg overflow-hidden bg-gray-800 aspect-video flex items-center justify-center">
                <div className="text-white">Video Thumbnail</div>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
              <p className="text-muted-foreground mb-4">
                Quick solutions to the most commonly encountered problems:
              </p>
              <ul className="space-y-3">
                <li className="bg-muted rounded-lg p-3">
                  <span className="font-medium">Bot doesn't respond</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Check permissions and ensure the bot is online
                  </p>
                </li>
                <li className="bg-muted rounded-lg p-3">
                  <span className="font-medium">Commands not working</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Verify you're using the correct prefix and syntax
                  </p>
                </li>
                <li className="bg-muted rounded-lg p-3">
                  <span className="font-medium">Moderation actions failing</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    Ensure the bot's role is positioned above the user roles it needs to moderate
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
