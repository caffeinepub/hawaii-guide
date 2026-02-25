# Hawaii Guide

## Current State

The Visit Oahu page displays:
- Navigation bar with "Visit Oahu" title in the left
- Hero section with "Aloha" subtitle badge above main title
- Hero title: "Visit" / "Oahu"
- Full-page sections for Attractions, Activities, Dining, and Tips

## Requested Changes (Diff)

### Add
- Replace the "Aloha" subtitle badge text in the hero section with "Visit Oahu"

### Modify
- Hero section subtitle badge: change from "The Gathering Place" to "Visit Oahu"

### Remove
- None

## Implementation Plan

**Frontend**
- Update VisitOahu2.tsx hero section: replace the subtitle badge text from "The Gathering Place" to "Visit Oahu" (line 276)
- Validate with typecheck, lint, and build

## UX Notes

The user wants "Visit Oahu" to appear prominently in the hero subtitle badge where "Aloha" or "The Gathering Place" currently displays — this strengthens the page branding and makes the island name immediately visible in the hero section.
