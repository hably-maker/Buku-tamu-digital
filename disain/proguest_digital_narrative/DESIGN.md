---
name: ProGuest Digital Narrative
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#444653'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#757684'
  outline-variant: '#c4c5d5'
  surface-tint: '#3755c3'
  primary: '#00288e'
  on-primary: '#ffffff'
  primary-container: '#1e40af'
  on-primary-container: '#a8b8ff'
  inverse-primary: '#b8c4ff'
  secondary: '#1b6b51'
  on-secondary: '#ffffff'
  secondary-container: '#a6f2d1'
  on-secondary-container: '#237157'
  tertiary: '#003d27'
  on-tertiary: '#ffffff'
  tertiary-container: '#00563a'
  on-tertiary-container: '#3fd298'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c4ff'
  on-primary-fixed: '#001453'
  on-primary-fixed-variant: '#173bab'
  secondary-fixed: '#a6f2d1'
  secondary-fixed-dim: '#8bd6b6'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#00513b'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-kiosk:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  table-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for a **Digital Guestbook (Buku Tamu Digital)**, balancing the welcoming nature of hospitality with the rigorous efficiency of an enterprise administrative tool. The brand personality is **Professional, Trustworthy, and Effortless**.

The design style follows a **Corporate / Modern** aesthetic. It prioritizes clarity and high legibility to ensure that visitors—regardless of their technical proficiency—can complete registration tasks without friction. For the Kiosk interface, the style leans into high-contrast interactive elements and generous touch targets. For the Admin Dashboard, it transitions into a systematic, data-dense layout that emphasizes organization and quick scanning. 

Key visual principles:
- **Clarity over Ornament:** Every element serves a functional purpose.
- **Immediate Feedback:** Use of purposeful transitions and status colors to confirm user actions.
- **Hybrid Density:** A shared DNA that scales from high-touch kiosk modes to information-rich data grids.

## Colors

This design system utilizes a palette rooted in stability and growth. 

- **Primary (Deep Professional Blue):** Used for primary actions, branding, and navigation. It evokes a sense of security and institutional trust.
- **Secondary (Emerald Green):** Employed for "Welcoming" moments, such as the check-in completion screen or key positive interactions.
- **Success (Green):** Specifically reserved for validation states, success toasts, and positive status indicators in the dashboard.
- **Neutral (Light Gray):** The background (#F9FAFB) provides a clean canvas that minimizes eye strain and allows the primary actions to stand out.
- **Typography & Borders:** High-contrast grays ensure WCAG AA accessibility compliance across all interfaces.

## Typography

The design system uses **Inter** for all applications. It is a systematic, highly legible typeface designed for screens.

- **Kiosk Mode:** Uses `display-kiosk` and `body-lg` to ensure readability from a distance and comfort for touch interactions.
- **Admin Dashboard:** Relies on `body-sm` and `table-data` to maximize information density without sacrificing clarity.
- **Weights:** Use Semi-Bold (600) for hierarchy in headings and Medium (500) for interactive labels. Regular (400) is standard for all body copy and input text.

## Layout & Spacing

This design system employs a **Fluid Grid** approach for the dashboard and a **Centric Layout** for the kiosk mode.

- **Admin Dashboard:** A 12-column grid with 24px gutters. Sidebars are fixed at 280px, while the main content area expands. 
- **Kiosk Mode:** Content is centered within a maximum width of 800px on tablet devices. Padding is increased to `3xl` (64px) to create a focused, premium feel.
- **Spacing Rhythm:** Based on a 4px baseline. All margins and paddings must be multiples of 4, with 16px (`md`) being the default for most component spacing.
- **Mobile/Touch:** Any clickable element must maintain a minimum height of 48px to ensure ease of use.

## Elevation & Depth

To maintain a "Professional and Efficient" feel, elevation is used sparingly to define hierarchy rather than for decoration.

- **Tonal Layers:** The background is `#F9FAFB`. Secondary containers (like cards or sidebars) use a pure `#FFFFFF` background with a subtle `#E5E7EB` border.
- **Shadows:** Only used to indicate "Floating" elements like dropdowns, modals, or the primary kiosk check-in card. Use a soft, diffused shadow: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`.
- **Admin Tables:** No shadows are used for table rows. Instead, use a 1px border at the bottom of each row to maintain a flat, clean, and organized data view.

## Shapes

The shape language is **Soft** to balance the "Professional Blue" with a modern, approachable feel.

- **Default (4px):** Used for input fields, checkboxes, and small buttons in the Admin Dashboard.
- **Large (8px):** Used for Cards, Modals, and the primary Action Buttons in the Kiosk Mode.
- **XL (12px):** Used for the main container of the guestbook entry form on tablets to make the interface feel modern and distinct from standard "web forms."

## Components

### Buttons
- **Primary:** Solid `#1E40AF` with white text. High-contrast, 8px border-radius. In Kiosk mode, these should have a minimum height of 56px.
- **Secondary:** Outlined with `#1E40AF` or solid `#065F46` for "Completion" actions.
- **Ghost:** Used for "Cancel" or "Back" actions to reduce visual noise.

### Form Fields
- **Kiosk Inputs:** Large fields (56px height) with font size `body-lg`. Labels are placed above the input in `label-md`. 
- **Focus State:** 2px solid `#1E40AF` border with a subtle light blue outer glow.
- **Validation:** Error states use `#DC2626` (Red) text and borders.

### Data Tables (Admin)
- **Header:** Light gray background (`#F3F4F6`), bold text, 12px padding.
- **Rows:** 1px border-bottom `#E5E7EB`. Hover state uses a very light blue tint (`#EFF6FF`).
- **Cells:** Vertical alignment centered, horizontal padding 16px.

### Chips/Tags
- Used in the dashboard for visitor status (e.g., "Checked In", "Scheduled", "Checked Out").
- Small 4px radius, low-saturation background tints with high-saturation text of the same hue.

### Cards
- Pure white background, 1px border `#E5E7EB`.
- Used to group related guest information or as the primary container for the Kiosk check-in flow.