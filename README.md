# AI Chat Dashboard
A full-stack chat application that uses Google's Gemini AI API. The chat interface is built with React and Vite. Uses Clerk authentication to create a secure, personalized AI chat experience.

## Live Demo
Check out the live application: [GemClone on Vercel](https://gem-clone-lilac.vercel.app/)

![Screenshot 2025-02-19 225851](https://github.com/user-attachments/assets/323a5f63-726b-4cc0-b54a-b66539d9934c)

## Features
- Real-time chat interface with AI responses
- Secure sign-up and login functionality
- Auto-scrolling messages
- Clean and minimal UI 


## Getting Started

### Prerequisites

- Node.js >= 18
- npm
- Clerk Account
- Google AI Studio API Key

### Environment Setup

1. Create a `.env` file in your project root and add:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_GEMINI_API_KEY=your_gemini_api_key
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kwoeser/GemClone
```

2. Navigate to the project directory:
```bash
cd GemClone/client
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Features under Development
- Backend integration
- Multiple Chats stored in database
- Message history persistence


