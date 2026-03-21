# ColumnSection Component - JSON Usage Guide

## Overview
ColumnSection component ab fully dynamic hai aur JSON data accept karta hai.

## Usage

### 1. Default Data ke saath (No props)
```tsx
import ColumnSection from '@/components/ServiceCategoryPage/ColumnSection/ColumnSection';

<ColumnSection />
```

### 2. JSON File se Data import karke
```tsx
import ColumnSection from '@/components/ServiceCategoryPage/ColumnSection/ColumnSection';
import sectionData from '@/components/ServiceCategoryPage/ColumnSection/sectionData.json';

<ColumnSection sections={sectionData} />
```

### 3. Direct Props se
```tsx
import ColumnSection from '@/components/ServiceCategoryPage/ColumnSection/ColumnSection';

const customSections = [
  {
    id: 'open-pores',
    heading: 'OPEN PORES',
    description: 'Your description here...',
    image: '/path/to/image.webp',
    imageAlt: 'Open Pores Treatment',
    treatmentLabel: 'TREATMENT FOR OPEN PORES',
    treatments: [
      { name: 'TREATMENT 1', link: '/treatment1' },
      { name: 'TREATMENT 2', link: '/treatment2' }
    ],
    buttons: [
      { label: 'BOOK NOW', link: '/book' }
    ],
    imagePosition: 'left' // or 'right'
  }
];

<ColumnSection sections={customSections} />
```

## JSON Structure

```json
{
  "id": "section-id",              // Unique ID for table of contents linking
  "heading": "SECTION HEADING",    // Main heading text
  "description": "Description...",  // Paragraph text
  "image": "/path/to/image.webp",  // Image path
  "imageAlt": "Alt text",          // Image alt text
  "treatmentLabel": "LABEL",       // Treatment section label
  "treatments": [                  // Array of treatment tags
    { "name": "NAME", "link": "/link" }
  ],
  "buttons": [                     // Array of action buttons
    { "label": "LABEL", "link": "/link" }
  ],
  "imagePosition": "left"          // "left" or "right"
}
```

## Image Position
- `"left"`: Image left side, content right side
- `"right"`: Content left side, image right side

## Notes
- Sections automatically alternate layout if you use `imagePosition`
- All links are Next.js `<Link>` components for optimized navigation
- Default data included hai agar props nahi pass karte
