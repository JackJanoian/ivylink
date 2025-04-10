# Product Requirements Document (PRD): IvyLink

## App Overview

IvyLink, is an AI-powered web application built to help students craft highly personalized college application essays. The app provides detailed, school-specific feedback by analyzing a student's personal statement and tailoring it to each institution's unique values and expectations. Users can generate multiple essay versions for different colleges, get tone suggestions, rewrite prompts, and even request optional human feedback. The ultimate goal is to empower students to tell their story in a compelling way that resonates with each university's admissions criteria.

## User Flow

Users begin their journey on the landing page, where they are introduced to AI EssayCoach through a clean and compelling layout. The landing page contains a brief overview, testimonials, and a call-to-action prompting users to sign up or log in.

After signing up or logging in, users are directed to the dashboard. Here, they can upload their main personal statement. They are then asked to select the colleges they are applying to from a searchable list.

Once the college list is finalized, the platform processes the uploaded essay and generates tailored versions for each institution. Users are then taken to an editing interface where they can view their base essay and toggle between the forked versions. For each version, line-by-line feedback is presented alongside rewrite suggestions and tone alignment based on the chosen school's preferences.

If users want more insight, they can choose to request human feedback, which can be done through an integrated payment and booking system. After receiving AI and/or human feedback, users can revise their essays using the built-in editor and finally export their polished drafts.

## Core Features

1. **Essay Upload**: Users can upload or paste their base personal statement directly into the app.
2. **College Selection**: Students select the colleges they are applying to, triggering the forking mechanism.
3. **Essay Forking**: The AI generates custom-tailored versions of the essay, aligning tone and focus with each selected college's values.
4. **Line-by-Line Feedback**: Users receive highly specific feedback on sentence structure, tone, and content relevance.
5. **Rewrite Prompts**: Suggestions are presented alongside each line of feedback, helping users improve clarity, tone, or impact.
6. **Tone Customization Engine**: Essays are aligned to college-specific expectations such as "builder" for MIT or "global thinker" for Yale.
7. **Interactive Editor**: An in-browser editor allows students to work on multiple essay versions with real-time change tracking.
8. **Human Feedback (Optional)**: Users can request a human reviewer to provide further feedback, available for an additional fee.
9. **Export Options**: Final essays can be downloaded or copied for use in applications.

## In-scope & Out-of-scope

### In-scope:

- AI-powered feedback generation
- College-specific tone and content customization
- Essay editing interface with tracked suggestions
- Human feedback option
- User authentication and profile management
- Multi-version essay generation and storage

### Out-of-scope:

- College application form filling or submission
- AI-generated entire essays without a user-provided base
- Grammar correction as a standalone tool
- Full writing tutoring or long-term mentorship

## Frontend Guidelines Document

### UI & Design Principles

The design should be clean, focused, and intuitive. The writing interface must reduce distractions while offering helpful tools. Navigation should be clear with a fixed sidebar or topbar for moving between essay versions.

### Colour Palettes:

- **Primary:** #4A90E2 (Sky Blue)
- **Secondary:** #50E3C2 (Teal)
- **Accent:** #F5A623 (Warm Orange)
- **Background:** #FFFFFF (White)
- **Text:** #333333 (Dark Grey)

### Fonts:

- **Headings:** Montserrat - Bold, readable, and modern
- **Body Text:** Roboto - Clean and legible, optimized for screen reading

### Icons:

- Use **FontAwesome** icons for common actions (edit, save, export)
- Custom SVG icons for essay tone indicators (e.g., lightbulb for ideas, flag for tone alerts)
- Consistent icon sizing and spacing to maintain a harmonious UI

The frontend should feel modern, student-friendly, and polished—balancing form and function to support essay creation without overwhelming the user.
