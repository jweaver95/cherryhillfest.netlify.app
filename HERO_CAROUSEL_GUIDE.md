# Hero Carousel Implementation Guide

## Overview
A fully-featured, auto-rotating hero carousel showcasing the three powerful Cherry Hill heritage images with smooth transitions and accessibility features.

## Features Implemented

### 1. **Three Hero Slides**
Each slide uses your provided images with contextually relevant messaging:

- **Slide 1: "The Convergence"** (`Hero_#1_-_250_Years.jpeg`)
  - Split-frame showing 1945 Veterans parade alongside modern festival
  - Message: "80 Years in the Making. 250 Years in the Story. 10 Years of the Festival."

- **Slide 2: "Claim Your Place in History"** (`Hero_#2_-_A_Place_to_Come.jpeg`)
  - Intergenerational gathering with veterans and families at Middle Branch Park
  - Message: "Connecting generations through intergenerational dialogue and shared legacy"

- **Slide 3: "We Will Not Whisper Our History"** (`Hero_#3_-_Whisper_History.jpeg`)
  - Community celebration at the waterfront festival
  - Message: "We will lift it high. Join us at the waterfront as we celebrate resilience"

### 2. **Auto-Rotation**
- Automatically transitions every 6 seconds
- Smooth fade and scale effects
- Customizable interval timing

### 3. **Manual Controls**
- Previous/Next navigation buttons
- Dot indicators at bottom for direct slide selection
- Keyboard accessible (arrow keys work on focused elements)

### 4. **Accessibility Features**
- High-contrast mode support (integrates with site-wide toggle)
- ARIA labels on all interactive elements
- Alt text on all images
- Visible focus states
- Screen reader friendly

### 5. **Visual Effects**
- Gradient overlay for text readability (adjusts in high-contrast mode)
- Text shadow for enhanced legibility
- Smooth transitions between slides
- Responsive design (mobile to desktop)
- Bottom gradient fade for natural transition to content below

### 6. **Responsive Design**
- Height: 600px on mobile, 700px on desktop
- Scales images to cover while maintaining aspect ratio
- Touch-friendly button sizes
- Optimized text sizing across breakpoints

## Customization Options

### Change Auto-Play Settings
Edit `src/pages/Home.tsx`:

```tsx
<HeroCarousel
  highContrast={highContrast}
  autoPlay={true}        // Set to false to disable
  interval={6000}        // Time in milliseconds (6000 = 6 seconds)
/>
```

### Modify Slide Content
Edit `src/components/HeroCarousel.tsx`:

```tsx
const slides: Slide[] = [
  {
    image: '/your-image.jpg',
    title: 'Your Title',
    subtitle: 'Your subtitle text here',
    alt: 'Descriptive alt text for accessibility',
  },
  // Add more slides...
];
```

### Adjust Transition Speed
In `HeroCarousel.tsx`, modify the transition duration:

```tsx
className="transition-all duration-700"  // Change 700 to desired milliseconds
```

### Color Customization
The carousel respects your brand colors:
- Overlay gradient uses Deep Earth (#4A3728) → Resilience Red (#B22222) → Waterfront Emerald (#2E8B57)
- Button backgrounds use glassmorphism effect
- Dot indicators use white with opacity variations

## Performance Optimization

1. **Image Loading**: Images are loaded directly from `/public` folder
2. **Smooth Animations**: Uses CSS transforms (GPU-accelerated)
3. **Transition Blocking**: Prevents multiple rapid clicks during transitions
4. **Clean Timer Management**: Properly clears intervals on unmount

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Fallback for older browsers via Vite's build process

## Future Enhancements (Optional)

Consider adding:
- Swipe gestures for mobile
- Pause on hover
- Lazy loading for images
- Video backgrounds
- Parallax scrolling effects
- Ken Burns effect (slow zoom)

## Technical Details

**Component Location**: `src/components/HeroCarousel.tsx`
**Used In**: `src/pages/Home.tsx`
**Dependencies**: React hooks (useState, useEffect), Lucide React icons
**Styling**: Tailwind CSS with custom utilities
**Accessibility**: WCAG 2.1 AA compliant

---

**Questions or Issues?**
The carousel is production-ready and fully integrated with your site's color scheme, accessibility features, and responsive design system.
