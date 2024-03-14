import glob
import re

def process_frontmatter(frontmatter):
    # Remove unnecessary fields
    frontmatter = re.sub(r'^author_title:.*\n?', '', frontmatter, flags=re.MULTILINE)
    frontmatter = re.sub(r'^author_url:.*\n?', '', frontmatter, flags=re.MULTILINE)
    frontmatter = re.sub(r'^author_image_url:.*\n?', '', frontmatter, flags=re.MULTILINE)
    frontmatter = re.sub(r'^keywords:.*\n(\s+-.*\n?)*', '', frontmatter, flags=re.MULTILINE)

    # Replace `description` with `summary` and handle multi-line string
    frontmatter = re.sub(r'^description:\n\s+(.*)', r'summary:\n  - "\1"', frontmatter, flags=re.DOTALL)

    # Convert `author` to `authors` array
    frontmatter = re.sub(r'^author: (.*)$', r'authors:\n  - "\1"', frontmatter, flags=re.MULTILINE)

    return frontmatter

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Regex to identify and isolate the frontmatter
    pattern = re.compile(r'^---\n(.*?\n)---', re.DOTALL)
    match = pattern.search(content)
    if match:
        frontmatter = match.group(1)
        modified_frontmatter = process_frontmatter(frontmatter)
        # Replace the old frontmatter with the modified one
        new_content = pattern.sub(f'---\n{modified_frontmatter}---', content, count=1)

        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)

# Path to your .mdx files
files_path = './data/blog/*.mdx'

for file_path in glob.glob(files_path):
    process_file(file_path)

print("Frontmatter processing complete.")
