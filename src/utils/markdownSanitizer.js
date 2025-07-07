import { marked } from "marked"
import sanitize from "sanitize-html";
import TurndownService from "turndown";

export const sanitizeMarkdownContent = (markdownContent) => {
    const turndownService = new TurndownService();

    // 1. Convert markdown to html
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted html", convertedHtml);

    //2. Sanitize html
    const sanitizedHtml = sanitize(convertedHtml,{
        allowedTags: sanitize.defaults.allowedTags
    });
    console.log("Sanitized html",sanitizedHtml)

    //3. Convert the sanitized html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    console.log("Sanitized markdown ", sanitizedMarkdown)

    return sanitizedMarkdown;
}
