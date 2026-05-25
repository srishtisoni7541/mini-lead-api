# NOTES

## What I Prioritized

I focused on building a clean and maintainable React frontend with:

* Proper folder structure (components, hooks separated)
* Reusable and minimal components
* Consistent loading, error, and empty states
* Debounced search for performance
* Persisted liked posts using localStorage

## Tradeoffs / What I Skipped

Due to the time limit, I skipped:

* Authentication
* Automated tests (unit/integration)
* Pagination (all 100 posts load at once)
* Accessibility improvements (ARIA labels, keyboard nav)

I also kept the architecture intentionally simple to avoid over-engineering for a small take-home task.

## What I Would Improve With More Time

* Add pagination or infinite scroll
* Add unit/integration tests with Vitest + Testing Library
* Add sorting options (by title, by liked)
* Add skeleton shimmer with better timing stagger
* Improve mobile responsiveness further
* Add toast notifications for like/unlike actions

## AI Usage

I used **Claude Sonnet 4.6** (free tier, claude.ai) for:

* Designing and styling the UI (light theme, Tailwind class decisions, layout, spacing)
* Implementing the `useDebounce` custom hook
* Looking up occasional syntax (event handlers, conditional classNames)

All component logic, state management, API integration, and debugging were completed manually.
