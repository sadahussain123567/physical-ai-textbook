---
description: "Task list for Physical AI & Humanoid Robotics textbook implementation"
---

# Tasks: Physical AI & Humanoid Robotics Textbook

**Input**: Design documents from `/specs/001-physical-ai-textbook/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Docusaurus textbook**: `docs/`, `src/`, `static/` at repository root
- **MDX components**: `src/components/`
- **Images**: `static/img/`
- **Configuration**: `docusaurus.config.js`, `sidebars.js`

<!--
  ============================================================================
  The tasks below are generated based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks are organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment
  ============================================================================
-->

## Phase 0: Bootstrap (Done in < 2 hours)

**Purpose**: Initial project setup and GitHub Pages configuration

- [X] T001 Enable GitHub Pages on main branch (or gh-pages) → confirm empty site is live
- [X] T002 Create /docs folder structure following Docusaurus conventions
- [X] T003 Draft final sidebar.js with 15 exact chapter titles + IDs:
    - Introduction & Why Physical AI Matters
    - Weeks 1–13 (one entry each)
    - Capstone Project chapter
- [X] T004 Commit "chore: initial bootstrap + live empty site"

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T005 Initialize Docusaurus v3 project with MDX v2 dependencies
- [X] T006 [P] Configure linting and formatting tools for MDX/JS/TS
- [X] T007 Set up basic Docusaurus configuration in docusaurus.config.js
- [X] T008 Create basic directory structure: docs/, src/, static/, assets/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T009 Create 15 empty .mdx files with full frontmatter (id, slug, title, module, week, difficulty)
- [X] T010 [P] Add custom CSS for consistent Mermaid theme (dark/light mode friendly)
- [X] T011 [P] Create reusable MDX components in src/components/:
    - <Callout>, <Info>, <Warning>, <CodeWithResult>, <ROSCommand>, <IsaacTip>, <HardwareSpec>
- [X] T012 Add collapsible code block component for long examples
- [X] T013 [P] Populate static/img with 12 core reusable diagrams (ROS2 concepts, node graph, URDF tree, Isaac Sim pipeline, VLA flow, etc.) – all as Mermaid or high-quality PNG < 150 KB
- [X] T014 Configure GitHub Actions workflow with Lighthouse CI + broken-link checker
- [X] T015 [P] Add custom validation script to ensure every .mdx has id/slug + at least one visual
- [X] T016 Set up mobile-responsive layout with proper code block scrolling

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Access Interactive Textbook Content (Priority: P1) 🎯 MVP

**Goal**: Users can access comprehensive, interactive content about Physical AI and Humanoid Robotics with proper formatting, code snippets, and visual elements

**Independent Test**: Can be fully tested by verifying that users can navigate to and read at least one complete chapter with code examples and visual elements, delivering foundational knowledge of a core concept.

### Implementation for User Story 1

- [ ] T017 [P] [US1] Create Week 1-2: Introduction to Physical AI & Embodied Intelligence chapter in docs/modules/module-1/week-1-2.mdx
- [ ] T018 [P] [US1] Create Week 3: ROS 2 Architecture, Nodes, Topics chapter in docs/modules/module-1/week-3.mdx
- [ ] T019 [US1] Add runnable, syntax-highlighted code examples (ROS 2 Python, rclpy, launch files, URDF/Xacro, Isaac Sim scripts, etc.) to Week 1-2 chapter
- [ ] T020 [US1] Add clear visuals (Mermaid diagrams, architecture figures, Gazebo/Isaac Sim screenshots, sensor data flow, etc.) to Week 1-2 chapter
- [ ] T021 [US1] Implement proper MDX formatting for Week 1-2 chapter content
- [ ] T022 [US1] Add navigation links between chapters in sidebar

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Navigate Textbook Structure (Priority: P2)

**Goal**: Users can easily navigate through the textbook's structured content that mirrors the official quarter structure, following the pedagogical flow of the course systematically

**Independent Test**: Can be tested by verifying that users can navigate from the introduction through to at least one complete module, following the intended pedagogical sequence.

### Implementation for User Story 2

- [ ] T023 [P] [US2] Create Week 4: Services, Actions, Parameters, Launch files chapter in docs/modules/module-1/week-4.mdx
- [ ] T024 [P] [US2] Create Week 5: Building ROS 2 Packages in Python (rclpy) + first full publisher/subscriber example chapter in docs/modules/module-1/week-5.mdx
- [ ] T025 [P] [US2] Create Week 6: Gazebo Setup, URDF/Xacro, Spawning Robots chapter in docs/modules/module-2/week-6.mdx
- [ ] T026 [US2] Update sidebar navigation to include all chapters in logical order that mirrors the official quarter structure
- [ ] T027 [US2] Add next/previous chapter navigation buttons following pedagogical flow
- [ ] T028 [US2] Implement module-based navigation structure (Module 1-4 organization)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Access Mobile-Responsive Textbook (Priority: P3)

**Goal**: Textbook is mobile-responsive, allowing users to study effectively on different screen sizes while maintaining readability and functionality

**Independent Test**: Can be tested by verifying that the textbook layout and functionality work properly on mobile screen sizes, delivering a usable reading experience.

### Implementation for User Story 3

- [ ] T029 [P] [US3] Create Week 7: Sensors Simulation (LiDAR, Depth, IMU), Physics & Collisions + Unity alternative intro chapter in docs/modules/module-2/week-7.mdx
- [ ] T030 [P] [US3] Create Week 8: Isaac Sim – Omniverse, USD assets, Synthetic Data chapter in docs/modules/module-3/week-8.mdx
- [ ] T031 [US3] Optimize layout for mobile screen sizes with proper text readability
- [ ] T032 [US3] Ensure code blocks scroll horizontally on mobile devices
- [ ] T033 [US3] Test responsive design across different screen sizes (mobile, tablet, desktop)
- [ ] T034 [US3] Add mobile-friendly navigation menu

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Module 1 – The Robotic Nervous System (ROS 2) Implementation

**Goal**: Complete all ROS 2 related chapters with comprehensive content, code examples, and visual elements

- [ ] T035 [P] Create Week 9: Isaac ROS – VSLAM, Nav2, Hardware-accelerated Perception chapter in docs/modules/module-3/week-9.mdx
- [ ] T036 [P] Create Week 10: Reinforcement Learning & Sim-to-Real basics chapter in docs/modules/module-3/week-10.mdx
- [ ] T037 [P] Create Week 11: Humanoid Kinematics, Bipedal Locomotion, Balance chapter in docs/modules/module-4/week-11.mdx
- [ ] T038 [P] Create Week 12: Vision-Language-Action models for robotics chapter in docs/modules/module-4/week-12.mdx
- [ ] T039 [P] Create Week 13: Capstone Project chapter in docs/modules/module-4/week-13.mdx
- [ ] T040 Add comprehensive ROS 2 code examples with proper syntax highlighting to all Module 1 chapters
- [ ] T041 Add relevant diagrams and visual elements to all Module 1 chapters
- [ ] T042 Test all code examples in Module 1 chapters for accuracy and executability

---

## Phase 7: Module 2 – The Digital Twin (Gazebo & Unity) Implementation

**Goal**: Complete all Gazebo and Unity related chapters with comprehensive content, code examples, and visual elements

- [ ] T043 [P] Create Introduction & Why Physical AI Matters chapter in docs/intro.mdx
- [ ] T044 [P] Create Module 2 overview chapter in docs/modules/module-2/intro.mdx
- [ ] T045 [P] Create Module 3 overview chapter in docs/modules/module-3/intro.mdx
- [ ] T046 [P] Create Module 4 overview chapter in docs/modules/module-4/intro.mdx
- [ ] T047 Add comprehensive Gazebo/Unity code examples with proper syntax highlighting to all Module 2 chapters
- [ ] T048 Add relevant diagrams and visual elements to all Module 2 chapters
- [ ] T049 Test all code examples in Module 2 chapters for accuracy and executability

---

## Phase 8: Module 3 – The AI-Robot Brain (NVIDIA Isaac) Implementation

**Goal**: Complete all NVIDIA Isaac related chapters with comprehensive content, code examples, and visual elements

- [ ] T050 Add comprehensive Isaac Sim/Isaac ROS code examples with proper syntax highlighting to all Module 3 chapters
- [ ] T051 Add relevant diagrams and visual elements to all Module 3 chapters
- [ ] T052 Test all code examples in Module 3 chapters for accuracy and executability
- [ ] T053 Implement Isaac-specific custom MDX components if needed

---

## Phase 9: Module 4 – Vision-Language-Action & Capstone Implementation

**Goal**: Complete all VLA and capstone project chapters with comprehensive content, code examples, and visual elements

- [ ] T054 Add comprehensive VLA and capstone code examples with proper syntax highlighting to all Module 4 chapters
- [ ] T055 Add relevant diagrams and visual elements to all Module 4 chapters
- [ ] T056 Test all code examples in Module 4 chapters for accuracy and executability
- [ ] T057 Create comprehensive capstone project that integrates concepts from all modules

---

## Phase 10: Quality Assurance & Validation

**Goal**: Ensure all requirements from spec.md are met and the textbook meets quality standards

- [ ] T058 Run broken-link checker → ensure 0 failures
- [ ] T059 Run Lighthouse audit → ensure scores ≥ 90/100 across Performance, Accessibility, Best Practices, and SEO
- [ ] T060 Validate every .mdx has unique id/slug + at least one visual element
- [ ] T061 Test build time → ensure under 3 minutes
- [ ] T062 Verify repository size remains under 250 MB
- [ ] T063 Test mobile responsiveness across all chapters
- [ ] T064 Verify no 404s, broken images, or console errors on deployed site
- [ ] T065 Ensure all prose is written in short, self-contained paragraphs optimized for future chunking and vector embedding

---

## Phase 11: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T066 [P] Documentation updates in docs/
- [ ] T067 Code cleanup and refactoring
- [ ] T068 Performance optimization across all stories
- [ ] T069 [P] Additional unit tests (if requested) in tests/unit/
- [ ] T070 Security hardening
- [ ] T071 Run quickstart.md validation
- [ ] T072 Final git squash with perfect commit history + descriptive README
- [ ] T073 Confirm final live URL loads < 2 sec and has no console errors

---

## Dependencies & Execution Order

### Phase Dependencies

- **Bootstrap (Phase 0)**: No dependencies - can start immediately
- **Setup (Phase 1)**: Depends on Bootstrap completion - Can start immediately after
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Module Implementation (Phase 6+)**: Depends on all desired user stories being complete
- **Quality Assurance (Phase 10)**: Depends on all content being complete
- **Polish (Final Phase)**: Depends on all desired modules being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority
- Each phase must be completed before starting the next

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members
- Module implementations can run in parallel after user stories are complete

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Create Week 1-2: Introduction to Physical AI & Embodied Intelligence chapter in docs/modules/module-1/week-1-2.mdx"
Task: "Create Week 3: ROS 2 Architecture, Nodes, Topics chapter in docs/modules/module-1/week-3.mdx"
Task: "Add runnable, syntax-highlighted code examples to Week 1-2 chapter"
Task: "Add clear visuals to Week 1-2 chapter"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 0: Bootstrap
2. Complete Phase 1: Setup
3. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
4. Complete Phase 3: User Story 1
5. **STOP and VALIDATE**: Test User Story 1 independently
6. Deploy/demo if ready

### Incremental Delivery

1. Complete Bootstrap + Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add Module 1 content → Test independently → Deploy/Demo
6. Add Module 2 content → Test independently → Deploy/Demo
7. Add Module 3 content → Test independently → Deploy/Demo
8. Add Module 4 content → Test independently → Deploy/Demo
9. Add Quality Assurance → Test → Deploy/Demo
10. Add Polish → Final deployment
11. Each story/module adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Bootstrap + Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Once user stories are done:
   - Developer A: Module 1 content
   - Developer B: Module 2 content
   - Developer C: Module 3 content
   - Developer D: Module 4 content
4. Once all content is done:
   - All developers: Quality Assurance
   - All developers: Polish & final validation
5. Stories/modules complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [US1], [US2], [US3] labels map task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Ensure all 15 chapters follow the exact pedagogical flow of the course
- Maintain repository size under 250 MB with no node_modules or large binaries committed
- All content must be in 100% .mdx (MDX v2+) format as required