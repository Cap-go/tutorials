# Folders and their usage:

- `loadedVectorStore`: it's the vector store generated by training the model as described below in Step 3.
- `openai-readmes`: it's the set of readme's of the capacitor plugins, doing so, won't need to fetch the readmes again
- `public`: containing assets of capgo
- `scripts`: containing the scripts that perform fetch and write of files and plugins's metadata
- `src/content`: containing the tutorials that are shown on the website

# Setup

```
pnpm i
```

# Step 1. Fetch Capacitor Plugins Metadata from NPM registry

```
node scripts/generate_actions.mjs
```

# Step 2. Fetch Capacitor Plugins READMEs (the folder `openai-readmes`)

```
node scripts/write_readme.mjs
```

# Step 3. Train OpenAI Model On The Same

```
node scripts/train_model.mjs
```

# Step 4. Write Blogs

```
node scripts/generate_tutorials.mjs
```

# Step 5: Build and Preview

```
pnpm build && pnpm preview
```