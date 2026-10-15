HOW TO ADD A PDF STORY
1. Put your PDF in stories/pdfs/ (e.g. stories/pdfs/my-story.pdf). Use a simple file name: no spaces.
3. Also add a matching static <div class="card"> entry inside <div id="pdf-stories"> in stories.html.
   The Stories page is plain HTML (no JavaScript), so it always shows every story.
   That copy is used when the site is opened directly from disk (file://), where the browser blocks loading stories.json.
   Once the site is hosted, stories.json is loaded first and wins.
4. To remove the sample, delete its entry and stories/pdfs/sample-story.pdf.
