# Research: Physical AI & Humanoid Robotics Textbook

**Feature**: 001-physical-ai-textbook
**Date**: 2025-12-14
**Research completed by**: Implementation planning phase

## Decision: Technology Stack Selection
**Rationale**: Using Docusaurus v3 with MDX v2 as specified in the user requirements and aligned with the Spec-Kit Plus template. This provides a proven static site generation solution with excellent support for documentation, code examples, and visual elements required for the textbook.

## Decision: Chapter Structure and Organization
**Rationale**: Organizing content by Modules 1-4 with weekly breakdowns as specified in the user requirements. This follows the pedagogical flow of the course and ensures 100% syllabus coverage as required.

## Decision: Visual Style Guide Implementation
**Rationale**: Using Mermaid for diagrams, standard Docusaurus code blocks for syntax highlighting, and custom MDX components for specialized textbook elements like callouts and tips. This maintains consistency while providing the rich visual experience required.

## Decision: Quality Validation Pipeline
**Rationale**: Implementing Lighthouse CI, broken-link checker (lychee), and custom validation scripts to ensure the textbook meets all specified requirements (Lighthouse scores ≥ 90, no broken links, proper frontmatter, etc.).

## Decision: Deployment Strategy
**Rationale**: Using GitHub Pages as the primary deployment method with Vercel as backup option, as specified in user requirements. This ensures public accessibility and meets the performance requirements.

## Alternatives Considered:

1. **Static Site Generators**: Evaluated Docusaurus vs. Next.js vs. Gatsby vs. Hugo
   - Selected Docusaurus due to its excellent documentation features, MDX support, and integration with Spec-Kit Plus template

2. **Content Structure**: Evaluated different organizational approaches (by technology vs. by module vs. by week)
   - Selected module-week structure as it directly maps to the syllabus requirements

3. **Component Libraries**: Evaluated different approaches for reusable textbook components
   - Selected custom MDX components for maximum flexibility and textbook-specific functionality

4. **Quality Assurance Tools**: Evaluated different validation approaches
   - Selected combination of Lighthouse, lychee, and custom scripts for comprehensive validation

## Implementation Notes:

- Docusaurus with MDX provides excellent support for interactive textbook elements
- The 15-chapter structure will map to Modules 1-4 with weekly content and an introductory chapter
- Custom MDX components (Callout, CodeWithResult, ROS2Command, IsaacTip, HardwareSpec) will be implemented as React components
- Mermaid theme customization will ensure diagrams match the textbook's visual style
- GitHub Actions will orchestrate the quality validation pipeline as specified