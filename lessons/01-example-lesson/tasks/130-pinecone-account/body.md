# Preparation: Pinecone Account Setup

Before building the RAG workflow in the next task, you need a Pinecone account and a vector index ready to go.

## What is Pinecone?

Pinecone is a managed vector database — it stores text as numeric embeddings so an AI Agent can search by meaning rather than exact keywords. It's one of the most popular choices for production RAG systems.

## Step-by-Step Guide

### 1. Create a Pinecone Account

- Go to [pinecone.io](https://www.pinecone.io/) and sign up for a free account
- Confirm your email address

### 2. Create a New Index

Once logged in:

- Click **"Create Index"**
- Configure the index:
  - **Name**: `dungeonsrulebook`
  - **Model**: `text-embedding-3-small` from OpenAP
  - Leave all other settings at their defaults
- Click **"Create Index"**

> ⏳ Index creation takes a few seconds. Wait until the status shows **Ready**.

### 3. Copy Your API Key

- In the left sidebar, click **"API Keys"**
- Copy your default API key and save it somewhere handy — you'll need it in the next task

## Success Criteria

- [ ] Pinecone account created and email confirmed
- [ ] Index `dungeonsrulebook` created with model `text-embedding-3-small`
- [ ] Index status shows **Ready**
- [ ] API Key copied and saved
