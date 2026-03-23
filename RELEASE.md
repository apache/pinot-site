# How to Release a New Version of Apache Pinot

This guide will walk you through the process of releasing a new version of Apache Pinot.

## 1. Create the Release Note

Create a new `.mdx` file for the release. The file should be named with the version it goes by, for example: `1.1.0.mdx`.

## 2. Frontmatter Configuration

Each release note requires specific metadata in the frontmatter. Here's the structure you should follow:

```yaml
    ---
    version: '1.1.0' # Version of your release
    date: '3/25/2024' # Date of the release
    href: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download' # Example
    officialSource:
        download: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz?action=download' # Example
        sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.sha512?action=download' # Example
        asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-src.tar.gz.asc?action=download' # Example
    binary:
        download: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz?action=download' # Example
        sha512: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.sha512?action=download' # Example
        asc: 'https://www.apache.org/dyn/closer.lua/pinot/apache-pinot-1.1.0/apache-pinot-1.1.0-bin.tar.gz.asc?action=download' # Example
    releaseNotes: 'This release includes new multi-stage query engine features, enhancements, and bug fixes.' # Release Note Example
    ---
```

## Submitting Your Release

1. **Create a New Branch**: Create a new branch for your blog post.

2. **Commit Your Changes**: Add your `.mdx` file in `data/download` folder to the branch. Commit the changes with a clear commit message.

3. **Raise a Pull Request (PR)**: Submit a PR to the Apache Pinot repository from your branch. Ensure your PR title and description are clear and concise.

4. **PR Review**: Wait for the maintainers to review your PR. They might request changes or edits. Be responsive to feedback.

5. **Approval and Merge**: Once your PR is approved, it will be merged, and your RELEASE will be published on the Apache Pinot website, under the Download page.

## Suggesting Improvements

If you have suggestions for improving the blog contribution process or the guide itself, please feel free to raise an issue or submit a PR with your proposed changes.
