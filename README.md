# LM-chan

LLM powered layman tooltip. Inspired by Yomitan/Yomichan.

## Development

### Prerequisites
- [Bun](https://bun.sh) installed

### Build
```bash
bun run build
```

## Loading in Firefox

1. Run `bun run build` to create the `dist/` directory
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Select `dist/manifest.json`
5. The extension should load with the LM-chan popup
