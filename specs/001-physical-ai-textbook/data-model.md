# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature**: 001-physical-ai-textbook
**Date**: 2025-12-14

## Entities

### Chapter
- **id**: Unique identifier for the chapter (required, string)
- **slug**: URL-friendly identifier for the chapter (required, string)
- **title**: Display title of the chapter (required, string)
- **module**: Module number this chapter belongs to (required, integer)
- **week**: Week number within the module (required, integer)
- **content**: The main content of the chapter in MDX format (required, string)
- **codeExamples**: Array of code examples in the chapter (optional, array of CodeExample)
- **visualElements**: Array of visual elements in the chapter (optional, array of VisualElement)
- **learningObjectives**: List of learning objectives for this chapter (optional, array of string)
- **prerequisites**: List of prerequisites needed for this chapter (optional, array of string)

### CodeExample
- **id**: Unique identifier for the code example (required, string)
- **language**: Programming language of the example (required, string - e.g., "python", "bash", "xml")
- **code**: The actual code content (required, string)
- **description**: Brief explanation of what the code does (optional, string)
- **executable**: Whether this code example can be run/tested (optional, boolean)

### VisualElement
- **id**: Unique identifier for the visual element (required, string)
- **type**: Type of visual element (required, string - e.g., "diagram", "screenshot", "flowchart", "mermaid")
- **src**: Source path or URL for the visual element (required, string)
- **alt**: Alternative text for accessibility (required, string)
- **caption**: Caption for the visual element (optional, string)

### NavigationStructure
- **id**: Unique identifier for the navigation item (required, string)
- **title**: Display title for navigation (required, string)
- **path**: URL path for the navigation item (required, string)
- **children**: Array of child navigation items (optional, array of NavigationStructure)
- **module**: Module this navigation item belongs to (optional, integer)
- **week**: Week this navigation item represents (optional, integer)

### CustomComponent
- **name**: Name of the custom MDX component (required, string)
- **props**: Available properties for the component (required, object)
- **description**: Description of what the component does (optional, string)
- **usage**: Example usage of the component (optional, string)

## Validation Rules

1. Every Chapter MUST have a unique id and slug
2. Every Chapter MUST have at least one visual element or one code example
3. Every Chapter MUST have proper frontmatter with id and slug fields
4. Every CodeExample MUST have valid syntax for its specified language
5. Every VisualElement MUST have an alt text for accessibility
6. All content MUST be in MDX v2 format
7. Navigation structure MUST follow the module-week hierarchy

## State Transitions

Not applicable for this static content model. Content is created, reviewed, and published.