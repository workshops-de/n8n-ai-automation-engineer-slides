# Trainer Notes

## Key Teaching Points

- Emphasize that Simple Vector Store is for learning/testing only
- Explain the difference between in-memory and persistent storage
- Show how memory keys work globally across the instance
- Demonstrate what happens when you restart N8N (data loss)

## Common Issues

- **Documents not found**: Usually wrong memory key name
- **Empty results**: Check that embeddings are properly configured
- **Connection errors**: Ensure OpenAI credentials are valid

## Demo Tip

Prepare a simple example with 3-5 documents about a relatable topic.
Show the retrieval in action by asking relevant and irrelevant questions.
