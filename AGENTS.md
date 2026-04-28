# AGENTS.md

## Build Commands

- `npm i` - Install dependencies
- `gulp` - Build + dev server (livereload on `src/`)
- `gulp build` - Build to `pub/` (no server, for Cloudflare)
- `wrangler pages deploy pub/` - Deploy to Cloudflare Pages

## Directory Structure

- `src/` - Editable source files
- `src/ts/*.ts` → `src/js/main.js` (TypeScript compiled)
- `src/scss/*.scss` → `src/css/main.css` (Sass compiled)
- `pub/` - Built output (deploy from here)

## Development

Gulp default task runs: copyHTML → tsTask → jsTask → imgTask → sassTask → cssTask → browserSync → watchTask

BrowserSync serves from `src/` directory with livereload. Edit files in `src/`, not `pub/`.