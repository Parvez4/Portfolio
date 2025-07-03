# Replit.md - Salesforce Portfolio Website

## Overview

This is a professional portfolio website for a Salesforce developer, built as a full-stack application with React frontend and Express backend. The application showcases professional experience, skills, projects, and provides contact functionality. It's designed with a modern, responsive UI using shadcn/ui components and Tailwind CSS.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Components**: shadcn/ui (Radix UI primitives with Tailwind styling)
- **Styling**: Tailwind CSS with custom Salesforce-themed color palette
- **State Management**: React Query (@tanstack/react-query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: In-memory storage with fallback to PostgreSQL
- **API Design**: RESTful endpoints with JSON responses
- **File Serving**: Static file serving for resume downloads

### Development Setup
- **Package Manager**: npm with lock file
- **TypeScript**: Strict configuration with path aliases
- **Hot Reload**: Vite dev server with HMR
- **Error Handling**: Runtime error overlays in development

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling to sections
- **Hero Section**: Professional introduction with certifications
- **About Section**: Professional summary with statistics
- **Skills Section**: Technical competencies organized by category
- **Experience Section**: Professional work history with achievements
- **Projects Section**: Featured projects with metrics and technologies
- **Education Section**: Academic background and certifications
- **Contact Section**: Contact form with validation and submission

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Resume API**: Serves PDF resume downloads
- **Admin API**: Retrieves contact submissions (for future admin panel)
- **Error Handling**: Centralized error middleware with proper status codes

### Database Schema
- **Users Table**: User authentication (prepared for future admin features)
- **Contacts Table**: Contact form submissions with timestamps
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect

## Data Flow

1. **User Interaction**: User interacts with React components
2. **Form Submission**: Contact form uses React Hook Form with Zod validation
3. **API Request**: React Query handles HTTP requests to Express backend
4. **Data Validation**: Server validates input using Zod schemas
5. **Database Storage**: Drizzle ORM stores data in PostgreSQL
6. **Response Handling**: Success/error responses trigger toast notifications
7. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### UI and Styling
- **@radix-ui/react-***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Data Management
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling
- **@hookform/resolvers**: Form validation integration
- **zod**: Runtime type validation

### Database and Backend
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: PostgreSQL connection
- **express**: Web framework
- **connect-pg-simple**: PostgreSQL session store

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **@replit/vite-plugin-***: Replit-specific plugins

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Migrations managed via Drizzle Kit
- **Assets**: Static files served from `attached_assets` directory

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **Port**: Configurable via environment or defaults

### Deployment Process
1. Install dependencies: `npm install`
2. Build frontend and backend: `npm run build`
3. Push database schema: `npm run db:push`
4. Start production server: `npm start`

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 03, 2025. Initial setup