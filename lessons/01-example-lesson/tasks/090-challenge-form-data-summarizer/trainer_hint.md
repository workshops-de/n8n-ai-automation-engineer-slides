# Trainer Hints

## Key Points for Delivery

### Preparation

1. **Create Google Sheet Template**: Prepare a sample sheet that participants can copy
2. **Check API Keys**: Ensure all participants have access to an AI Model (e.g., via Anthropic, Google, etc.)
3. **Demo Applications**: Have 2-3 realistic sample applications ready

### Common Pitfalls

#### 1. Tool Schema Syntax
Participants often forget:
- The `type: "object"` at root level
- To define the `required` fields
- Correct JSON Schema syntax (especially for arrays)

**Tip**: Show the tool schema in JSON format and briefly explain JSON Schema basics.

#### 2. AI Agent Tool Output
The output of the AI Agent must be mapped correctly:
- If the tool was called, the data is in `$json.tool_output` or directly in `$json`
- Check the actual structure in the Node Output!

#### 3. Field Mapping in Google Sheets
- Array fields (strengths, weaknesses) must be joined with `.join()` or `.join(', ')`
- Pay attention to correct node referencing: `$('n8n Form Trigger').item.json.field`

### Time Management

- **15 Min**: Form + AI Agent Setup
- **10 Min**: Google Sheets Integration
- **5 Min**: Testing and Debugging

### Advanced Discussion Points

After the exercise you can discuss:

1. **Bias in AI Evaluations**
   - How do we avoid unfair evaluations?
   - Should AI decide alone or only assist?
   - What about names, gender, age?

2. **Data Privacy (GDPR)**
   - Applicant data is sensitive
   - Where is the data stored?
   - How long can it be retained?

3. **Quality Assurance**
   - How do you test AI evaluations?
   - Should a human review every evaluation?
   - What metrics show good/bad evaluations?

4. **Scaling**
   - What about 1000 applications per day?
   - Rate limits of AI APIs
   - Cost per application

### Bonus Challenges (if time allows)

1. **Automatic Response Email**: Add an Email Node that automatically notifies applicants
2. **Multi-Language Support**: Applications in different languages
3. **CV Parsing**: Integration of a PDF parser for uploaded resumes
4. **Ranking**: Automatically sort applicants by score in a separate sheet tab

### Troubleshooting Checklist

- [ ] Is the AI Agent connected to a model?
- [ ] Is the tool schema valid JSON Schema?
- [ ] Is the tool shown in the agent output?
- [ ] Are Google Sheets credentials configured?
- [ ] Does the sheet exist and are the columns correctly named?
- [ ] Are all field mappings correct (no typos)?
