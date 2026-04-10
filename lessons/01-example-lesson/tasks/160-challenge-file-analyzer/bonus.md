# Bonus Task: Multi-Format File Support with Data Normalization

## Goal

In the main task we only extract from PDF files. In this bonus challenge we extend the workflow to support different file types (PDF, CSV, JSON, TXT, etc.) and implement **data normalization**.

**System Prompt** (erweitert):
```
You are a data analyst who creates concise summaries of documents and datasets.

You will receive files of different types (PDF, CSV, JSON, TXT).
Adapt your analysis based on the file type:
- PDF: Focus on document structure and key information
- CSV: Identify patterns, statistics, and data insights
- JSON: Analyze data structure and key-value relationships
- TXT: Summarize main points and topics

Provide:
1. A brief summary (2-3 sentences)
2. The top 3 most important points or insights
3. Key statistics or numbers if present
4. Any notable patterns or trends

Keep your response concise and actionable.
```

## Learning Objectives (Bonus)

- ✓ Implement conditional routing with Switch nodes
- ✓ Handle multiple file formats in one workflow
- ✓ Create data normalization patterns
- ✓ Use MIME type detection
- ✓ Merge parallel processing branches
- ✓ Write type-specific extraction logic

## Success Criteria (Bonus)

- [ ] Workflow detects file type automatically
- [ ] PDF files are extracted correctly
- [ ] CSV files are parsed and normalized
- [ ] JSON files are formatted and normalized
- [ ] Text files are processed correctly
- [ ] All outputs have the same normalized structure
- [ ] Unsupported formats show error message
- [ ] AI Agent adapts analysis to file type
- [ ] Merge node combines all branches successfully

## Additional Bonus Ideas

**Top 3 Highlighting**: Format the top 3 most important points in the response with emojis and special styling (🔥 for important, 📊 for statistics, etc.).

**File Size Check**: Add a check before processing to reject files larger than 10MB to prevent performance issues.

**Cache Results**: Store analysis results in a database (e.g., PostgreSQL) so repeated uploads of the same file return cached results instantly.
