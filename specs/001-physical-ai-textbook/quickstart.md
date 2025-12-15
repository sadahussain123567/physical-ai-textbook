# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Feature**: 001-physical-ai-textbook
**Date**: 2025-12-14

## Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Git installed
- Basic knowledge of MDX and React components

### Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd [repository-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser to** `http://localhost:3000` to view the textbook

### Creating a New Chapter

1. **Create a new MDX file** in the appropriate module directory:
   ```
   docs/modules/module-1/week-1-x.md
   ```

2. **Add proper frontmatter**:
   ```md
   ---
   id: module1-week1-topic
   slug: module1-week1-topic
   title: Topic Title
   module: 1
   week: 1
   ---
   ```

3. **Add content** with appropriate code examples and visual elements

### Using Custom Components

The textbook includes several custom MDX components:

- **Callout**: For highlighting important information
  ```mdx
  <Callout type="info">Important information here</Callout>
  ```

- **CodeWithResult**: For showing code with its output
  ```mdx
  <CodeWithResult>
  ```python
  print("Hello World")
  ```
  ```
  Hello World
  ```
  </CodeWithResult>
  ```

- **ROS2Command**: For ROS 2 terminal commands
  ```mdx
  <ROS2Command>ros2 run package_name node_name</ROS2Command>
  ```

- **IsaacTip**: For NVIDIA Isaac specific tips
  ```mdx
  <IsaacTip>Isaac-specific advice here</IsaacTip>
  ```

- **HardwareSpec**: For hardware specifications
  ```mdx
  <HardwareSpec>Name: Value</HardwareSpec>
  ```

### Building the Textbook

To build the static site:
```bash
npm run build
```

The build must complete in under 3 minutes as per requirements.

### Running Quality Checks

1. **Lighthouse audit**:
   ```bash
   # Run after building
   npx lighthouse http://localhost:3000 --only-categories=performance,accessibility,best-practices,seo
   ```

2. **Broken link check**:
   ```bash
   npx lychee .
   ```

3. **Custom validation**:
   ```bash
   npm run validate
   ```

### Deployment

The textbook is deployed via GitHub Actions to GitHub Pages or Vercel. Ensure all quality checks pass before merging to main.