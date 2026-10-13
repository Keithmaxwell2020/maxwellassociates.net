HOW TO ADD A PDF STORY
1. Put your PDF in stories/pdfs/ (e.g. stories/pdfs/my-story.pdf). Use a simple file name: no spaces.
2. Add an entry to stories/stories.json, for example:
   {"title": "My Story", "date": "October 2026", "summary": "One or two sentences.", "file": "stories/pdfs/my-story.pdf"}
   (Separate entries with commas. The "file" path is relative to the site root.)
3. Also paste the same list into the <script id="stories-data"> block near the bottom of stories.html.
   That copy is used when the site is opened directly from disk (file://), where the browser blocks loading stories.json.
   Once the site is hosted, stories.json is loaded first and wins.
4. To remove the sample, delete its entry and stories/pdfs/sample-story.pdf.
