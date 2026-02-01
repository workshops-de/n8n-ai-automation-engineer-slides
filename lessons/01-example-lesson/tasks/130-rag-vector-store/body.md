# RAG & Vector Store - Knowledge Base for AI Agents

## What is RAG (Retrieval-Augmented Generation)?

RAG combines AI models with external data sources to provide accurate, up-to-date responses grounded in specific knowledge. It enables AI Agents to access information not contained in their training data.

## Why RAG?

RAG is essential for:
- **Current Information** - Access to data beyond training data
- **Company-Specific Knowledge** - Use of proprietary company data
- **Reducing Hallucinations** - Fact-based answers
- **Fact-Based Responses** - Responses grounded in actual documents

## How Does RAG Work?

1. **Upload Documents** - PDFs, texts, etc. to Vector Store
2. **Split Content** - Break documents into chunks
3. **Create Embeddings** - Convert text into numeric vectors
4. **Semantic Search** - Find similar content based on meaning

## Use Cases

- Knowledge Base Q&A Systems
- Document Analysis Assistants
- Customer Support with Product Documentation
- Legal Research Automation

## Task

Create an AI Agent connected to a Vector Store. As an example, we'll use the Dungeons & Dragons rulebook (a fun project that demonstrates the concepts well!).

### Why This Example?

- Learn how to access memory banks (could be your company data in reality)
- Understand Long-Term and Short-Term Memory
- Maintain conversations and access past information
- It's fun! 🎲

### Step-by-Step Guide

#### Part 1: AI Agent Setup

1. **Create Base Workflow**
   - Create a new workflow: "D&D Game Master"
   - Add a Chat Trigger
   - Add an AI Agent Node (Claude)
   - Add Simple Memory

#### Part 2: Prepare Document

2. **Download and Upload Rulebook**
   - Download the D&D Basic Rules PDF (Open Source)
   - Create a Google Drive Folder
   - Upload the PDF to your Google Drive

3. **Create New Workflow for Vector Store**
   - Create a second workflow: "D&D Rules Uploader"
   - Add a Manual Trigger
   - Add a Google Drive Node
   - Configure Google Cloud Credentials (see slides for details)
   - Operation: Download File
   - Select your uploaded PDF

#### Part 3: Set Up Vector Store

4. **Create Pinecone Account**
   - Go to Pinecone.io and create an account
   - Create a new index:
     - Name: `dungeonsrulebook`
     - Model: `text-embedding-3-small`
     - Click "Create Index"
   - Copy your API Key

5. **Configure Vector Store Node**
   - Add a "Pinecone Vector Store" Node
   - Mode: Insert
   - Add your Pinecone Credentials
   - Index Name: `dungeonsrulebook`
   
6. **Add Embeddings and Data Loader**
   - Connect "Embeddings OpenAI" to the Vector Store
     - Model: `text-embedding-3-small`
   - Connect "Default Data Loader" to the Vector Store
     - Input: Binary data from Google Drive
   - Configure Chunk Settings (e.g., Chunk Size: 1000)

7. **Vectorize PDF**
   - Execute the "D&D Rules Uploader" workflow
   - The PDF will be downloaded, split into chunks, vectorized, and uploaded to Pinecone
   - This may take a few minutes

#### Part 4: Connect AI Agent to Vector Store

8. **Add Vector Store as Tool**
   - Go back to the "D&D Game Master" workflow
   - Add a "Pinecone Vector Store" Node as a tool
   - Mode: Retrieve
   - Same Credentials and Index as before
   - Connect it to the AI Agent (Tools Connector)
   - Tool Description: "Search the D&D rulebook for specific rules and game mechanics"

9. **System Prompt for Game Master**
   ```
   You are an expert Dungeons & Dragons Game Master assistant.
   
   You have access to the official D&D Basic Rules through a vector store tool.
   
   Your task is to:
   1. Answer questions about D&D rules accurately
   2. Use the rulebook tool to look up specific rules when asked
   3. Explain rules in a clear, friendly manner
   4. Provide examples when helpful
   5. Keep track of our conversation
   
   When a user asks about rules, always consult the rulebook tool first.
   Be helpful, accurate, and make learning D&D fun!
   ```

10. **Test the Game Master**
    - Open the chat
    - Ask questions like:
      - "How do I create a character?"
      - "What are the rules for combat?"
      - "Explain spell casting"
    - Observe how the agent searches the rulebook

## What Did We Do?

We:
1. Uploaded a PDF document to a Vector Store
2. Converted text into semantic embeddings
3. Created an AI Agent that can search the knowledge base
4. Built a conversational interface for document Q&A

## Learning Objectives

✓ Understand RAG architecture
✓ Set up Vector Stores (Pinecone)
✓ Vectorize documents
✓ Create embeddings
✓ Implement semantic search
✓ Combine Long-Term Memory (Vector Store) with Short-Term Memory (Chat Memory)
✓ Connect AI Agents to knowledge bases
