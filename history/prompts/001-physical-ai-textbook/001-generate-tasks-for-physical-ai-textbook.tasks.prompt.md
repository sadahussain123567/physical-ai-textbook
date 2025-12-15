---
id: 001
title: Generate tasks for Physical AI textbook
stage: tasks
date: 2025-12-14
surface: agent
model: Claude Sonnet 4.5
feature: 001-physical-ai-textbook
branch: master
user: user
command: /sp.tasks
labels: [tasks, textbook, physical-ai]
links:
  spec: specs/001-physical-ai-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-physical-ai-textbook/tasks.md
tests:
  - null
---

## Prompt

```text
Physical AI & Humanoid Robotics – Complete AI-Native Textbook
(Granular task checklist – execute in order)

Phase 0 – Bootstrap (Done in < 2 hours)
[ ] Enable GitHub Pages on main branch (or gh-pages) → confirm empty site is live
[ ] Create /docs folder structure (or follow their existing one)
[ ] Draft final sidebar.js with 15 exact chapter titles + IDs:
    - Introduction & Why Physical AI Matters
    - Weeks 1–13 (one entry each)
    - Capstone Project chapter
[ ] Commit "chore: initial bootstrap + live empty site"

Phase 1 – Skeleton & Reusable Assets (Done in 1–2 days)
[ ] Create 15 empty .mdx files with full frontmatter (id, slug, title, module, week, difficulty)
[ ] Add custom CSS for consistent Mermaid theme (dark/light mode friendly)
[ ] Create reusable MDX components in /src/components/:
    - <Callout>, <Info>, <Warning>, <CodeWithResult>, <ROSCommand>, <IsaacTip>, <HardwareSpec>
[ ] Add collapsible code block component for long examples
[ ] Populate /static/img with 12 core reusable diagrams (ROS2 concepts, node graph, URDF tree, Isaac Sim pipeline, VLA flow, etc.) – all as Mermaid or high-quality PNG < 150 KB
[  KB, WebP where possible)
[ ] Confirm mobile view is perfect (code blocks scroll horizontally, text readable)
[ ] Run broken-link checker → 0 failures
[ ] Run custom validator: every .mdx has id/slug + at least one visual
[ ] Final git squash/perfect commit history + descriptive README
[ ] Confirm f] Add Lighthouse CI + broken-link checker to GitHub Actions workflow

Phase 2 – Content Sprint
Week-based chapters (create in this exact order):

Module 1 – The Robotic Nervous System (ROS 2)
[ ] Week 1-2: Introduction to Physical AI & Embodied Intelligence
[ ] Week 3: ROS 2 Architecture, Nodes, Topics
[ ] Week 4: Services, Actions, Parameters, Launch files
[ ] Week 5: Building ROS 2 Packages in Python (rclpy) + first full publisher/subscriber example

Module 2 – The Digital Twin (Gazebo & Unity)
[ ] Week 6: Gazebo Setup, URDF/Xacro, Spawning Robots
[ ] Week 7: Sensors Simulation (LiDAR, Depth, IMU), Physics & Collisions + Unity alternative intro

Module 3 – The AI-Robot Brain (NVIDIA Isaac)
[ ] Week 8: Isaac Sim – Omniverse, USD assets, Synthetic Data
[ ] Week 9: Isaac ROS – VSLAM, Nav2, Hardware-accelerated Perception
[ ] Week 10: Reinforcement Learning & Sim-to-Real basics

Module 4 – Vision-Language-Action & Capstone
[ ] Week 11: Humanoid Kinematics, Bipedal Locomotion, Balance
[ ] Week 12:inal live URL loads < 2 sec and has no console errors
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/powershell/check-prerequisites.ps1 -Json` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load design documents**: Read from FEATURE_DIR:
   - **Required**: plan.md (tech stack, libraries, structure), spec.md (user stories with priorities)
   - **Optional**: data-model.md (entities), contracts/ (API endpoints), research.md (decisions), quickstart.md (test scenarios)
   - Note: Not all projects have all documents. Generate tasks based on what's available.

3. **Execute task generation workflow**:
   - Load plan.md and extract tech stack, libraries, project structure
   - Load spec.md and extract user stories with their priorities (P1, P2, P3, etc.)
   - If data-model.md exists: Extract entities and map to user stories
   - If contracts/ exists: Map endpoints to user stories
   - If research.md exists: Extract decisions for setup tasks
   - Generate tasks organized by user story (see Task Generation Rules below)
   - Generate dependency graph showing user story completion order
   - Create parallel execution examples per user story
   - Validate task completeness (each user story has all needed tasks, independently testable)

4. **Generate tasks.md**: Use `.specify.specify/templates/tasks-template.md` as structure, fill with:
   - Correct feature name from plan.md
   - Phase 1: Setup tasks (project initialization)
   - Phase 2: Foundational tasks (blocking prerequisites for all user stories)
   - Phase 3+: One phase per user story (in priority order from spec.md)
   - Each phase includes: story goal, independent test criteria, tests (if requested), implementation tasks
   - Final Phase: Polish & cross-cutting concerns
   - All tasks must follow the strict checklist format (see Task Generation Rules below)
   - Clear file paths for each task
   - Dependencies section showing story completion order
   - Parallel execution examples per story
   - Implementation strategy section (MVP first, incremental delivery)

5. **Report**: Output path to generated tasks.md and summary:
   - Total task count
   - Task count per user story
   - Parallel opportunities identified
   - Independent test criteria for each story
   - Suggested MVP scope (typically just User Story 1)
   - Format validation: Confirm ALL tasks follow the checklist format (checkbox, ID, labels, file paths)

Context for task generation: Physical AI & Humanoid Robotics – Complete AI-Native Textbook
(Granular task checklist – execute in order)

Phase 0 – Bootstrap (Done in < 2 hours)
[ ] Enable GitHub Pages on main branch (or gh-pages) → confirm empty site is live
[ ] Create /docs folder structure (or follow their existing one)
[ ] Draft final sidebar.js with 15 exact chapter titles + IDs:
    - Introduction & Why Physical AI Matters
    - Weeks 1–13 (one entry each)
    - Capstone Project chapter
[ ] Commit "chore: initial bootstrap + live empty site"

Phase 1 – Skeleton & Reusable Assets (Done in 1–2 days)
[ ] Create 15 empty .mdx files with full frontmatter (id, slug, title, module, week, difficulty)
[ ] Add custom CSS for consistent Mermaid theme (dark/light mode friendly)
[ ] Create reusable MDX components in /src/components/:
    - <Callout>, <Info>, <Warning>, <CodeWithResult>, <ROSCommand>, <IsaacTip>, <HardwareSpec>
[ ] Add collapsible code block component for long examples
[ ] Populate /static/img with 12 core reusable diagrams (ROS2 concepts, node graph, URDF tree, Isaac Sim pipeline, VLA flow, etc.) – all as Mermaid or high-quality PNG < 150 KB
[  KB, WebP where possible)
[ ] Confirm mobile view is perfect (code blocks scroll horizontally, text readable)
[ ] Run broken-link checker → 0 failures
[ ] Run custom validator: every .mdx has id/slug + at least one visual
[ ] Final git squash/perfect commit history + descriptive README
[ ] Confirm f] Add Lighthouse CI + broken-link checker to GitHub Actions workflow

Phase 2 – Content Sprint
Week-based chapters (create in this exact order):

Module 1 – The Robotic Nervous System (ROS 2)
[ ] Week 1-2: Introduction to Physical AI & Embodied Intelligence
[ ] Week 3: ROS 2 Architecture, Nodes, Topics
[ ] Week 4: Services, Actions, Parameters, Launch files
[ ] Week 5: Building ROS 2 Packages in Python (rclpy) + first full publisher/subscriber example

Module 2 – The Digital Twin (Gazebo & Unity)
[ ] Week 6: Gazebo Setup, URDF/Xacro, Spawning Robots
[ ] Week 7: Sensors Simulation (LiDAR, Depth, IMU), Physics & Collisions + Unity alternative intro

Module 3 – The AI-Robot Brain (NVIDIA Isaac)
[ ] Week 8: Isaac Sim – Omniverse, USD assets, Synthetic Data
[ ] Week 9: Isaac ROS – VSLAM, Nav2, Hardware-accelerated Perception
[ ] Week 10: Reinforcement Learning & Sim-to-Real basics

Module 4 – Vision-Language-Action & Capstone
[ ] Week 11: Humanoid Kinematics, Bipedal Locomotion, Balance
[ ] Week 12:inal live URL loads < 2 sec and has no console errors

The tasks.md should be immediately executable - each task must be specific enough that an LLM can complete it without additional context.

## Task Generation Rules

**CRITICAL**: Tasks MUST be organized by user story to enable independent implementation and testing.

**Tests are OPTIONAL**: Only generate test tasks if explicitly requested in the feature specification or if user requests TDD approach.

### Checklist Format (REQUIRED)

Every task MUST strictly follow this format:

```text
- [ ] [TaskID] [P?] [Story?] Description with file path
```

**Format Components**:

1. **Checkbox**: ALWAYS start with `- [ ]` (markdown checkbox)
2. **Task ID**: Sequential number (T001, T002, T003...) in execution order
3. **[P] marker**: Include ONLY if task is parallelizable (different files, no dependencies on incomplete tasks)
4. **[Story] label**: REQUIRED for user story phase tasks only
   - Format: [US1], [US2], [US3], etc. (maps to user stories from spec.md)
   - Setup phase: NO story label
   - Foundational phase: NO story label
   - User Story phases: MUST have story label
   - Polish phase: NO story label
5. **Description**: Clear action with exact file path

**Examples**:

- ✅ CORRECT: `- [ ] T001 Create project structure per implementation plan`
- ✅ CORRECT: `- [ ] T005 [P] Implement authentication middleware in src/middleware/auth.py`
- ✅ CORRECT: `- [ ] T012 [P] [US1] Create User model in src/models/user.py`
- ✅ CORRECT: `- [ ] T014 [US1] Implement UserService in src/services/user_service.py`
- ❌ WRONG: `- [ ] Create User model` (missing ID and Story label)
- ❌ WRONG: `T001 [US1] Create model` (missing checkbox)
- ❌ WRONG: `- [ ] [US1] Create model` (missing Task ID)
- ❌ WRONG: `- [ ] T001 [US1] Create model` (missing file path)

### Task Organization

1. **From User Stories (spec.md)** - PRIMARY ORGANIZATION:
   - Each user story (P1, P2, P3...) gets its own phase
   - Map all related components to their story:
     - Models needed for that story
     - Services needed for that story
     - Endpoints/UI needed for that story
     - If tests requested: Tests specific to that story
   - Mark story dependencies (most stories should be independent)

2. **From Contracts**:
   - Map each contract/endpoint → to the user story it serves
   - If tests requested: Each contract → contract test task [P] before implementation in that story's phase

3. **From Data Model**:
   - Map each entity to the user story(ies) that need it
   - If entity serves multiple stories: Put in earliest story or Setup phase
   - Relationships → service layer tasks in appropriate story phase

4. **From Setup/Infrastructure**:
   - Shared infrastructure → Setup phase (Phase 1)
   - Foundational/blocking tasks → Foundational phase (Phase 2)
   - Story-specific setup → within that story's phase

### Phase Structure

- **Phase 1**: Setup (project initialization)
- **Phase 2**: Foundational (blocking prerequisites - MUST complete before user stories)
- **Phase 3+**: User Stories in priority order (P1, P2, P3...)
  - Within each story: Tests (if requested) → Models → Services → Endpoints → Integration
  - Each phase should be a complete, independently testable increment
- **Final Phase**: Polish & Cross-Cutting Concerns
</text>

## Response snapshot

Generated comprehensive tasks.md file for the Physical AI & Humanoid Robotics textbook project with 73 specific, actionable tasks organized by user stories and implementation phases. The tasks follow the required checklist format with proper IDs, parallelization markers [P], and user story labels [US1], [US2], [US3] where appropriate. The tasks are organized in phases from bootstrap and setup through user stories, module implementations, quality assurance, and final polish.

## Outcome

- ✅ Impact: Created complete task list with 73 specific, actionable items for textbook development
- 🧪 Tests: No specific tests generated as they weren't requested in feature spec
- 📁 Files: Created specs/001-physical-ai-textbook/tasks.md with comprehensive task breakdown
- 🔁 Next prompts: Implementation of individual tasks as per generated plan
- 🧠 Reflection: Tasks follow required format and organization by user stories for independent implementation

## Evaluation notes (flywheel)

- Failure modes observed: None - all tasks follow required format and organization
- Graders run and results (PASS/FAIL): PASS - tasks properly structured and actionable
- Prompt variant (if applicable): Standard task generation prompt
- Next experiment (smallest change to try): Begin implementation of Phase 0 bootstrap tasks