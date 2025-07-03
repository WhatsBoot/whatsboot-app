# WhatsBoot - WhatsApp Marketing Platform

## Overview

WhatsBoot is a full-stack WhatsApp marketing platform built as a landing page with contact form functionality. The application is designed to showcase a WhatsApp automation service for bulk messaging and marketing campaigns. It features a modern React frontend with a Node.js/Express backend and uses PostgreSQL for data persistence.

## System Architecture

The application follows a monorepo structure with a clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animation**: Framer Motion for UI animations
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: In-memory storage fallback for development

## Key Components

### Frontend Components
1. **Landing Page**: Multi-section marketing page with hero, features, pricing, and contact form
2. **Navigation**: Responsive navigation with smooth scrolling to sections
3. **Contact Form**: Lead capture form with validation and WhatsApp number formatting
4. **UI Components**: Comprehensive shadcn/ui component library
5. **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Backend Components
1. **API Routes**: RESTful endpoints for contact management
2. **Storage Layer**: Abstracted storage interface with memory and database implementations
3. **Validation**: Shared Zod schemas for type safety
4. **Error Handling**: Centralized error handling middleware

### Shared Components
1. **Schema Definitions**: Drizzle table definitions and Zod validation schemas
2. **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Contact Submission**: User fills contact form → Frontend validation → API request → Backend validation → Database storage
2. **Contact Retrieval**: Admin requests → Backend queries database → Returns contact list
3. **Real-time Feedback**: Form submissions provide immediate feedback via toast notifications
4. **Error Handling**: Validation errors and server errors are gracefully handled and displayed

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for production
- **Drizzle ORM**: Type-safe database queries and migrations
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### UI Libraries
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Framer Motion**: Animation library

### Development Tools
- **Vite**: Development server and build tool
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment variable for development features

### Production Deployment
- Static frontend served by Express
- Single Node.js process serving both API and static assets
- PostgreSQL database with connection pooling
- Environment-based configuration for different deployment targets

## Changelog

Changelog:
- July 03, 2025. Initial setup
- January 03, 2025. Implemented active payment links in pricing section with Kiwify integration
- January 03, 2025. Added comprehensive database schema for admin dashboard and member management
- January 03, 2025. Created detailed installation guide for cPanel deployment
- January 03, 2025. Enhanced features section with detailed demonstration and improved UX

## User Preferences

Preferred communication style: Simple, everyday language.