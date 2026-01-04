# AGENTS.md - AI Agent Guide for Apache Pinot Website

This document provides guidance for AI agents working with the Apache Pinot website codebase.

## Project Overview

The Apache Pinot website is a Next.js-based static site that serves as the official blog and documentation platform for Apache Pinot, an open-source distributed OLAP datastore. The site is built with modern web technologies and follows best practices for performance, SEO, and maintainability.

## Technology Stack

-   **Framework**: Next.js 14 (App Router)
-   **Language**: TypeScript
-   **Styling**: TailwindCSS
-   **Content Management**: ContentLayer
-   **UI Components**: shadcn/ui + custom components
-   **Package Manager**: Yarn 3.6.1
-   **Node Version**: v20 (specified in `.nvmrc`)

## Project Structure

```
pinot-site/
├── app/                    # Next.js app router pages and routes
│   ├── about/             # About page
│   ├── api/               # API routes (e.g., newsletter)
│   ├── blog/              # Blog listing and individual posts
│   ├── download/          # Download page
│   ├── hooks/             # React hooks
│   ├── lib/               # Utility functions
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── who_uses/          # Company showcase pages
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── [ComponentName].tsx # Custom components
├── data/                   # Static data and content
│   ├── authors/           # Author MDX files
│   ├── blog/              # Blog post MDX files
│   ├── downloads/          # Release notes MDX files
│   └── *.ts               # Data files (downloadsData.ts, etc.)
├── layouts/                # Page layout components
├── public/                 # Static assets
│   └── static/            # Images, favicons, etc.
├── scripts/                # Build and utility scripts
└── css/                    # Global styles
```

## Key Conventions

### File Naming

-   **Components**: PascalCase (e.g., `BlogCard.tsx`)
-   **Pages**: lowercase with hyphens (e.g., `page.tsx`, `not-found.tsx`)
-   **Utilities**: camelCase (e.g., `api.utils.ts`)
-   **Data files**: camelCase with `.ts` extension (e.g., `downloadsData.ts`)

### Component Structure

-   Components are located in `/components`
-   UI primitives from shadcn/ui are in `/components/ui`
-   Custom components are directly in `/components`
-   Layouts are in `/layouts`

### Content Management

-   **Blog posts**: MDX files in `/data/blog/` with frontmatter
-   **Authors**: MDX files in `/data/authors/`
-   **Release notes**: MDX files in `/data/downloads/`
-   **Download data**: TypeScript arrays in `/data/downloadsData.ts`

## Common Tasks

### Adding a New Blog Post

1. Create a new `.mdx` file in `/data/blog/` with the naming pattern: `YYYY-MM-DD-post-title.mdx`
2. Include required frontmatter:
    ```yaml
    ---
    title: 'Post Title'
    date: 'YYYY-MM-DD'
    tags: ['tag1', 'tag2']
    authors: ['author-name']
    summary: 'Brief summary'
    ---
    ```
3. Use MDX syntax for content
4. For videos, use `<VideoEmbed>` component instead of `<iframe>`

### Modifying Download Data

1. Edit `/data/downloadsData.ts`
2. Follow the `DownloadData` type structure:
    ```typescript
    {
      version: string;
      date: string;
      href: string;
      officialSource: { download, sha512, asc };
      binary: { download, sha512, asc };
      releaseNotes?: string;
    }
    ```
3. Ensure data is sorted (newest first)

### Adding a New Component

1. Create component file in `/components/` or `/components/ui/`
2. Use TypeScript with proper typing
3. Follow existing component patterns
4. Use TailwindCSS for styling
5. Export as default or named export as appropriate

### Modifying Styles

-   Use TailwindCSS utility classes in components
-   Global styles in `/css/tailwind.css`
-   Theme configuration in `tailwind.config.ts`
-   Dark mode support via `next-themes`

## Code Style Guidelines

### TypeScript

-   Always use TypeScript types/interfaces
-   Avoid `any` types
-   Use proper type definitions for props and data structures

### React Patterns

-   Use functional components with hooks
-   Prefer named exports for utilities, default exports for components
-   Use proper React patterns (avoid direct DOM manipulation)

### Styling

-   Use TailwindCSS utility classes
-   Follow existing spacing/sizing conventions
-   Ensure responsive design (mobile-first approach)
-   Support dark mode where applicable

### File Organization

-   Keep components focused and single-purpose
-   Extract reusable logic to `/app/lib/`
-   Group related components in subdirectories when needed

## Important Files

### Configuration Files

-   `next.config.js` - Next.js configuration
-   `tailwind.config.ts` - TailwindCSS configuration
-   `contentlayer.config.ts` - ContentLayer configuration
-   `tsconfig.json` - TypeScript configuration
-   `package.json` - Dependencies and scripts

### Key Data Files

-   `data/downloadsData.ts` - Download version data
-   `data/siteMetadata.js` - Site metadata and SEO
-   `data/headerNavLinks.ts` - Navigation links
-   `data/companiesUsingPinot.ts` - Company data
-   `data/featuresData.ts` - Feature data

### Build Scripts

-   `scripts/postbuild.mjs` - Post-build processing
-   `scripts/generate-sitemap.js` - Sitemap generation
-   `scripts/rss.mjs` - RSS feed generation

## Development Workflow

### Running the Development Server

```bash
yarn dev
```

Server runs on `http://localhost:3000` with hot-reloading.

### Building for Production

```bash
yarn build
yarn serve
```

### Code Quality

-   **Linting**: `yarn lint` (ESLint)
-   **Formatting**: `yarn format` (Prettier)
-   **Check**: `yarn check` (Prettier check only)

### Pre-commit Hooks

Husky runs ESLint and Prettier on staged files before commits.

## Content Guidelines

### Blog Posts

-   Use MDX format with frontmatter
-   Follow the structure in `CONTRIBUTION.md`
-   Use GitHub Flavored Markdown (see `MARKDOWN_GUIDE.md`)
-   Include proper tags for SEO
-   Use `<VideoEmbed>` for videos, not `<iframe>`

### Images

-   Place images in `/public/static/images/`
-   Reference in frontmatter `images` array
-   Use descriptive filenames

### Authors

-   Author files in `/data/authors/` as `.mdx`
-   Reference by filename in blog post frontmatter

## API Routes

-   `/app/api/newsletter/route.ts` - Newsletter subscription endpoint
-   Follow Next.js App Router API route conventions

## SEO Considerations

-   Use proper meta tags (handled in `app/seo.tsx`)
-   Include canonical URLs in blog post frontmatter
-   Ensure proper heading hierarchy
-   Use semantic HTML
-   Sitemap generated automatically

## Deployment

-   Deployed via Vercel
-   Static export (Next.js static site generation)
-   Build process includes post-build scripts for optimization

### Apache Configuration (.htaccess)

-   The `.htaccess` file is located on the `new-static-prod` branch
-   This file configures Content-Security-Policy (CSP) headers for the Apache-hosted website
-   **IMPORTANT**: When modifying CSP permissions, follow the [Apache Infrastructure CSP builder guidelines](https://infra.apache.org/tools/csp.html)
-   Key requirements:
    -   All additional domains/URLs must be pre-approved by VP Data Privacy (privacy@apache.org)
    -   Include a comment explaining why the CSP is changed and where permission was obtained
    -   Use the format: `SetEnv CSP_PROJECT_DOMAINS "host1 host2 host3"`
    -   **DO NOT EDIT CSP HEADERS WITHOUT ASKING FIRST** - contact users@infra.apache.org for assistance

## Common Patterns

### Data Fetching

-   Static data from `/data/` directory
-   ContentLayer for MDX content processing
-   No external API calls in components (static site)

### Routing

-   App Router file-based routing
-   Dynamic routes: `[...slug]` for catch-all
-   Special files: `layout.tsx`, `page.tsx`, `not-found.tsx`

### Theming

-   Dark mode via `next-themes`
-   Theme provider in `app/theme-providers.tsx`
-   Theme switch component available

## Best Practices

1. **Performance**

    - Use Next.js Image component for images
    - Optimize bundle size
    - Leverage static generation

2. **Accessibility**

    - Use semantic HTML
    - Include proper ARIA labels
    - Ensure keyboard navigation

3. **Maintainability**

    - Keep components small and focused
    - Extract reusable logic
    - Follow existing patterns

4. **Testing**
    - Currently no test suite configured
    - Manual testing recommended before commits

## Troubleshooting

### Common Issues

-   **Content not updating**: Clear `.next` cache and rebuild
-   **Type errors**: Ensure TypeScript types are properly defined
-   **Styling issues**: Check TailwindCSS configuration and class names
-   **Build failures**: Verify all dependencies are installed (`yarn install`)

### Getting Help

-   Check existing documentation (`README.md`, `CONTRIBUTION.md`)
-   Review similar implementations in the codebase
-   Contact DevRel Team for support

## Notes for AI Agents

-   Always read existing files before making changes
-   Follow the established patterns and conventions
-   Maintain TypeScript type safety
-   Ensure code passes linting and formatting checks
-   Test changes locally before suggesting commits
-   Preserve existing functionality when refactoring
-   Use semantic search to understand codebase structure
-   Check for similar implementations before creating new ones
