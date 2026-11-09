# Bonus Challenges

## 1. Send Feedback via Email

Extend the workflow to automatically email the participant their results:
- Add a **Gmail** or **SMTP** Node after the AI Agent
- Use the participant's name and the AI feedback in the email body
- Subject: `Your Math Quiz Results, {{ $json.name }}!`

## 2. Add More Questions

Make the quiz harder by adding more questions:
- Subtraction: "What is 200 - 47?"
- Division: "What is 144 ÷ 12?"
- Mixed: "What is (5 × 6) + 3?"

Update the System Prompt with the new correct answers.

## 3. Leaderboard in Google Sheets

Track scores over time and build a leaderboard:
- Add a second tab "Leaderboard" to your sheet
- Sort participants by score using a Google Sheets formula
- Add conditional formatting: green for 3/3, yellow for 2/3, red below

## 4. Retry Option via Chat

Replace the n8n Form Trigger with a **Chat Trigger** and allow participants to retry:
- The AI keeps score across messages
- After 3 wrong attempts it reveals the correct answer
- Use **Simple Memory** so the agent remembers previous attempts

## 5. Randomized Questions

Use a **Code Node** before the AI Agent to randomly select questions from a pool:
- Define 10+ questions and their answers in the code
- Pick 3 at random per submission
- Pass both questions and answers to the AI Agent for evaluation

## 6. Score Certificate

When a participant scores 3/3, generate a "certificate" Google Doc:
- Add a **Google Docs** Node
- Create a document titled: `Perfect Score Certificate – {{ $json.name }}`
- Have the AI write a congratulatory paragraph to include in the doc
