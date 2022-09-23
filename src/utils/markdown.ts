type SubTitle = {
  name: String,
  id: String,
};

type MarkdownMetaData = {
  title: String | null,
  keywords: String | null,
  description: String | null,
  subtitles: SubTitle[],
}

/**
 * @remarks This function extract the title from a Markdown file
 *          It's used to know the page title
 * @param content Markdown file content
 * @returns The title or null if nothing is found
 */
function extractTitle(content: String) {
  const match = content.match(/<([^\s]+).*?id="nxtmdoc-meta-title".*?>((.+?))<\/\1>/gms);
  if (match && match.length) {
    return match[0]?.replace(/<(?:.|\n)*?>/gm, '').trim();
  }
  return null;
}

/**
 * @remarks This function extract the subtitles from a Markdown file
 *          It's used to know the page subtitles
 * @param content Markdown file content
 * @returns The subtitles or empty if nothing is found
 */
function extractSubtitles(content: String) {
  const result = content.match(/<h2.*?>(.*?)<\/h2>/gms);
  if (result && result.length) {
    return result.map((item) => {
      const name = item.replace(/<(?:.|\n)*?>/gm, '');
      const id = name.replace(/[^\w\s]/gi, '').trim().replace(/ +/g, '-').toLocaleLowerCase();
      return {
        name,
        id,
      }
    });
  }
  return [];
}

/**
 * @remarks This function extract the description from a Markdown file
 *          It's used to know the page description
 * @param content Markdown file content
 * @returns The description or null if nothing is found
 */
function extractDescription(content: String) {
  const match = content.match(/<([^\s]+).*?id="nxtmdoc-meta-description".*?>((.+?))<\/\1>/gms);
  if (match && match.length) {
    return match[0]?.replace(/<(?:.|\n)*?>/gm, '').trim().replace(/.*?\n/g, "").trim();
  }
  return null;
}

/**
 * @remarks This function extract the keywords from a Markdown file
 *          It's used to know the page keywords
 * @param content Markdown file content
 * @returns The keywords or null if nothing is found
 */
function extractKeywords(content: String) {
  const match = content.match(/<([^\s]+).*?id="nxtmdoc-meta-keywords".*?>((.+?))<\/\1>/gms)
  if (match && match.length) {
    return match[0]?.replace(/<(?:.|\n)*?>/gm, '').trim();
  }
  return null;
}

/**
 * @remarks This function extract the metadata from a Markdown file
 *          It's used to know the page title, description and keywords for SEO
 * @param content Markdown file content
 * @returns The metadata object
 */
export function extractMeta(content: String) {
  const meta: MarkdownMetaData = {
    title: null,
    description: null,
    keywords: null,
    subtitles: [],
  };
  if (!content) return meta;
  try {
    meta.title = extractTitle(content);
  } catch {}
  try {
    meta.description = extractDescription(content);
  } catch {}
  try {
    meta.keywords = extractKeywords(content);
  } catch {}
  try {
    meta.subtitles = extractSubtitles(content);
  } catch {}
  return meta;
}
