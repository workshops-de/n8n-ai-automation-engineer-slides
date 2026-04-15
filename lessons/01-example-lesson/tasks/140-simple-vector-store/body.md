# Simple Vector Store - Your First RAG System

## What is a Simple Vector Store?

The Simple Vector Store is N8N's in-memory vector database. It's the easiest way to get started with RAG (Retrieval-Augmented Generation) without setting up external services like Pinecone. Perfect for learning and prototyping!

## Why Start with Simple Vector Store?

- **Easy Setup** - No external accounts or API keys needed
- **Fast Testing** - Immediate feedback during development
- **Learn the Basics** - Understand RAG concepts without complexity

## Important Limitations

⚠️ **Data is NOT persistent**: All data is lost when N8N restarts  
⚠️ **Memory only**: Designed for development and testing  
⚠️ **Shared across workflows**: All users on this n8n instance share the same memory space — use a unique key!

For production use, switch to Pinecone, Weaviate, or another persistent vector store (covered in the next tasks).

## Task

Use n8n's built-in **RAG Starter Template** to spin up a ready-to-use RAG system, upload a file of your choice, and chat with your data.

### Step-by-Step Guide

#### Part 1: Load the RAG Starter Template

1. **Create a new workflow**
   - Click **"+ New workflow"**
   - Click **"Browse templates"** (or open the **Templates** tab in the sidebar)
   - Search for **"RAG"** and select the **RAG Starter Template**
   - Click **"Use template"**

2. **Explore the two flows the template created**
   - **Load Data Flow** — uploads a file and inserts it into the vector store
   - **Retriever Flow** — a chat interface backed by the AI Agent that searches the vector store
   - Both flows share the same **Embeddings OpenAI** node — this is intentional and required

#### Part 2: Configure Credentials

3. **Set your OpenAI credentials**
   - Click the **OpenAI Chat Model** node and connect your OpenAI API key
   - Click the **Embeddings OpenAI** node and use the same credentials
   - The template uses OpenAI for both embeddings and the chat model

#### Part 3: Set a Unique Memory Key

4. **Change the In-Memory Key to something unique**
   - Open the **Insert Data to Store** node (Load Data Flow)
   - Find the **Memory Key** field and replace the default value with something personal, e.g. `robin-knowledge` or `yourname-docs`
   - Do the same in the **Query Data Tool** node (Retriever Flow) — both must use the **exact same key**

   > ⚠️ Everyone on this n8n instance shares the same memory. If you use the default key, you will overwrite your colleagues' data — and they will overwrite yours!

#### Part 4: Upload Your File

5. **Upload a document**
   - In the **Load Data Flow**, click **"Upload your file here"** (the trigger node)
   - Upload any file you want to query — a PDF, text file, or similar
   - Execute the Load Data Flow to vectorize and store the file

#### Part 5: Chat with Your Data

6. **Open the chat**
   - Switch to the **Retriever Flow**
   - Click **"Chat"** in the top right to open the chat interface
   - Ask questions about the content of your uploaded file

7. **Test with in-scope and out-of-scope questions**
   - Ask something that **is** in your document → the agent should answer accurately
   - Ask something that **is not** in your document → the agent should say so honestly

## What Did We Learn?

1. ✓ How to use n8n templates to get a RAG system running in minutes
2. ✓ How the Load Data Flow and Retriever Flow work together
3. ✓ Why Insert and Retrieve must share the same Embeddings node and Memory Key
4. ✓ How to avoid conflicts in a shared n8n instance with a unique Memory Key

## Learning Objectives

- ✓ Use n8n templates to accelerate development
- ✓ Understand the Simple Vector Store and its limitations
- ✓ Upload and vectorize a real file
- ✓ Query documents via an AI Agent

## Success Criteria

- [ ] RAG Starter Template loaded successfully
- [ ] OpenAI credentials set on both the Chat Model and Embeddings nodes
- [ ] Unique Memory Key set in both Insert and Query nodes
- [ ] File uploaded and Load Data Flow executed without errors
- [ ] AI Agent answers correctly for in-scope questions
- [ ] AI Agent responds honestly for out-of-scope questions
