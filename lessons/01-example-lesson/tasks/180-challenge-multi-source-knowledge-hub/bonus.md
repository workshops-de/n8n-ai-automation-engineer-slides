# Bonus Task

**Priority by Freshness**: Implement a system that prioritizes newer content in search results. Use the Creation Date metadata field.

Example in Code Node:
```javascript
// Sort results by date, newest first
const sortedResults = sources.sort((a, b) => {
  return new Date(b.json.metadata.createdAt) - new Date(a.json.metadata.createdAt);
});
```

**Category Tagging**: Add automatic category tagging:
- Use AI to categorize each document before vectorization
- Store categories as metadata
- Enable filtered searches (e.g., "only PDFs", "only latest websites")

**Incremental Updates**: Implement a system that only vectorizes new or changed documents:
- Store checksums/hashes of documents
- Compare before vectorization
- Skip unchanged documents

**Web Crawling**: Extend the website data source with a web crawler:
- Follow links
- Crawl multiple pages of a domain
- Respect robots.txt

**Conflict Resolution**: Implement logic for conflicting information:
- When different sources provide different information
- Have the AI identify and explain the conflict
- Show all perspectives with source attribution
