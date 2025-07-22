
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Bot, Check, Settings, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const SetupGuide = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-botBlue to-botBlue-dark ml-2">
                Discord Bot
              </span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Follow this step-by-step guide to add and configure Discord Bot - All In One to your server.
            </p>
          </div>
        </div>
      </section>

      {/* Setup Steps */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <Tabs defaultValue="invite" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="invite">1. Invite</TabsTrigger>
              <TabsTrigger value="permissions">2. Permissions</TabsTrigger>
              <TabsTrigger value="configuration">3. Configuration</TabsTrigger>
              <TabsTrigger value="commands">4. Commands</TabsTrigger>
            </TabsList>
            
            {/* Step 1: Invite */}
            <TabsContent value="invite" className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-botBlue flex items-center justify-center mr-3 text-white">1</span>
                  Invite the Bot
                </h2>
                <p className="mb-6">
                  First, you'll need to invite Discord Bot - All In One to your server. Click the button below to start the invitation process.
                </p>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-botBlue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Click "Invite Bot"</h3>
                      <p className="text-muted-foreground mb-4">
                        Click the button below to open Discord's OAuth2 authorization page.
                      </p>
                      <Button
                        className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white font-medium shadow-lg btn-glow"
                      >
                        Invite Bot
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-botBlue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Select Your Server</h3>
                      <p className="text-muted-foreground mb-4">
                        From the dropdown menu, select the server you want to add the bot to. You must have "Manage Server" permissions.
                      </p>
                      <div className="glass-card rounded-lg overflow-hidden">
                        <div className="bg-botBlue-dark p-2 text-sm text-center text-white">
                          Discord OAuth2 Preview
                        </div>
                        <div className="p-4 bg-gray-900">
                          <div className="mb-3 text-white">
                            <strong>Add to Server</strong>
                          </div>
                          <div className="bg-gray-800 p-2 rounded flex items-center justify-between text-white text-sm mb-3">
                            <span>Select a server...</span>
                            <ChevronDownIcon className="h-4 w-4" />
                          </div>
                          <Button
                            className="w-full bg-botBlue text-white text-sm"
                            size="sm"
                          >
                            Continue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-botBlue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Authorize Permissions</h3>
                      <p className="text-muted-foreground mb-4">
                        Review the permissions that the bot requires to function properly and click "Authorize" to continue.
                      </p>
                      <div className="glass-card rounded-lg p-4 bg-gray-800 text-white">
                        <p className="text-center mb-2">Discord Bot - All In One would like permission to:</p>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-400" /> 
                            <span>View channels</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-400" /> 
                            <span>Send messages</span>
                          </li>
                          <li className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-green-400" /> 
                            <span>Moderate members</span>
                          </li>
                        </ul>
                        <Button className="w-full bg-botBlue text-white text-sm">Authorize</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Step 2: Permissions */}
            <TabsContent value="permissions" className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-botBlue flex items-center justify-center mr-3 text-white">2</span>
                  Set Up Permissions
                </h2>
                <p className="mb-6">
                  After inviting the bot, you'll need to ensure it has the proper permissions to function in your server.
                </p>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-botBlue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Check Bot's Role Position</h3>
                      <p className="text-muted-foreground mb-4">
                        For moderation features to work properly, the bot's role needs to be above the roles it will moderate.
                      </p>
                      <div className="p-4 bg-muted rounded-lg">
                        <p className="font-medium mb-2">Server Settings → Roles</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between p-2 bg-gray-800 text-white rounded">
                            <span>Admin</span>
                            <span>Highest</span>
                          </div>
                          <div className="flex justify-between p-2 bg-botBlue/80 text-white rounded">
                            <span>Discord Bot - All In One</span>
                            <span>↑ This should be high in the list</span>
                          </div>
                          <div className="flex justify-between p-2 bg-gray-700 text-white rounded">
                            <span>Moderator</span>
                            <span></span>
                          </div>
                          <div className="flex justify-between p-2 bg-gray-600 text-white rounded">
                            <span>Members</span>
                            <span>Lowest</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Settings className="w-5 h-5 text-botBlue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Channel Permissions</h3>
                      <p className="text-muted-foreground mb-4">
                        Make sure the bot has access to the channels where you want it to operate.
                      </p>
                      <div className="space-y-3 bg-muted p-4 rounded-lg">
                        <p className="font-medium">Essential Permissions by Feature:</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Moderation</span>
                            <span className="text-green-500">Kick Members, Ban Members, Manage Messages</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Logging</span>
                            <span className="text-green-500">View Audit Log, Send Messages in log channels</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Welcome/Farewell</span>
                            <span className="text-green-500">Send Messages in welcome channel</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span>Role Management</span>
                            <span className="text-green-500">Manage Roles (below its own role)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Step 3: Configuration */}
            <TabsContent value="configuration" className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-botBlue flex items-center justify-center mr-3 text-white">3</span>
                  Basic Configuration
                </h2>
                <p className="mb-6">
                  Now, let's configure the basic settings for the bot to customize it for your server.
                </p>
                
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Bot className="w-5 h-5 text-botBlue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Initial Setup Command</h3>
                      <p className="text-muted-foreground mb-4">
                        Run the setup command to start the configuration process:
                      </p>
                      <div className="p-4 bg-gray-800 text-white rounded-md font-mono mb-4">
                        /setup
                      </div>
                      <p className="text-muted-foreground mb-4">
                        This will launch an interactive setup wizard that will guide you through configuring:
                      </p>
                      <ul className="space-y-2 ml-6">
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-botBlue" /> 
                          <span>Prefix settings (default is /)</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-botBlue" /> 
                          <span>Admin and moderator roles</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-botBlue" /> 
                          <span>Logging channels</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="mr-2 h-4 w-4 text-botBlue" /> 
                          <span>Welcome/farewell message settings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Settings className="w-5 h-5 text-botBlue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Module Configuration</h3>
                      <p className="text-muted-foreground mb-4">
                        Enable or disable specific bot modules based on your server's needs:
                      </p>
                      <div className="p-4 bg-gray-800 text-white rounded-md font-mono mb-4">
                        /modules
                      </div>
                      <div className="bg-muted p-4 rounded-lg space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Moderation</span>
                          <span className="text-green-500">Enabled</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Logging</span>
                          <span className="text-green-500">Enabled</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Welcome System</span>
                          <span className="text-green-500">Enabled</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Economy</span>
                          <span className="text-yellow-500">Disabled</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Games</span>
                          <span className="text-yellow-500">Disabled</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Step 4: Commands */}
            <TabsContent value="commands" className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-botBlue flex items-center justify-center mr-3 text-white">4</span>
                  Start Using Commands
                </h2>
                <p className="mb-6">
                  You're all set up! Here are some basic commands to get you started with Discord Bot - All In One.
                </p>
                
                <div className="space-y-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">Essential Commands</h3>
                    <div className="space-y-3">
                      <div className="flex flex-col">
                        <code className="bg-gray-800 text-white p-2 rounded">/help</code>
                        <p className="text-muted-foreground mt-1 text-sm">
                          Shows the list of all available commands and categories.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <code className="bg-gray-800 text-white p-2 rounded">/help [category]</code>
                        <p className="text-muted-foreground mt-1 text-sm">
                          Shows detailed help for a specific category, e.g. /help moderation.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <code className="bg-gray-800 text-white p-2 rounded">/settings</code>
                        <p className="text-muted-foreground mt-1 text-sm">
                          View and modify your current server settings.
                        </p>
                      </div>
                      <div className="flex flex-col">
                        <code className="bg-gray-800 text-white p-2 rounded">/ping</code>
                        <p className="text-muted-foreground mt-1 text-sm">
                          Check if the bot is responsive and view latency.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Next Steps</h3>
                    <p className="text-muted-foreground mb-4">
                      Now that you've got the basics set up, you can:
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-botBlue mt-0.5" /> 
                        <div>
                          <span className="font-medium">Configure advanced features</span>
                          <p className="text-muted-foreground text-sm">
                            Explore auto-moderation, custom commands, and more
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-botBlue mt-0.5" /> 
                        <div>
                          <span className="font-medium">Set up auto roles</span>
                          <p className="text-muted-foreground text-sm">
                            Automatically assign roles to new members when they join
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 h-5 w-5 text-botBlue mt-0.5" /> 
                        <div>
                          <span className="font-medium">Create custom welcome messages</span>
                          <p className="text-muted-foreground text-sm">
                            Personalize how the bot greets new members
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-botBlue to-botBlue-dark text-white font-medium shadow-lg shadow-botBlue/25 btn-glow"
                      asChild
                    >
                      <a href="/docs">
                        Explore Documentation
                      </a>
                    </Button>
                    <Button
                      size="lg" 
                      variant="outline"
                      className="neon-border"
                      asChild
                    >
                      <a href="/support">
                        Get Support <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default SetupGuide;
