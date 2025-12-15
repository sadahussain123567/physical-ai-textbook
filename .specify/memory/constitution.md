<!--
Sync Impact Report:
Version change: N/A → 1.0.0
List of modified principles: None (new constitution)
Added sections: All principles and sections based on project requirements
Removed sections: None
Templates requiring updates: ✅ reviewed .specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md (no direct updates needed to template structure)
Follow-up TODOs: None
-->
# AI/Spec-Driven Book Creation (Physical AI & Humanoid Robotics Textbook using Docusaurus + Spec-Kit Plus) Constitution

## Core Principles

### Technical Accuracy and Correctness
All explanations of ROS 2, Gazebo, NVIDIA Isaac, VLA models, and humanoid robotics concepts must be technically accurate and correct

### Learner-Centric Writing
Content must be clear with progressive difficulty and hands-on focus, targeting advanced CS/engineering students with basic Python knowledge

### AI-Native and Interactive
Every chapter must feel interactive and modern with code snippets, diagrams, callouts, and quizzes where possible

### Future-Proof and Extensible
Written in clean MDX so new features (RAG, personalization, Urdu, etc.) can be added seamlessly

### Visual-Rich Content
Every chapter must contain at least 2-3 diagrams, screenshots, or architecture figures (created with Mermaid, draw.io, or screenshots from Isaac Sim/Gazebo)

### Code Excellence
Every major concept must have runnable, syntax-highlighted code (Python/rclpy, ROS 2 launch files, URDF snippets, etc.)

## Standards and Constraints
Source template: Must fork and build on https://github.com/panaversity/spec-kit-plus (no exceptions). File format: All content in .mdx inside /docs or /chapters following Spec-Kit Plus conventions. Chapter structure: Exactly matches the 4 modules + weekly breakdown given in the hackathon doc. Navigation & UX: Sidebar must follow logical quarter flow; search must work out of the box. Writing style: Professional yet engaging; Reading ease: Flesch-Kincaid grade 11–13. Deployment platform: GitHub Pages (preferred) or Vercel – must be publicly accessible with custom domain or username.github.io. Build time: npm run build must complete under 2 minutes on GitHub Actions. Mobile responsive: Must look excellent on phone screens. Total chapters: Minimum 14 (Intro + Weeks 1–13 or Module 1–4 breakdown – whichever gives better granularity).

## Development Workflow
All changes must be small, testable, and reference code precisely. Every major feature must have runnable code examples. Every chapter must have visual elements. Chapters must follow the 4 modules + weekly breakdown structure. No broken links or failed builds allowed at submission. Must be deployed publicly accessible with instant loading and 100% functionality.

## Governance
All implementations must follow these core principles. Code examples must be runnable and syntax-highlighted. Visual elements must be included in every chapter. Content must align with the specified chapter structure. Deployment must meet performance requirements (under 2 minutes build time). Success criteria: Live URL loads instantly and is 100% functional (no 404s, no hydration errors), Full course outline is completely implemented.

**Version**: 1.0.0 | **Ratified**: 2025-12-14 | **Last Amended**: 2025-12-14