# Gerador de Redação - Gemini

## Overview

This is a Brazilian Portuguese essay generator web application that uses Google's Gemini AI to create ENEM-style dissertative essays. The application provides a simple web interface where users can input a topic (tema) and receive a generated essay in the Brazilian academic writing style required for the ENEM (National High School Exam).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML/CSS/JavaScript**: Simple single-page application with vanilla web technologies
- **UI Design**: Clean, modern interface with Google Material Design color scheme (#4285F4)
- **Responsive Layout**: Mobile-friendly design with viewport meta tag and flexible styling
- **Form-based Interaction**: Single input field for topic submission with real-time essay generation

### Backend Architecture
- **Express.js Server**: Lightweight Node.js web server handling static file serving and API endpoints
- **RESTful API**: Single POST endpoint `/api/generate-essay` for essay generation
- **Static File Serving**: Express middleware serves HTML, CSS, and client-side JavaScript files
- **Error Handling**: Comprehensive error responses for missing parameters and API failures

### AI Integration
- **Google Gemini AI**: Primary essay generation engine using the `gemini-1.5-flash` model
- **Prompt Engineering**: Structured prompts specifically designed for ENEM-style dissertative essays
- **API Key Management**: Flexible environment variable configuration supporting both `GOOGLE_API_KEY` and `GEMINI_API_KEY`

### Data Flow
1. User submits topic through web form
2. Frontend sends POST request to `/api/generate-essay`
3. Backend validates input and API key availability
4. Gemini AI generates essay content based on structured prompt
5. Generated text is returned to frontend and displayed to user

## External Dependencies

### AI Services
- **Google Generative AI (@google/generative-ai v0.24.1)**: Core dependency for essay generation using Gemini AI models
- **Required Environment Variables**: `GOOGLE_API_KEY` or `GEMINI_API_KEY` for API authentication

### Web Framework
- **Express.js (v5.1.0)**: Web server framework for handling HTTP requests and static file serving
- **Built-in Middleware**: JSON parsing and static file serving capabilities

### Runtime Requirements
- **Node.js**: Version 18.0.0 or higher (required by Google Generative AI package)
- **Portuguese Language Support**: Application interface and generated content optimized for Brazilian Portuguese

### Development Dependencies
- **Standard NPM**: Package management and dependency resolution
- **No Build Process**: Direct file serving without compilation or bundling steps