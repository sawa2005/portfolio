# AGENTS.md

## Build Commands

- `npm i` - Install dependencies
- `gulp` - Build all assets and start dev server (livereload on `src/`)

## Directory Structure

- `src/` - Editable source files
- `src/ts/*.ts` → `src/js/main.js` (TypeScript compiled)
- `src/scss/*.scss` → `src/css/main.css` (Sass compiled)
- `pub/` - Built output (deploy from here)

## Development

Gulp default task runs: copyHTML → tsTask → jsTask → imgTask → sassTask → cssTask → browserSync → watchTask

BrowserSync serves from `src/` directory with livereload. Edit files in `src/`, not `pub/`.