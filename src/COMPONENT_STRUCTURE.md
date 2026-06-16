# Athleet International Sports - React Components Structure

This document outlines the React component structure created from the HTML website.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx / Header.css          - Navigation bar with logo and links
│   ├── Hero.jsx / Hero.css              - Hero section with title and stats
│   ├── PillarsBar.jsx / PillarsBar.css  - 6 Pillars of the sports ecosystem
│   ├── MissionVision.jsx / MissionVision.css  - Mission and Vision cards
│   ├── DevelopmentModel.jsx / DevelopmentModel.css  - 6-stage development model
│   ├── VerticalsOverview.jsx / VerticalsOverview.css  - 4 main verticals showcase
│   ├── UKSCSection.jsx / UKSCSection.css  - United Kolkata Sports Club
│   ├── AJSDPSection.jsx / AJSDPSection.css  - Athleet Jr Sports Development Program
│   ├── AcademySection.jsx / AcademySection.css  - UKSC Academy
│   ├── MCFSSection.jsx / MCFSSection.css  - Manchester City Football School
│   ├── ConsultingSection.jsx / ConsultingSection.css  - Sports Consulting services
│   ├── LeadershipSection.jsx / LeadershipSection.css  - Leadership team
│   ├── ContactCTA.jsx / ContactCTA.css  - Contact & Call-to-action section
│   └── Footer.jsx / Footer.css          - Footer with links
├── constants/
│   └── theme.js                         - Color and styling constants
├── styles/
│   └── global.css                       - Global styles and responsive design
├── App.jsx                              - Main app component
├── main.jsx                             - Entry point
├── index.css                            - Base styles with font imports
└── App.css                              - (Can be removed - using component styles)
```

## Components Overview

### 1. **Header Component**
- Fixed navigation bar with logo and menu links
- Responsive navigation that hides on mobile
- Call-to-action button

### 2. **Hero Component**
- Full-screen hero section with background imagery
- Hero stats (4+, 2024, 4-18, MCFC)
- Primary and outline buttons

### 3. **PillarsBar Component**
- 6 pillars representing the core values
- Responsive grid layout
- Icons and labels for each pillar

### 4. **MissionVision Component**
- Two-card layout for Mission and Vision
- Icons and watermark text
- Responsive grid

### 5. **DevelopmentModel Component**
- 6-stage development pathway
- Bottom feature cards
- Detailed lists for each stage

### 6. **VerticalsOverview Component**
- 4 main vertical cards
- Background images with overlay
- Hover effects with animation

### 7. **UKSCSection Component**
- United Kolkata Sports Club details
- Player roster with tags
- Achievements grid
- Team composition display

### 8. **AJSDPSection Component**
- Fitness assessment parameters
- App features list
- Value proposition for schools and students

### 9. **AcademySection Component**
- Age group cards (4-7, 8-11, 12-15, 16-18)
- Deliverables grid
- Value boxes for different stakeholders

### 10. **MCFSSection Component**
- Manchester City partnership info
- 4 program levels with color coding
- Collaboration badges

### 11. **ConsultingSection Component**
- Expert advisory services
- 6 service cards with icons
- Consulting points list

### 12. **LeadershipSection Component**
- 3 leader cards with initials
- Role and name display
- Hover effects

### 13. **ContactCTA Component**
- Contact information
- Email and phone options
- Call-to-action button

### 14. **Footer Component**
- Copyright information
- Navigation links
- Responsive layout

## Color Scheme

The website uses a professional color palette:
- **Navy**: #0A1B3D (Primary)
- **Gold**: #F5A623 (Accent)
- **Blue**: #1A3A8F (Secondary)
- **Off-white**: #F4F6FA (Background)

## Responsive Design

All components are fully responsive with:
- Desktop-first approach
- Tablet breakpoint: 1024px
- Mobile breakpoint: 768px

## Installation & Running

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Key Features

✅ Fully componentized architecture
✅ Separate CSS files for each component
✅ Responsive design for all screen sizes
✅ Consistent color theme and typography
✅ Smooth scrolling and animations
✅ Easy to maintain and extend

## Customization

To customize:
1. Update color constants in `src/constants/theme.js`
2. Modify component-specific styles in respective `.css` files
3. Add new components following the same pattern
4. Update `App.jsx` to include new components

## Notes

- All images are sourced from Unsplash (external URLs)
- Font imports are from Google Fonts (Barlow and Barlow Condensed)
- The layout follows a mobile-first responsive approach
- Smooth scroll behavior is enabled on the entire page
