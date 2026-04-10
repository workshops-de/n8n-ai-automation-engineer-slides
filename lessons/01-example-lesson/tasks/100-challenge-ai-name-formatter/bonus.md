# Bonus Challenges

## 1. Theme-Based Nicknames

Extend the chat with theme selection:
- Add to the System Prompt: "The user can specify a theme (e.g., 'Space', 'Superheroes', 'Medieval')"
- The AI Agent should ask for a theme if none was given
- Save the theme as an additional field in Google Sheets

**Example Chat:**
```
User: "Max Mustermann, Theme: Space"
Bot: "🚀 Your Space Nickname: Captain Maximus the Star Wanderer!"
```

## 2. Multiple Variants to Choose From

Have the AI Agent generate 3 different nickname options:
- The AI Agent presents all 3 options
- The user selects one (e.g., "Option 1")
- Only the chosen one is saved

**Example:**
```
🎲 3 Nickname Options for "Anna Smith":
1. The Smithinator
2. Anna-Banana
3. Lightning Smith

Which one do you like best? (1, 2 or 3)
```

## 3. Personality Integration

Add a personality field:
- The user can optionally specify a personality: "funny", "serious", "creative", "sporty"
- The AI Agent adapts the nickname style to the personality
- Save the personality in Google Sheets

**Example:**
```
User: "Lisa Webb, funny"
Bot: "😂 Your funny nickname: Web-Grill-Lisa (Always hot for a party!)"
```

## 4. Rating System

Implement a rating system:
- After each nickname the bot asks: "Do you like the nickname? 👍 or 👎"
- The user responds with emoji or "yes"/"no"
- Save the rating in Google Sheets
- Bonus: With 👎 the AI Agent generates a new nickname

## 5. Statistics Dashboard

Create a second Google Sheet tab "Statistics":
- Number of nicknames generated per day
- Average ratings
- Most popular themes
- Most common names

Use a **Google Sheets Formula** or an additional **Schedule Trigger** that updates the stats daily.

## 6. Multi-Language Support

Extend the bot with multilingual support:
- The user can choose the language: "German", "English", "Spanish"
- The AI Agent responds in the chosen language
- Nicknames are generated language-specifically

**Example:**
```
User: "English: John Smith"
Bot: "🎉 Your Nickname: The Smithsonian (Like the museum, unforgettable!)"
```

## 7. Nickname History

Show the last 5 nicknames in the chat:
- Add a **Google Sheets Read** Node before the AI Agent
- Read the last 5 entries
- The AI Agent can see which nicknames were already generated
- Prevents duplicates and can spot trends

**Example:**
```
Bot: "I've already created 5 space-themed nicknames today - you love outer space! 🚀"
```
