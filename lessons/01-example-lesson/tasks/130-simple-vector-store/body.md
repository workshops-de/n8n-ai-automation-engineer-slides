# Simple Vector Store - Your First RAG System

## What is a Simple Vector Store?

The Simple Vector Store is N8N's in-memory vector database. It's the easiest way to get started with RAG (Retrieval-Augmented Generation) without setting up external services like Pinecone. Perfect for learning and prototyping!

## Why Start with Simple Vector Store?

- **Easy Setup** - No external accounts or API keys needed
- **Fast Testing** - Immediate feedback during development
- **Learn the Basics** - Understand RAG concepts without complexity
- **Good for Small Data** - Perfect for documents up to ~8,000 items

## Important Limitations

⚠️ **Data is NOT persistent**: All data is lost when N8N restarts
⚠️ **Memory only**: Designed for development and testing
⚠️ **Shared across workflows**: All users in the instance can access the data

For production use, you'll want to use Pinecone, Weaviate, or another persistent vector store (covered in the next task).

## Task

Create a simple RAG system using the Simple Vector Store. We'll build a knowledge base about a topic of your choice and create an AI agent that can answer questions about it.

### Step-by-Step Guide

#### Part 1: Prepare Your Knowledge Base

1. **Create Knowledge Base Workflow**
   - Create a new workflow: "Knowledge Base Uploader"
   - Add a **Manual Trigger**

2. **Add Sample Documents with Set Node**
   - Add a **Edit Fields (Set)** Node
   - Create a few documents about a topic (e.g., company policies, product info, or fun facts)
   - Example structure:
   ```json
   [
     {"content": "Our company was founded in 2020 and specializes in AI automation..."},
     {"content": "Our support hours are Monday to Friday, 9 AM to 5 PM..."},
     {"content": "We offer three pricing tiers: Basic ($10/mo), Pro ($50/mo), and Enterprise (custom)..."}
   ]
   ```

3. **Add Simple Vector Store Node**
   - Add a **Simple Vector Store** Node
   - Mode: **Insert Documents**
   - Memory Key: Create a new key, e.g., `company-knowledge`
   - Clear Store: **Yes** (clears old data)

4. **Add Embeddings**
   - Connect **Embeddings OpenAI** to the Vector Store
   - Model: `text-embedding-3-small`
   - Configure your OpenAI credentials

5. **Add Document Loader**
   - Connect **Default Data Loader** to the Vector Store
   - This will process your documents from the Set node

6. **Upload Documents**
   - Execute the workflow
   - Your documents are now vectorized and stored in memory

#### Part 2: Create AI Agent with Vector Store

7. **Create Query Workflow**
   - Create a new workflow: "Knowledge Base Assistant"
   - Add a **Chat Trigger**
   - Add an **AI Agent Node** (Claude)
   - Add **Simple Memory** for conversation history

8. **Add Vector Store as Tool**
   - Add a **Simple Vector Store** Node
   - Mode: **Retrieve Documents (As Tool for AI Agent)**
   - Name: `knowledge_base`
   - Description: `Search the company knowledge base for information about policies, pricing, and support`
   - Memory Key: Same as before (`company-knowledge`)
   - Limit: 3 (top 3 relevant documents)
   - Connect to AI Agent (Tools Connector)

9. **Configure AI Agent Prompt**
   ```
   You are a helpful assistant with access to our company knowledge base.
   
   When users ask questions:
   1. Search the knowledge base using the knowledge_base tool
   2. Use the retrieved information to answer accurately
   3. If information isn't in the knowledge base, say so honestly
   4. Always cite that your information comes from the knowledge base
   
   Be helpful, accurate, and conversational.
   ```

10. **Test Your RAG System**
    - Open the chat
    - Ask questions like:
      - "When was the company founded?"
      - "What are your support hours?"
      - "Tell me about your pricing"
    - Observe how the agent retrieves relevant documents

## What Did We Learn?

We created a complete RAG system:
1. ✓ Stored documents in a vector database
2. ✓ Converted text to semantic embeddings
3. ✓ Built an AI agent that searches the knowledge base
4. ✓ Implemented document retrieval based on question similarity

## Learning Objectives

- ✓ Understand Simple Vector Store and its use cases
- ✓ Create and store document embeddings
- ✓ Connect vector stores to AI agents
- ✓ Implement basic RAG workflows
- ✓ Understand the difference between memory types in N8N

## Success Criteria

- [ ] Documents are successfully inserted into Simple Vector Store
- [ ] AI Agent can retrieve relevant documents
- [ ] Agent answers questions based on stored knowledge
- [ ] System correctly handles questions not in the knowledge base
- [ ] Memory key is properly configured across workflows
