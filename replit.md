# SkillVedika Snowflake Training Program

## Overview

This is a modern web application for a Snowflake training program landing page with enrollment functionality. The application features a professional marketing site that showcases a comprehensive Snowflake training program, complete with course details, curriculum overview, trainer credentials, and an enrollment form. Built as a full-stack TypeScript application, it uses React for the frontend and Express.js for the backend, with a focus on converting visitors into enrolled students through an optimized user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **UI Framework**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API calls
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Layout**: Responsive design with mobile-first approach, featuring navigation, hero section, program benefits, curriculum, and enrollment form

### Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints
- **Development Server**: Custom Vite integration for hot module replacement in development
- **API Design**: RESTful API with structured error handling and request logging middleware
- **Email Integration**: Nodemailer for sending enrollment notifications to administrators
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Shared Zod schemas between frontend and backend for consistent validation

### Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Tables**: 
  - Users table for authentication (id, username, password)
  - Enrollments table for course registrations (id, fullName, email, phone, experience, createdAt)
- **Migration System**: Drizzle Kit for database schema migrations

### Component Structure
- **Reusable UI Components**: Comprehensive component library including forms, cards, buttons, navigation, and layout components
- **Page Components**: Modular sections including hero, program benefits, curriculum overview, and enrollment form
- **Form Components**: Sophisticated registration form with real-time validation, loading states, and success feedback
- **Navigation**: Responsive navigation with smooth scrolling to page sections

### Development Workflow
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Full TypeScript coverage with shared types between client and server
- **Code Organization**: Monorepo structure with shared schemas and clear separation of concerns
- **Path Aliases**: Configured for clean imports (@/ for client, @shared for shared code)

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon Database serverless PostgreSQL
- **Connection**: Environment variable-based connection string (DATABASE_URL)

### Email Service
- **Gmail SMTP**: Nodemailer configured for Gmail service
- **Authentication**: App password authentication via environment variables (EMAIL_USER, EMAIL_PASSWORD)
- **Recipients**: Admin notifications sent to rafimohammad055@gmail.com

### UI Libraries
- **Radix UI**: Comprehensive set of low-level UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

### Development Tools
- **Vite**: Build tool with React plugin and runtime error overlay
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment integration with cartographer plugin

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Styling and Theming
- **Class Variance Authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer