# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

`tadker-system` is a new, empty project adjacent to `tadker-design` (the SAIS design system). The SAIS design system lives at `../tadker-design/SAIS Design System/` and contains the full visual language, CSS tokens, React components, and UI kit for the Saudi Supreme Authority for Industrial Security (SAIS) government portal.

## SAIS Design System Reference

Before building any UI in this repo, read the design system:

- **Tokens & base styles:** `../tadker-design/SAIS Design System/colors_and_type.css`
- **Design rules (full):** `../tadker-design/SAIS Design System/README.md`
- **Agent skill entry point:** `../tadker-design/SAIS Design System/SKILL.md`
- **UI kit (React + HTML):** `../tadker-design/SAIS Design System/ui_kits/portal/`

Key constraints to remember without re-reading:

- **Colors:** Deep Navy `#0A3161` (structural anchor), Saudi Gold `#C6A026` (accent, ≤15% of screen, never as body text on white), White for cards, `#F5F6F8` for page ground.
- **Typography:** IBM Plex Sans (Latin) + IBM Plex Sans Arabic / Noto Kufi Arabic. Scale: H1 36 / H2 26 / H3 18 / Body 15 / Small 13 / Label 12.
- **Icons:** Tabler Icons outline at 24px only — never filled, never duotone.
- **Layout:** 12-column grid, 1280px max-width, 24px gutters.
- **Spacing scale:** 4 / 8 / 16 / 24 / 48 / 80 px.
- **RTL/Bilingual:** Arabic-first. `lang="ar"` + `dir="rtl"` at document root for Arabic pages. Wrap LTR strings (IDs, dates, codes) in `<span dir="ltr">`.
- **Accessibility:** WCAG 2.1 AA — 4.5:1 contrast minimum, 2px Saudi Gold focus ring, 44×44px mobile touch targets.
- **Government tone:** Formal MSA Arabic + English equivalent on every page. No emoji, no marketing language, no colloquialisms.
- **DGA compliance:** DGA registration number in every page footer; NafaZ / Absher SSO for authentication.

## Assets pending from SAIS

These are flagged as missing in the design system — do not fabricate them:

- Official SAIS logo (Arabic + English lockup, white-on-navy + navy-on-white, SVG + PNG)
- Licensed IBM Plex Sans Latin TTFs (currently using Google Fonts CDN as a stand-in)
- Any custom Tabler-style SVG icons for the SAIS service domain

Logo appearances should use the typographic placeholder `nnnnnn nnnnnn nnnnn nnnnnnn` until the official assets are received.
