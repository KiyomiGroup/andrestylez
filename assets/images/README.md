# Image Files — andrestylez-main

Drop the following files in this folder. Names must match exactly.

## HERO (section: top of page)
| File | Purpose | Recommended size |
|------|---------|-----------------|
| `hero-bg-texture.png` | Warm atmospheric/ambient background layer behind artist portrait | 1920×1080px minimum |
| `hero-artist.png` | Artist portrait — centred, bottom-anchored, full hero height | Portrait, ideally transparent BG or dark BG. Min 800px tall |

## ABOUT (section: story)
| File | Purpose | Recommended size |
|------|---------|-----------------|
| `about-main.jpg` | Main portrait — left column, tall crop | Portrait orientation, min 600×800px |
| `about-accent.jpg` | Accent / overlap photo — bottom-right corner, red-border frame, greyscale tint | Any orientation, min 400×400px. Can be same as about-main.jpg |

## MUSIC (track artwork — square 1:1 ratio)
| File | Track | Recommended size |
|------|-------|-----------------|
| `cover-cana.jpg` | ĆǍŅÂ (2026) | 600×600px or larger |
| `cover-mariana.jpg` | Mariana (2025) | 600×600px or larger |
| `cover-incantation.jpg` | Incantation (2024) | 600×600px or larger |

> Tip: Screenshot from Spotify or Apple Music at 2× zoom, crop to square.

## GALLERY (visual diary grid)
| File | Grid slot | Display size | Notes |
|------|-----------|-------------|-------|
| `gallery-1.jpg` | gi1 — large hero left | ~400×400px displayed | **Most prominent** — use best shot |
| `gallery-2.jpg` | gi2 — top middle-left | ~300×200px displayed | |
| `gallery-3.jpg` | gi3 — top middle-right | ~200×200px displayed | |
| `gallery-4.jpg` | gi4 — large right col | ~300×400px displayed | Second most prominent |
| `gallery-5.jpg` | gi5 — middle left | ~200×200px displayed | |
| `gallery-6.jpg` | gi6 — middle right | ~300×200px displayed | |

> Source files can be any size — they're all `object-fit: cover` so they fill their slot automatically.
> Placeholders (styled text tiles) show until each file is added.

## Notes
- All photos display with `object-position: top center` to keep faces/subjects in frame
- Gallery images display with 30% greyscale at rest, full colour on hover
- About-accent image gets a red colour overlay + greyscale mix
- Missing images gracefully fall back to styled placeholder tiles
