# Trainer Hints

## Key Points for Delivery

### Preparation

1. **Google Sheet Template**: Create a prepared sheet that participants can copy
2. **Chat URL Demo**: Show live how to find and open the Chat URL
3. **Tool Schema Template**: Have the JSON Schema ready for copy-paste
4. **AI Model Access**: Ensure everyone has access

### Common Pitfalls

#### 1. Tool Not Being Called

This is the most common error! Causes:
- **System Prompt too weak**: "ALWAYS use the tool" must be explicitly included
- **Tool Schema Error**: JSON Schema must be 100% valid
- **Wrong Model**: Not all models are good at tool use

**Solution**: Show live how to check whether the tool was called (in the AI Agent Output)

#### 2. Chat Trigger Confusion

Participants often don't understand:
- The workflow must be **activated** (not just saved)
- The Chat URL doesn't change, even after modifications
- You can open the chat in a new tab for testing

**Tip**: Clearly show the difference between "Save" and "Activate"

#### 3. Google Sheets Mapping

Common errors:
- Wrong references: `$json.original_name` instead of `$('AI Agent').item.json.original_name`
- Node renamed, but references not updated
- Assumption that data is always there (the tool might not have been called)

### Time Management

- **5 Min**: Chat Trigger Setup and Demo
- **10 Min**: Configure AI Agent with Tool
- **5 Min**: Google Sheets Integration
- **5 Min**: Testing and Troubleshooting

### Demo Tips

Show live:
1. **Chat Trigger Setup**: How quickly you can create a chat
2. **Tool Definition**: Write the JSON Schema live or copy-paste
3. **System Prompt Importance**: Show what happens when you leave out "ALWAYS use tool"
4. **Debug Workflow**: How to check whether the tool was called
5. **Google Sheets**: Show live update during testing

### Advanced Discussion Points

After the exercise:

1. **Tool-Use vs. Prompt-Only**
   - When should you use tools?
   - Advantages: Structured output, validation
   - Disadvantages: Complexity, not all models support it well

2. **Chat State Management**
   - How does the chat maintain context?
   - Using session IDs
   - Multi-Turn Conversations

3. **Creativity vs. Consistency**
   - How do you control AI creativity?
   - Temperature settings
   - Few-shot examples in the prompt

4. **Production Considerations**
   - Rate limits with many simultaneous chats
   - Cost per chat message
   - Error handling: What if the AI Agent doesn't respond?

### Bonus Challenges (if time allows)

1. **Theme Selection**: User can choose theme (Space, Superheroes, Medieval)
2. **Multiple Variants**: AI generates 3 nicknames to choose from
3. **Personality**: Additional field for personality type
4. **Rating System**: Users can rate nicknames (👍/👎)
5. **Statistics**: Separate sheet with statistics (How many nicknames per day?)

### Troubleshooting Checklist

- [ ] Is the workflow activated (not just saved)?
- [ ] Is the tool schema valid JSON?
- [ ] Does "ALWAYS use tool" appear in the System Prompt?
- [ ] Is the AI Agent connected to a model?
- [ ] Is the tool shown in the AI Agent Output?
- [ ] Are Google Sheets credentials configured?
- [ ] Are the field mappings correct?
- [ ] Was the chat actually tested (not just the workflow executed)?

### Alternative Approaches

If tool use is too complicated:
- **Simplification**: AI only returns the nickname (without tool)
- **Regex Parsing**: Parse the AI response with regex instead of tool
- **Structured Output**: Use JSON Output Mode (some models)

### Model Recommendations

Best for tool use:
- GPT-4 (very reliable)
- Claude Sonnet 3.5+ (excellent)
- GPT-3.5-Turbo (okay, sometimes inconsistent)

Less suitable:
- Older or smaller models
- Models without Tool/Function Calling support
