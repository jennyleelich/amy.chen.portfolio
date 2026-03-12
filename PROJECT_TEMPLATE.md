# Project Template Guide

## Use This Template for Projects 8, 9, 10+

Copy this template when adding new projects to avoid formatting issues with your existing 7 projects.

---

## Basic Project Structure

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  category: 'Product Design', // or 'Paintings', 'Drawings', 'Installations/Sculpture'
  year: '2025',
  materials: 'Materials used',
  description: 'Brief description for the project card',
  image: yourProjectImg, // Import your image at the top of projects.ts
  detailImages: [
    yourProjectImg1,
    yourProjectImg2,
    // Add more images as needed
  ],
  
  // Optional fields below
  client: 'Client name (optional)',
  role: 'Your role (optional)',
  duration: 'Project duration (optional)',
  tools: ['Tool 1', 'Tool 2', 'Tool 3'], // Array format
  
  // IMPORTANT: Use ARRAY format for all multi-paragraph content
  // This prevents escape sequence issues!
  
  overview: [
    'First paragraph of overview goes here.',
    'Second paragraph of overview goes here.',
    'Add more paragraphs as array items if needed.'
  ],
  
  problem: [
    'First paragraph explaining the problem or design intent.',
    'Second paragraph with more details.',
    'Additional paragraphs as needed.'
  ],
  
  // Single-paragraph fields can be plain strings
  process: 'Single paragraph describing your process.',
  
  // Or use arrays if you need multiple paragraphs
  designDirection: [
    'First paragraph about design direction.',
    'Second paragraph with more details.'
  ],
  
  outcome: 'Single paragraph about outcomes and results.',
  
  reflection: 'Single paragraph about what you learned.'
}
```

---

## Critical Rules to Avoid Issues

### ✅ DO THIS (Array Format - RECOMMENDED)

```typescript
overview: [
  'Paragraph 1 text here.',
  'Paragraph 2 text here.',
  'Paragraph 3 text here.'
],

problem: [
  'Paragraph 1 text here.',
  'Paragraph 2 text here.'
],
```

**Why this works:** Arrays are clean, predictable, and don't require escape sequences.

---

### ❌ DON'T DO THIS (Escape Sequences - AVOID)

```typescript
// AVOID - requires complex escape sequences
overview: 'Paragraph 1.\\\\\\\\n\\\\\\\\nParagraph 2.',

// AVOID - will show literal \n\n in the UI
overview: 'Paragraph 1.\\n\\nParagraph 2.',
```

**Why this fails:** Different components use different escape sequence patterns, causing inconsistent rendering.

---

## Fields That Support Arrays

These fields work perfectly with array format:

- `overview` - Project overview section
- `problem` - Problem statement or design intent
- `designDirection` - Design direction details
- `designIntent` - Design intent details
- `prototype` - Prototype description

---

## Fields That Are Single Strings

These fields typically stay as single strings:

- `process` - Process description
- `outcome` - Outcomes and results
- `reflection` - Reflection and learnings
- `description` - Brief card description

If you need multiple paragraphs in these fields, **convert them to arrays** instead of using escape sequences.

---

## Image Import Template

At the top of `/src/app/data/projects.ts`, add your imports:

```typescript
// Your project images
import yourProject1Img from 'figma:asset/[hash].png';
import yourProject2Img from 'figma:asset/[hash].png';
import yourProject3Img from 'figma:asset/[hash].png';
```

---

## Complete Example: Project 8

```typescript
{
  id: 'project-8-example',
  title: 'Example Project 8',
  category: 'Product Design',
  year: '2025',
  materials: 'Wood, Metal, Acrylic',
  description: 'A brief description for the project card.',
  image: project8MainImg,
  detailImages: [
    project8MainImg,
    project8Detail1Img,
    project8Detail2Img
  ],
  client: 'Academic Project',
  role: 'Product Designer',
  duration: '6 weeks',
  tools: ['Rhino', 'Keyshot', 'Hand fabrication'],
  
  // Multi-paragraph overview - ARRAY FORMAT
  overview: [
    'First paragraph explaining the project context and goals.',
    'Second paragraph with additional background or approach.'
  ],
  
  // Multi-paragraph problem - ARRAY FORMAT
  problem: [
    'First paragraph describing the problem.',
    'Second paragraph with more problem details.'
  ],
  
  // Single paragraph fields - STRING FORMAT
  process: 'Description of your process in one paragraph.',
  
  // Multi-paragraph design direction - ARRAY FORMAT
  designDirection: [
    'First design direction paragraph.',
    'Second design direction paragraph.'
  ],
  
  outcome: 'Final outcomes described here.',
  
  reflection: 'What you learned from this project.'
}
```

---

## Adding Your Project to projects.ts

1. Open `/src/app/data/projects.ts`
2. Add your image imports at the top
3. Copy the template above
4. Fill in your content
5. Add it to the `projects` array (after project 7, before the placeholder projects)
6. Save the file

---

## Quick Checklist

- [ ] Images imported at top of file
- [ ] Use **arrays** for multi-paragraph content (overview, problem, designDirection)
- [ ] Use **strings** for single-paragraph content (process, outcome, reflection)
- [ ] No escape sequences like `\\n\\n` or `\\\\n\\\\n`
- [ ] Project ID is unique and lowercase with hyphens
- [ ] Category matches one of: 'Product Design', 'Paintings', 'Drawings', 'Installations/Sculpture'

---

## Need to Add Navigation Sidebar?

If you want a left navigation sidebar like projects 1-7 have, you'll need to:

1. Add navigation sections to `/src/app/pages/ProjectDetail.tsx`
2. Create section IDs that match your content structure
3. Let me know and I can help add this for your specific project!

---

**Remember: Arrays = Simple and Reliable. Use them for all multi-paragraph content!**
