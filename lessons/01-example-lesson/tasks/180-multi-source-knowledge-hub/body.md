# Multi-Source Knowledge Hub

## Goal

Create a RAG system that combines data from PDFs, websites, and CSV files into a unified knowledge base.

## What You'll Learn

- Multi-format data ingestion
- Content preprocessing
- Unified Vector Storage
- Source Tracking
- Metadata Management

## Workflow Overview

**Schedule Trigger** → **Multiple Data Sources** → **Text Processing** → **Vector Store** → **AI Agent**

## Architecture

We'll create two workflows:
1. **Data Ingestion Workflow** - Collects and vectorizes data
2. **Query Workflow** - AI Agent for queries

## Part 1: Data Ingestion Workflow

### 1. Trigger Setup

- Add a **Schedule Trigger**
- For testing: `0 0 * * *` (daily at midnight)
- Or **Manual Trigger** for initial setup

### 2. PDF Data Source

- **Google Drive Node** (or HTTP Request for Public PDFs)
  - Operation: Download Files
  - Folder: Your Docs Folder
  - File Type Filter: PDF

- **Extract from File Node**
  - Extract PDF text

### 3. Website Data Source

- **HTTP Request Node**
  - URL: Website of your choice
  - Method: GET
  
- **HTML Extract Node**
  - Extract text content
  - Remove HTML Tags

Example Websites:
```
https://n8n.io/blog/
https://docs.n8n.io/
```

### 4. CSV Data Source

- **HTTP Request** or **Google Sheets Node**
  - Load CSV data
  
- **Spreadsheet File Node** (if CSV file)
  - Read from File

### 5. Data Preprocessing

- **Code Node** - Unify data:

```javascript
const items = $input.all();
const processedItems = [];

for (const item of items) {
  // Determine source type
  let sourceType = 'unknown';
  let content = '';
  let metadata = {};
  
  if (item.json.mimeType && item.json.mimeType.includes('pdf')) {
    sourceType = 'pdf';
    content = item.json.text || item.json.content;
    metadata = {
      fileName: item.json.name,
      source: 'Google Drive'
    };
  } else if (item.json.url) {
    sourceType = 'website';
    content = item.json.text || item.json.body;
    metadata = {
      url: item.json.url,
      source: 'Website'
    };
  } else if (Array.isArray(item.json)) {
    sourceType = 'csv';
    content = JSON.stringify(item.json);
    metadata = {
      source: 'CSV Database'
    };
  }
  
  processedItems.push({
    json: {
      content: content,
      sourceType: sourceType,
      createdAt: new Date().toISOString(),
      ...metadata
    }
  });
}

return processedItems;
```

### 6. Text Chunking

- **Text Splitter Node** (or integrated in Vector Store Node)
  - Chunk Size: 1000 characters
  - Chunk Overlap: 200 characters

### 7. Vector Store Setup

- **Pinecone Vector Store Node** (or Weaviate/Qdrant)
  - Mode: Insert
  - Index Name: `multi-source-knowledge`
  
- **Embeddings OpenAI**
  - Model: `text-embedding-3-small`
  
- **Default Data Loader**
  - Input: Processed content with metadata

### 8. Metadata Storage

Important: Metadata is stored with each chunk:
- Source Type (pdf, website, csv)
- Source Name/URL
- Creation Date
- Category (optional)

## Part 2: Query Workflow (AI Agent)

### 1. Chat Interface

- **Chat Trigger Node**
- **AI Agent Node** (Claude)
- **Memory Node** (Window Buffer Memory)

### 2. Vector Store as Tool

- **Pinecone Vector Store Node**
  - Mode: Retrieve
  - Same Index: `multi-source-knowledge`
  - Top K: 5
  
- Connect as tool to AI Agent
- Tool Description: "Search the knowledge base across PDFs, websites, and database records. Returns relevant information with source attribution."

### 3. AI Agent Prompt

System Prompt:
```
You are a knowledgeable assistant with access to a multi-source knowledge base.

The knowledge base contains information from:
- PDF documents
- Website content
- Database records (CSV)

When answering questions:
1. Search the knowledge base using the vector store tool
2. Synthesize information from multiple sources if relevant
3. Always cite your sources (mention if info came from PDF, website, or database)
4. If information is from multiple sources, compare and contrast
5. Be transparent about source dates and freshness of information

Format your responses clearly with source citations.
```

### 4. Source Attribution

- Add a **Code Node** after the AI Agent (optional)
- Format the response with clear source attribution:

```javascript
const response = $input.first().json.output;
const sources = $('Pinecone Vector Store').all();

let sourcesText = '\n\n**Sources:**\n';
const uniqueSources = new Set();

for (const source of sources) {
  const sourceInfo = `- [${source.json.metadata.sourceType}] ${source.json.metadata.fileName || source.json.metadata.url || 'Database'}`;
  uniqueSources.add(sourceInfo);
}

for (const source of uniqueSources) {
  sourcesText += source + '\n';
}

return [{
  json: {
    response: response + sourcesText
  }
}];
```

## Testing

Test with different queries:
- "What information do you have about [topic]?"
- "Compare the information from different sources about [topic]"
- "What does the PDF say about [topic]?"
- "Show me recent information from websites about [topic]"

## Learning Objectives

- ✓ Multi-format data ingestion (PDF, Web, CSV)
- ✓ Content preprocessing and normalization
- ✓ Unified Vector Storage
- ✓ Source tracking and metadata management
- ✓ RAG with multi-source attribution
- ✓ Create complex data pipelines

## Success Criteria

- [ ] At least 3 different data sources integrated
- [ ] All data is successfully vectorized
- [ ] Metadata is stored with each chunk
- [ ] AI Agent can search across all sources
- [ ] Sources are clearly cited in responses
- [ ] System can distinguish between source types
- [ ] Workflow is automated (Schedule)
