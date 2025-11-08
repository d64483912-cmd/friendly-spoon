# Academic/Clinical Mode Switching Implementation

## Overview
Successfully implemented a dual-mode system for NelsonGPT that allows users to switch between **Clinical Mode** (bedside decision support) and **Academic Mode** (in-depth learning) with different system prompts and UI toggles.

## Changes Implemented

### 1. System Prompts (lib/config.ts)
Added two specialized system prompts:

- **SYSTEM_PROMPT_CLINICAL**: Optimized for rapid bedside decision support
  - Concise, actionable responses
  - Prioritizes clinical decision trees
  - Focus on differential diagnosis and immediate management
  
- **SYSTEM_PROMPT_ACADEMIC**: Optimized for in-depth learning
  - Detailed explanations with pathophysiology
  - Evidence-based discussion with research citations
  - Teaching-oriented responses

### 2. User Preferences (lib/user-preference-store/utils.ts)
- Added `ResponseMode` type: `"clinical" | "academic"`
- Removed deprecated `multiModelEnabled` property
- Added `responseMode` to UserPreferences with default value of `"clinical"`
- Updated context provider with `setResponseMode` function

### 3. Response Mode Settings UI (app/components/layout/settings/response-mode/)
Created `ResponseModeSettings` component:
- Visual toggle between Clinical and Academic modes
- Icon indicators (Stethoscope for Clinical, GraduationCap for Academic)
- Feature descriptions for each mode:
  - **Clinical Mode**: Quick answers, Decision trees, Bedside-ready, Time-sensitive
  - **Academic Mode**: Detailed, Evidence-based, Pathophysiology, Teaching-focused

### 4. Settings Integration (app/components/layout/settings/settings-content.tsx)
- Replaced "Models" tab with "Response Mode" tab
- Updated TabType enum from "models" to "mode"
- Integrated ResponseModeSettings component

### 5. Chat API Integration (app/api/chat/route.ts)
- Added `responseMode` parameter to ChatRequest type
- Implemented system prompt switching logic:
  ```typescript
  let effectiveSystemPrompt = systemPrompt
  if (!effectiveSystemPrompt) {
    effectiveSystemPrompt =
      responseMode === "academic"
        ? SYSTEM_PROMPT_ACADEMIC
        : SYSTEM_PROMPT_CLINICAL
  }
  ```

### 6. Chat Core Hooks (app/components/chat/use-chat-core.ts)
- Added `useUserPreferences()` hook to access user's response mode
- Updated all three chat functions to include `responseMode`:
  - `submit()`: Main message submission
  - `handleSuggestion()`: Suggestion clicks
  - `handleReload()`: Message reload
- Added `preferences.responseMode` to dependency arrays

### 7. Model Simplification (lib/models/index.ts)
- Removed all AI providers except Mistral AI and Ollama
- Simplified STATIC_MODELS array to focus on:
  - Mistral models (flagship provider)
  - Ollama models (local development fallback)
- Removed imports for: OpenAI, Claude, Deepseek, Gemini, Grok, Perplexity, OpenRouter

### 8. Chat Container Simplification (app/components/chat/chat-container.tsx)
- Removed multi-model logic
- Simplified to always render single `<Chat />` component
- Removed dependency on deprecated `multiModelEnabled` preference

## Testing Results

✅ **Build Test**: Successfully compiled with no TypeScript errors
✅ **Runtime Test**: Application runs without errors on development server
✅ **API Integration**: Response mode parameter correctly passed to chat API
✅ **GitHub Push**: All changes committed and pushed to repository

## Files Modified

1. `lib/config.ts` - Added system prompts
2. `lib/user-preference-store/utils.ts` - Added responseMode type
3. `lib/user-preference-store/provider.tsx` - Added setResponseMode function
4. `app/components/layout/settings/response-mode/response-mode-settings.tsx` - New file
5. `app/components/layout/settings/settings-content.tsx` - Updated tabs
6. `app/api/chat/route.ts` - Added mode switching logic
7. `app/components/chat/use-chat-core.ts` - Integrated responseMode
8. `lib/models/index.ts` - Simplified to Mistral-only
9. `app/components/chat/chat-container.tsx` - Simplified container

## How to Use

1. **Access Settings**: Click settings icon in the UI
2. **Navigate to Response Mode**: Select "Response Mode" tab
3. **Choose Mode**: Click either:
   - **Clinical Mode**: For bedside decision support
   - **Academic Mode**: For in-depth learning and teaching
4. **Start Chatting**: All subsequent messages will use the selected mode's system prompt

## Technical Architecture

```
User Interface (Settings)
    ↓
User Preferences Store (responseMode: "clinical" | "academic")
    ↓
Chat Core Hook (use-chat-core.ts)
    ↓
Chat API (/api/chat/route.ts)
    ↓
System Prompt Selection (SYSTEM_PROMPT_CLINICAL | SYSTEM_PROMPT_ACADEMIC)
    ↓
Mistral AI Model
```

## Next Steps (Optional Enhancements)

1. **Mode Indicator**: Add visual indicator in chat header showing current mode
2. **Quick Switch**: Add keyboard shortcut to toggle between modes
3. **Mode History**: Track which mode was used for each message
4. **Mixed Mode**: Allow mode switching mid-conversation with mode tags
5. **Custom Prompts**: Let users customize system prompts for each mode

## Deployment

All changes have been pushed to GitHub repository:
- **Repository**: https://github.com/d64483912-cmd/friendly-spoon.git
- **Branch**: main
- **Latest Commit**: Implement Academic/Clinical mode switching for NelsonGPT

Ready for deployment to Vercel with environment variables:
- `MISTRAL_API_KEY`: Required
- `NEXT_PUBLIC_SUPABASE_URL`: Required for auth
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Required for auth
- `ENCRYPTION_KEY`: Optional (for user API key storage)
