
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock documentation data structure
const documentationData = {
  "Getting Started": {
    "Introduction": `
# Introduction to Discord Bot - All In One

Welcome to the official documentation for Discord Bot - All In One. This documentation will help you understand and utilize the full power of our bot in your Discord server.

## What is Discord Bot - All In One?

Discord Bot - All In One is a feature-rich Discord bot designed to provide server administrators with a comprehensive suite of tools for moderation, utility, fun, and more. Whether you're running a small community server or a large public one, our bot can help you manage and enhance your Discord experience.

## Key Features

- **Moderation**: Keep your server safe with powerful moderation tools
- **Utility**: Make server management easier with useful commands
- **Games**: Engage your community with fun games and activities
- **Logging**: Track everything happening in your server
- **And much more!**

## Getting Started

To get started with Discord Bot - All In One, you'll need to:

1. [Invite the bot](/setup) to your server
2. Set up permissions and configurations
3. Start using commands with the \`/\` prefix

Explore the sidebar to learn more about specific features and commands.
    `,
    "Quick Start Guide": `
# Quick Start Guide

This guide will help you get Discord Bot - All In One up and running on your server in just a few minutes.

## Step 1: Invite the Bot

Click the "Add to Discord" button on our website to invite the bot to your server. You'll need to have the "Manage Server" permission to add bots to a Discord server.

## Step 2: Set Up Basic Configuration

Once the bot is in your server, you can configure it using the following command:

\`\`\`
/setup
\`\`\`

This will guide you through the initial configuration process, including:

- Setting the prefix (default is /)
- Configuring moderator roles
- Setting up logging channels

## Step 3: Explore Commands

Discord Bot - All In One uses slash commands. To see all available commands, type:

\`\`\`
/help
\`\`\`

## Next Steps

- Check out the [Features](/features) page to learn about all the capabilities
- Read the [Documentation](/docs) to understand specific commands
- Join our [Support Server](/support) if you need help

Welcome to the Discord Bot - All In One community!
    `,
  },
  "Moderation": {
    "Basic Commands": `
# Basic Moderation Commands

Moderation is one of the core functionalities of Discord Bot - All In One. Here are the basic moderation commands you can use:

## User Management Commands

### Ban User

\`\`\`
/ban @user [reason] [delete_message_days]
\`\`\`

Permanently bans a user from the server.

- \`@user\`: The user to ban (mention or ID)
- \`reason\`: Optional reason for the ban
- \`delete_message_days\`: Number of days of messages to delete (0-7)

### Kick User

\`\`\`
/kick @user [reason]
\`\`\`

Kicks a user from the server (they can rejoin with an invite).

- \`@user\`: The user to kick (mention or ID)
- \`reason\`: Optional reason for the kick

### Warn User

\`\`\`
/warn @user [reason]
\`\`\`

Issues a warning to a user.

- \`@user\`: The user to warn (mention or ID)
- \`reason\`: Optional reason for the warning

### Mute User

\`\`\`
/mute @user [duration] [reason]
\`\`\`

Temporarily mutes a user in the server.

- \`@user\`: The user to mute (mention or ID)
- \`duration\`: Duration of the mute (e.g., 1h, 30m, 12h)
- \`reason\`: Optional reason for the mute

## Message Management

### Purge Messages

\`\`\`
/purge [amount] [user]
\`\`\`

Deletes a specified number of messages from a channel.

- \`amount\`: Number of messages to delete (1-100)
- \`user\`: Optional user to filter messages by

### Slowmode

\`\`\`
/slowmode [seconds]
\`\`\`

Sets the slowmode delay for the current channel.

- \`seconds\`: Slowmode delay in seconds (0-21600)
    `,
    "Advanced Settings": `
# Advanced Moderation Settings

Discord Bot - All In One offers advanced moderation features for server administrators who want more control over their communities.

## Auto-Moderation

Auto-moderation allows the bot to automatically detect and respond to rule violations without manual intervention.

### Setting Up Auto-Mod

\`\`\`
/automod setup
\`\`\`

This will guide you through the auto-moderation setup process.

### Auto-Mod Filters

You can enable or disable specific filters:

\`\`\`
/automod filter [filter_name] [enable/disable] [punishment]
\`\`\`

Available filters:
- \`spam\`: Detects message spam
- \`caps\`: Detects excessive capitalization
- \`links\`: Filters URLs based on allowlist/blocklist
- \`invites\`: Blocks Discord invite links
- \`words\`: Filters specific words or phrases
- \`mentions\`: Prevents mass mention spam
- \`emojis\`: Limits excessive emoji usage

### Custom Word Filter

\`\`\`
/wordfilter add [word]
/wordfilter remove [word]
/wordfilter list
\`\`\`

These commands allow you to manage the list of filtered words.

## Logging and Monitoring

### Setup Logging

\`\`\`
/logs setup [channel]
\`\`\`

Sets up logging for moderation actions in the specified channel.

### Configure Log Events

\`\`\`
/logs config [event] [enable/disable]
\`\`\`

Available events:
- \`mod\`: Moderation actions
- \`message\`: Message edits and deletions
- \`member\`: Member joins and leaves
- \`voice\`: Voice channel activities
- \`server\`: Server setting changes

## Automated Actions

### Set up Auto-Role

\`\`\`
/autorole set [role]
\`\`\`

Automatically assigns a role to new members when they join the server.

### Temporary Bans

\`\`\`
/tempban @user [duration] [reason]
\`\`\`

Bans a user for a specified duration, then automatically unbans them.

- \`@user\`: The user to temporarily ban
- \`duration\`: Ban duration (e.g., 1d, 7d, 30d)
- \`reason\`: Optional reason for the ban
    `,
  },
  "Utility": {
    "Role Management": `
# Role Management

Discord Bot - All In One provides comprehensive role management features to help you organize your server's permission structure.

## Basic Role Commands

### Create Role

\`\`\`
/role create [name] [color] [hoist] [mentionable]
\`\`\`

Creates a new role.

- \`name\`: The name of the new role
- \`color\`: The color for the role (hex code)
- \`hoist\`: Whether the role should be displayed separately (true/false)
- \`mentionable\`: Whether the role can be mentioned by everyone (true/false)

### Delete Role

\`\`\`
/role delete [role]
\`\`\`

Deletes an existing role.

- \`role\`: The role to delete (mention or ID)

### Modify Role

\`\`\`
/role modify [role] [option] [value]
\`\`\`

Modifies a role's settings.

- \`role\`: The role to modify (mention or ID)
- \`option\`: Setting to change (name, color, hoist, mentionable, position)
- \`value\`: New value for the setting

## Role Assignment

### Add Role to User

\`\`\`
/role add @user [role]
\`\`\`

Adds a role to a user.

- \`@user\`: The user to add the role to
- \`role\`: The role to add (mention or ID)

### Remove Role from User

\`\`\`
/role remove @user [role]
\`\`\`

Removes a role from a user.

- \`@user\`: The user to remove the role from
- \`role\`: The role to remove (mention or ID)

## Reaction Roles

Reaction roles allow users to self-assign roles by reacting to messages.

### Create Reaction Role

\`\`\`
/reactionrole create [channel] [message_id] [emoji] [role]
\`\`\`

Sets up a reaction role on an existing message.

- \`channel\`: The channel containing the message
- \`message_id\`: ID of the message to add reactions to
- \`emoji\`: The emoji users will react with
- \`role\`: The role to assign when users react

### Create Reaction Role Menu

\`\`\`
/reactionrole menu [title] [description] [roles...]
\`\`\`

Creates a new message with reaction role options.

- \`title\`: Title for the reaction role menu
- \`description\`: Description explaining the roles
- \`roles...\`: Pairs of emoji and role to include in the menu

### Remove Reaction Role

\`\`\`
/reactionrole remove [channel] [message_id] [emoji]
\`\`\`

Removes a reaction role from a message.

- \`channel\`: The channel containing the message
- \`message_id\`: ID of the message
- \`emoji\`: The emoji for the reaction role to remove
    `,
    "Embeds & Messages": `
# Embeds & Messages

Discord Bot - All In One allows you to create rich, customized embeds for announcements, rules, and other important messages.

## Creating Embeds

### Simple Embed

\`\`\`
/embed simple [title] [description] [color]
\`\`\`

Creates a basic embed message.

- \`title\`: Title of the embed
- \`description\`: Main content of the embed
- \`color\`: Color of the embed sidebar (hex code)

### Advanced Embed

\`\`\`
/embed create
\`\`\`

Opens an interactive embed builder with more options.

### Send Embed to Channel

\`\`\`
/embed send [channel] [message_id]
\`\`\`

Sends a saved embed to a specific channel.

- \`channel\`: The channel to send the embed to
- \`message_id\`: ID of the saved embed template

## Custom Messages

### Scheduled Messages

\`\`\`
/schedule message [channel] [time] [content]
\`\`\`

Schedules a message to be sent at a specific time.

- \`channel\`: The channel to send the message to
- \`time\`: When to send the message (format: YYYY-MM-DD HH:MM or relative time like "2h", "1d")
- \`content\`: The message content to send

### Recurring Messages

\`\`\`
/schedule recurring [channel] [interval] [content]
\`\`\`

Sets up a message to be sent repeatedly at set intervals.

- \`channel\`: The channel to send the message to
- \`interval\`: How often to send the message (e.g., "daily", "weekly", "monthly")
- \`content\`: The message content to send

### Welcome Messages

\`\`\`
/welcome message [message]
\`\`\`

Sets a custom welcome message for new members.

- \`message\`: The welcome message (can include variables like {user}, {server})

\`\`\`
/welcome channel [channel]
\`\`\`

Sets the channel for welcome messages.

- \`channel\`: The channel to send welcome messages in

### Farewell Messages

\`\`\`
/farewell message [message]
\`\`\`

Sets a custom message for when members leave.

- \`message\`: The farewell message (can include variables like {user}, {server})

\`\`\`
/farewell channel [channel]
\`\`\`

Sets the channel for farewell messages.

- \`channel\`: The channel to send farewell messages in

## Message Templates

\`\`\`
/template save [name] [content]
\`\`\`

Saves a message template for quick access later.

\`\`\`
/template load [name]
\`\`\`

Posts a saved message template in the current channel.

\`\`\`
/template list
\`\`\`

Shows all saved message templates.
    `,
  },
  "Games": {
    "Economy System": `
# Economy System

The Economy System allows server members to earn, spend, and manage virtual currency through various activities and games.

## Basic Economy Commands

### Check Balance

\`\`\`
/balance [user]
\`\`\`

Shows your currency balance or another user's balance.

- \`user\`: Optional user to check (defaults to yourself)

### Daily Reward

\`\`\`
/daily
\`\`\`

Claim your daily currency reward. This can be claimed once every 24 hours.

### Work for Currency

\`\`\`
/work
\`\`\`

Complete a small task to earn some currency. This can be used every few hours.

### Transfer Currency

\`\`\`
/transfer @user [amount]
\`\`\`

Send currency to another user.

- \`@user\`: The user to send currency to
- \`amount\`: How much currency to send

## Shop System

### View Shop

\`\`\`
/shop
\`\`\`

Displays items available for purchase in the server shop.

### Buy Item

\`\`\`
/buy [item] [quantity]
\`\`\`

Purchases an item from the shop.

- \`item\`: The name or ID of the item
- \`quantity\`: How many to buy (defaults to 1)

### Inventory

\`\`\`
/inventory [user]
\`\`\`

Shows your inventory or another user's inventory.

- \`user\`: Optional user to check (defaults to yourself)

## Admin Economy Commands

### Add Currency

\`\`\`
/economy add @user [amount]
\`\`\`

Adds currency to a user's balance (admin only).

- \`@user\`: The user to give currency to
- \`amount\`: How much currency to add

### Remove Currency

\`\`\`
/economy remove @user [amount]
\`\`\`

Removes currency from a user's balance (admin only).

- \`@user\`: The user to take currency from
- \`amount\`: How much currency to remove

### Create Shop Item

\`\`\`
/shop create [name] [price] [description] [role]
\`\`\`

Creates a new item in the shop (admin only).

- \`name\`: Name of the item
- \`price\`: Cost in currency
- \`description\`: Description of the item
- \`role\`: Optional role to give when purchased
    `,
    "Trivia & Polls": `
# Trivia & Polls

Engage your community with interactive trivia games and polls.

## Trivia Commands

### Start Trivia

\`\`\`
/trivia start [category] [difficulty] [time]
\`\`\`

Starts a trivia game in the current channel.

- \`category\`: Optional category (general, science, history, etc.)
- \`difficulty\`: Optional difficulty level (easy, medium, hard)
- \`time\`: Optional time limit in seconds (default: 30)

### Trivia Leaderboard

\`\`\`
/trivia leaderboard
\`\`\`

Shows the server's trivia leaderboard, displaying users with the most correct answers.

### Custom Trivia

\`\`\`
/trivia custom [question] [answer] [wrong1] [wrong2] [wrong3]
\`\`\`

Creates a custom trivia question.

- \`question\`: The question to ask
- \`answer\`: The correct answer
- \`wrong1-3\`: Incorrect answer options

## Poll Commands

### Quick Poll

\`\`\`
/poll quick [question]
\`\`\`

Creates a simple yes/no poll.

- \`question\`: The question for the poll

### Multiple Choice Poll

\`\`\`
/poll create [question] [options] [time]
\`\`\`

Creates a multiple-choice poll.

- \`question\`: The poll question
- \`options\`: Comma-separated list of options
- \`time\`: Optional duration in minutes (default: stays open until closed)

### Close Poll

\`\`\`
/poll close [message_id]
\`\`\`

Manually closes an active poll and displays results.

- \`message_id\`: ID of the poll message to close

## Giveaway Commands

### Create Giveaway

\`\`\`
/giveaway create [prize] [winners] [time] [channel]
\`\`\`

Starts a giveaway in the specified channel.

- \`prize\`: What is being given away
- \`winners\`: Number of winners to select
- \`time\`: Duration of the giveaway (e.g., 12h, 1d, 1w)
- \`channel\`: Channel to host the giveaway in

### End Giveaway

\`\`\`
/giveaway end [message_id]
\`\`\`

Ends a giveaway early and selects winners.

### Reroll Giveaway

\`\`\`
/giveaway reroll [message_id]
\`\`\`

Selects new winners for a completed giveaway.
    `,
  },
  "Logging": {
    "Setup & Configuration": `
# Logging Setup & Configuration

Discord Bot - All In One includes a comprehensive logging system that can track various activities in your server.

## Basic Setup

### Set Log Channel

\`\`\`
/logs channel [channel] [log_type]
\`\`\`

Sets the channel for a specific type of logs.

- \`channel\`: The channel to send logs to
- \`log_type\`: Type of logs to send (all, mod, messages, members, server)

### Enable/Disable Logging

\`\`\`
/logs toggle [log_type] [enable/disable]
\`\`\`

Enables or disables a specific type of logging.

- \`log_type\`: Type of logs to modify (all, mod, messages, members, server)
- \`enable/disable\`: Whether to turn this log type on or off

## Log Types Explained

### Moderation Logs

Tracks all moderation actions:
- Bans and unbans
- Kicks
- Mutes and unmutes
- Warns
- Message deletions by moderators

### Message Logs

Tracks message-related events:
- Message edits (shows before/after)
- Message deletions
- Bulk message deletions
- Image attachments (optional)

### Member Logs

Tracks member-related events:
- Joins and leaves
- Nickname changes
- Role changes
- Username/avatar updates

### Server Logs

Tracks server-wide changes:
- Channel creations/deletions/updates
- Role creations/deletions/updates
- Server setting changes
- Emoji and sticker updates

## Advanced Configuration

### Log Filters

\`\`\`
/logs filter [filter_type] [value]
\`\`\`

Configures filters for what gets logged.

- \`filter_type\`: Type of filter (user, channel, role)
- \`value\`: ID to filter (can be user, channel, or role ID)

### Log Format

\`\`\`
/logs format [format_type]
\`\`\`

Changes the format of log messages.

- \`format_type\`: Format to use (compact, detailed, embed)
    `,
  }
};

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Getting Started");
  const [selectedDoc, setSelectedDoc] = useState("Introduction");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "Getting Started": true,
    "Moderation": false,
    "Utility": false,
    "Games": false,
    "Logging": false,
  });
  
  // Function to toggle category expansion
  const toggleCategory = (category: string) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category],
    });
  };
  
  // Function to select a document
  const selectDocument = (category: string, doc: string) => {
    setSelectedCategory(category);
    setSelectedDoc(doc);
    
    // On mobile, close all categories except the one being viewed
    if (window.innerWidth < 768) {
      const newExpandedState = Object.keys(expandedCategories).reduce((acc, cat) => {
        acc[cat] = cat === category;
        return acc;
      }, {} as Record<string, boolean>);
      setExpandedCategories(newExpandedState);
    }
  };
  
  // Function to render markdown
  const renderMarkdown = (markdown: string) => {
    // Simple markdown rendering implementation
    // For a real app, use a library like react-markdown
    
    return (
      <div className="markdown">
        {markdown.split('\n').map((line, index) => {
          // Headers
          if (line.startsWith('# ')) {
            return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
          }
          if (line.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
          }
          if (line.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-semibold mt-5 mb-2">{line.substring(4)}</h3>;
          }
          
          // Code blocks
          if (line.startsWith('```')) {
            const codeBlock = [] as string[];
            let i = index + 1;
            while (i < markdown.split('\n').length && !markdown.split('\n')[i].startsWith('```')) {
              codeBlock.push(markdown.split('\n')[i]);
              i++;
            }
            return (
              <div key={index} className="bg-gray-800 rounded-md p-4 my-4 overflow-x-auto">
                <pre className="text-gray-100">
                  <code>{codeBlock.join('\n')}</code>
                </pre>
              </div>
            );
          }
          if (markdown.split('\n')[index - 1]?.startsWith('```') || 
              markdown.split('\n')[index + 1]?.startsWith('```')) {
            return null; // Skip the code block delimiters themselves
          }
          
          // Lists
          if (line.startsWith('- ')) {
            return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
          }
          
          // Line break or paragraph
          if (line.trim() === '') {
            return <div key={index} className="h-4"></div>;
          }
          
          // Default paragraph
          return <p key={index} className="mb-4">{line}</p>;
        })}
      </div>
    );
  };

  return (
    <div className="pt-20">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="md:w-80 w-full bg-muted/50 border-r dark:bg-gray-800/30 md:h-screen md:sticky top-20 overflow-y-auto">
          <div className="p-4 sticky top-0 bg-muted/50 dark:bg-gray-800/30 z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="p-4 space-y-1">
            {Object.keys(documentationData).map((category) => (
              <div key={category}>
                <button
                  onClick={() => toggleCategory(category)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2",
                    selectedCategory === category 
                      ? "bg-accent text-accent-foreground" 
                      : "hover:bg-accent/50 hover:text-accent-foreground"
                  )}
                >
                  <span className="font-medium">{category}</span>
                  {expandedCategories[category] ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                
                {expandedCategories[category] && (
                  <div className="mt-1 ml-4 space-y-1">
                    {Object.keys(documentationData[category as keyof typeof documentationData]).map((doc) => (
                      <button
                        key={doc}
                        onClick={() => selectDocument(category, doc)}
                        className={cn(
                          "w-full text-left rounded-md px-3 py-2 text-sm",
                          selectedCategory === category && selectedDoc === doc
                            ? "bg-botBlue/20 text-botBlue font-medium"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                        )}
                      >
                        {doc}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 px-4 md:px-8 py-6 overflow-auto pb-24">
          <div className="max-w-3xl mx-auto">
            {selectedCategory && selectedDoc && documentationData[selectedCategory as keyof typeof documentationData] && (
              <>
                {renderMarkdown(documentationData[selectedCategory as keyof typeof documentationData][selectedDoc as keyof typeof documentationData[keyof typeof documentationData]])}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
