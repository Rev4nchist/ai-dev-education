# Design System Update

## New Color Palette

We've updated the design system to use an earthy, natural color palette that creates a sophisticated, professional look for the AI Dev Education site. The palette consists of:

### Primary Colors

- **Dark Green/Gray (`#2C3930`)**: Used for text on light backgrounds, dark mode backgrounds
- **Olive Green (`#3F4F44`)**: Used for secondary elements, borders, and accents
- **Amber/Brown (`#A27B5C`)**: Used for primary actions, highlights, and focused elements
- **Cream (`#DCD7C9`)**: Used for light backgrounds, text on dark backgrounds

### Implementation

The color system is implemented through CSS variables in `globals.css` and is available through the Tailwind classes:

#### Core Theme Colors

| Purpose | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | Cream (`#DCD7C9`) | Dark Green (`#2C3930`) |
| Foreground (Text) | Dark Green (`#2C3930`) | Cream (`#DCD7C9`) |
| Primary | Amber (`#A27B5C`) | Brightened Amber |
| Secondary | Olive (`#3F4F44`) | Brightened Olive |
| Accent | Olive (`#3F4F44`) | Brightened Amber |

#### Direct Color Access

The new color palette is also available directly through Tailwind classes:

```html
<!-- Earth tone palette -->
<div class="bg-earth-darkgreen text-earth-cream">Dark green background</div>
<div class="bg-earth-olive text-white">Olive background</div>
<div class="bg-earth-amber text-white">Amber/brown background</div>
<div class="bg-earth-cream text-earth-darkgreen">Cream background</div>

<!-- Gradient variations -->
<div class="bg-forest-800 text-cream-700">Dark green (forest-800)</div>
<div class="bg-forest-600 text-cream-700">Olive green (forest-600)</div>
<div class="bg-amber-700 text-forest-800">Amber brown (amber-700)</div>
<div class="bg-cream-700 text-forest-800">Cream (cream-700)</div>
```

## Typography 

The typography system remains largely unchanged, using the Inter font family for body text and headings.

## Components

Components should use the updated color system. Here are some examples of how key components should look with the new palette:

### Buttons

```html
<!-- Primary button (amber) -->
<button class="bg-primary text-primary-foreground hover:bg-amber-600">
  Primary Action
</button>

<!-- Secondary button (olive) -->
<button class="bg-secondary text-secondary-foreground hover:bg-forest-500">
  Secondary Action
</button>

<!-- Tertiary/Ghost button -->
<button class="text-forest-800 hover:bg-cream-600 dark:text-cream-700 dark:hover:bg-forest-700">
  Tertiary Action
</button>
```

### Cards

```html
<div class="rounded-lg border bg-card text-card-foreground shadow-sm">
  <div class="p-6">
    <h3 class="text-xl font-bold">Card Title</h3>
    <p class="mt-2 text-muted-foreground">
      Card content using the muted foreground color.
    </p>
  </div>
</div>
```

### Accent Elements

For elements that need to stand out but aren't primary actions:

```html
<div class="bg-accent/10 text-accent-foreground p-4 rounded-lg">
  <p>Highlighted content using accent colors at 10% opacity</p>
</div>
```

## Accessibility Considerations

The new color palette has been tested for accessibility, with color contrast ratios that meet WCAG AA standards:

- Text on backgrounds maintains at least 4.5:1 contrast ratio for normal text
- Large text and UI elements maintain at least 3:1 contrast ratio
- Interactive elements have clear focus and hover states

## Dark Mode

Dark mode uses the dark green (`#2C3930`) as the primary background color with cream text, creating an inverted version of the light theme. The amber and olive colors are slightly brightened in dark mode to maintain appropriate contrast and visibility.

## Implementation Notes

1. Continue using the existing CSS variables in your components
2. For direct color access, use the new Tailwind color classes
3. Test all components in both light and dark mode to ensure appropriate contrast 