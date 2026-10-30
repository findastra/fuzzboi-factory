# Rules for assistants working on Fuzzbois (fuzzbois)

Public credit is always **Astra**, never a legal name. Fuzzbois are Astra's own drawings: do not add anyone else's art, and do not generate or redraw the layers.

Website (Fuzzboi Forge) and shared rules file with Claude Opus 5.5 (`claude-opus-5-5`), 2026-10-09. Record your model name and version here when you change something substantial.

- **Live site:** <https://findastra.github.io/fuzzboi-factory/>. GitHub Pages serves `main` from the repo root; `index.html` forwards to `site/`. Keep `.nojekyll`.
- **One copy of the rules:** `site/fuzzboi.js` holds the trait tables, decoding and drawing. The Forge (`site/index.html`) and Fuzzboi Friend (`findastra/fuzzboi-friend`, loading it from the live site) both use it, so a change here changes both. Keep it a plain script (no modules) and keep `window.Fuzzboi`'s names stable.
- **The rules are Astra's handwritten design notes, `art/procreate-export/Fuzzbois-33.png`.** Read that sheet before changing or explaining any rule; it beats the README and the layer numbering (it says Taco = 8, Cheese = 9).
- **Letters A–F are not on the notes.** The pages count them as 0–5, a stopgap Claude chose on 2026-10-09, until Astra adds them. Card: `findastra/fuzzboi-friend` handoffs/001.
- The repo description starts with the website link, and the Website field is set to it.
- Check after a change: serve the repo (`python -m http.server`) and try `456900`, `C0FFEE` and `A1361F` (two hats), Save PNG, and phone width.

Desktop recipe export added by OpenAI Codex (GPT-6), 2026-10-11. Original art and shared decoding rules remain unchanged.

The 32 cut-out layers moved to the hub (one art source, Flash Audit A58, Astra 2026-10-18): they live only in [findastra/astras-pet-os](https://github.com/findastra/astras-pet-os) `desktop-art/fuzzboi-friend/layers/`, with the desktop recipes. The Forge loads them from there; the Procreate export and banner stay here as the Fuzzbois art project. By Claude Opus 5.5 (`claude-opus-5-5`), 2026-10-18.

**Chat closed, 2026-10-20.** The first Fuzzbois chat (Claude Opus 5.5, `claude-opus-5-5`, started 2026-10-04: the Forge, the layer cut-outs, the 3D Fuzzboi, this repo) ended at Astra's request after merging PR #2. Nothing from it is left unmerged. Still open from that chat, for whoever picks it up:
- **OpenSea account:** Astra asked for "what's wrong with it" to be explained and fixed. Never checked, because the profile needs her wallet signed in. Look at it with her signed in. Ask before listing, publishing or spending anything.
- **Rarity rule:** the notes don't say how a rarity is picked when position 6 is 0. The banner's pink cloud Fuzzboi with hands rules out "any 1–4 elsewhere in the code".
- **3D crown:** the de-clip check leaves it perched on a spike tip. Flatten the top spike if it should sit down. Keep the no-clipping check whatever changes.
