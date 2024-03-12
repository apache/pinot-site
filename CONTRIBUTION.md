# How to Contribute Blog Posts to Apache Pinot

This guide will walk you through the process of writing and submitting a blog post.

## Write Your Blog Post

### 1. Set Up Your Environment

To get started, make sure you have a Markdown editor. You can use any text editor like VSCode, Sublime Text, or even online Markdown editors.

### 2. Create Your Blog Post

Create a new `.mdx` file for your blog post. The file should be named in a way that reflects the content of your post, typically following the format `YYYY-MM-DD-your-post-title.mdx`.

### 3. Frontmatter Configuration

Each blog post requires specific metadata in the frontmatter. Here's the structure you should follow:

```yaml
---
title: (required)
date: (required)
tags: (required, can be empty array)
lastmod: (optional)
draft: (optional)
summary: (optional)
images: (optional, if none provided defaults to socialBanner in siteMetadata config)
authors: (optional list which should correspond to the file names in `data/authors`. Uses `default` if none is specified)
layout: (optional list which should correspond to the file names in `data/layouts`)
canonicalUrl: (optional, canonical url for the post for SEO)
---
```

Here's an example of a post's frontmatter:

```yaml
---
title: 'LinkedIn with Apache Pinot'
date: '2023-12-4' # Date of writing or publishing - format YYYY-MM-DD
tags: ['linkedin', 'pinot', 'apache'] # Relevant tags, keywords for SEO
lastmod: '2024-02-12' # (Optional) Date of last modification -  format YYYY-MM-DD
draft: false # Set to true if the post is not ready for publishing
summary: 'A Brief History of Scaling LinkedIn'
images: [] # (Optional) Links to images used in the post
authors: ['default', 'Author2'] # List of authors
layout: ''
canonicalUrl: 'https://pinot.apache.org/blog/2015-05-16-LinkedIn-Scaling' # (Optional) Canonical URL if applicable
---
```

### 4. Writing Content

#### Videos

The power of MDX is that we can use React components inside markdown files. For instance, to load a video you need to use the custom component `<VideoEmbed src='https...' title='Video...' />` instead of the `<iframe></iframe>` provided by YouTube.

```html
<VideoEmbed src="https://www.youtube.com/embed/2cwRHM4J7kI" title="YouTube video player" />
```

Instead of

```html
<iframe
    src="https://www.youtube.com/embed/2cwRHM4J7kI?si=BMVZanJIuXv9o0du"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
></iframe>
```

### 5. Review and Proofread

Before submitting, please review and proofread your post for spelling, grammar, and factual accuracy.

## Submitting Your Blog Post

1. **Create a New Branch**: Create a new branch for your blog post.

2. **Commit Your Changes**: Add your `.mdx` file in `data/blog folder` and any associated media files in `public/static/images` to the branch. Commit the changes with a clear commit message.

3. **Raise a Pull Request (PR)**: Submit a PR to the Apache Pinot repository from your branch. Ensure your PR title and description are clear and concise.

4. **PR Review**: Wait for the maintainers to review your PR. They might request changes or edits. Be responsive to feedback.

5. **Approval and Merge**: Once your PR is approved, it will be merged, and your blog post will be published on the Apache Pinot website.

## Suggesting Improvements

If you have suggestions for improving the blog contribution process or the guide itself, please feel free to raise an issue or submit a PR with your proposed changes.
