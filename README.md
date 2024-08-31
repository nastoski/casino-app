# Casino App

## Overview

This project is built using **Next.js** with **TypeScript** and **Material-UI**. It demonstrates a structured layout with dynamic and static pages, managed by Redux Toolkit. The app includes features like a collapsible sidebar, modal pop-ups for authentication, and dynamic content rendering through a local API.

## Core Technologies

- **Next.js**: A React framework for server-side rendering and static web applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Material-UI**: A popular React UI framework that provides pre-built components and design tools.
- **Redux Toolkit**: A state management library that simplifies the usage of Redux in modern applications.

## Application Structure

### General Layout.tsx

- **Header**: A navigation bar with links.
- **Sidebar**: A collapsible sidebar using the Material-UI Drawer component.
- **Footer**: Contains links to dynamic pages and other relevant content.

### Homepage

- **Hero Section**: A prominent display area with engaging visuals or content.
- **Grid Items**: Two sections organized in a grid layout to display information and links.
- **Sponsor Component**: A section that displays sponsor logos and related content.
- **Data Table with Tabs**: A tabulated component to display data, data fetching using Redux Toolkit.

### Static Pages

- **Casino Page**: Displays a "Coming Soon" message or placeholder content.
- **Live Casino Page**: Displays a "Coming Soon" message or placeholder content.

### Dynamic Pages

Content is managed via a local JSON array and accessed through a local API endpoint **`/app/api`**.

- **Accordion Page (/accordion)**: A page featuring accordion components to display content.
- **External URL Page (/external-url)**: A simple page that redirects or links to an external URL.
- **Contact Page (/contact)**: A page with a contact form, including fields for name, email, message, etc.
- **Grid Page (/grid)**: A page that uses a grid layout to display content, similar to the homepage grid items.
- **Simple Page (/simple)**: A basic content page that uses **`dangerouslySetInnerHTML`** to render HTML content from a string.

### Authentication

- **Login and Registration**: Implemented as modal pop-ups triggered by buttons in the header without backend functionality.

## Application File Structure

This project is organized into several key directories and files:

### **app/**
- **[id]/**
  - `page.tsx`: Handles dynamic routing based on the `id` parameter.
- **api/**
  - **casinoBets/**
    - `route.ts`: API route for casino bets.
  - **sportsBets/**
    - `route.ts`: API route for sports bets.
  - **pages/**
    - `route.ts`: Route handler for dynamic page.

### **components/**
- `AccordionPageComponent.tsx`: Accordion-style page sections.
- `ContactPageComponent.tsx`: Contact page.
- `CustomTextField.tsx`: Custom text field.
- `Footer.tsx`: Footer.
- `GridPageComponent.tsx`: Grid-based layout.
- `HeroSection.tsx`: Hero section.
- `Layout.tsx`: Page layout.
- `ProgressComponent.tsx`: Progress display.
- `SimplePageComponent.tsx`: Simple page sections.
- `SponsorComponent.tsx`: Sponsors.
- `TableComponent.tsx`: Data Tables with 2 tabs.

### **live-casino/**
- `page.tsx`: Live casino static coming soon page.

### **casino/**
- `page.tsx`: Casino static coming soon page.

### **data/**
- `casinoBets.json`: Casino bets data.
- `pagesData.json`: Dynamic pages data.
- `sportsBets.json`: Sports bets data.

### **store/**
- **slices/**
  - `casinoBetsSlice.ts`: State for casino bets.
  - `pageSlice.ts`: State for dynamic pages.
  - `sportsBetsSlice.ts`: State for sports bets.
- `store.ts`: Redux store configuration.

## Setup and Start the Project

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nastoski/casino-app.git
   cd casino-app

2. **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install

3. **Setup environment variables:**:
    Create an .env.local file in the root of the project:
    ```bash
    NEXT_PUBLIC_BASE_URL=http://localhost:3000

4. **Run the development server:**:
    ```bash
    npm run dev
    # or
    yarn dev

**The project will be available at http://localhost:3000**