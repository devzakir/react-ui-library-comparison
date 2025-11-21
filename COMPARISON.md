# Job Form UI Library Comparison

This project compares three popular React UI libraries by implementing the same job update form with each one.

## UI Libraries Compared

### 1. **Park UI (Ark UI)**
- **Route:** `/job/park-ui`
- **Description:** Headless UI components with inline styles
- **Pros:**
  - Full control over styling
  - Lightweight
  - No CSS dependencies
- **Cons:**
  - More manual styling work
  - Limited pre-built components

### 2. **Mantine**
- **Route:** `/job/mantine`
- **Description:** Feature-rich React components library
- **Pros:**
  - Extensive component library
  - Built-in form validation
  - Rich text editor integration
  - Excellent TypeScript support
  - Great documentation
- **Cons:**
  - Larger bundle size
  - Opinionated styling

### 3. **Chakra UI**
- **Route:** `/job/chakra-ui`
- **Description:** Simple, modular and accessible component library
- **Pros:**
  - Great accessibility
  - Theme customization
  - Composable components
  - Good documentation
- **Cons:**
  - Some components require emotion
  - Migration between major versions can be complex

## Form Features Implemented

All three implementations include:

- ✅ Multi-step form with progress indicator
- ✅ Text inputs (Job Title)
- ✅ Select dropdowns (Workspace Type, Job Type, Salary Type, Currency)
- ✅ Number inputs with range support (Salary)
- ✅ Toggle switch (Salary Range)
- ✅ Multi-select/Tags input (Skills)
- ✅ Rich text editor / Textarea (Description)
- ✅ Radio buttons (Expires In)
- ✅ Date picker (Deadline)
- ✅ Responsive design
- ✅ Form validation

## Tech Stack

- **Backend:** Laravel 12
- **Frontend:** React 18
- **Build Tool:** Vite
- **Routing:** Inertia.js
- **Styling:** CSS-in-JS (varies by library)

## Installation & Setup

### 1. Install Dependencies

```bash
# Install PHP dependencies
composer install

# Install Node dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy .env file (already done)
cp .env.example .env

# Generate app key (already done)
php artisan key:generate

# Run migrations (already done)
php artisan migrate
```

### 3. Run Development Server

```bash
# Start the Laravel development server
php artisan serve

# In another terminal, start Vite
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

## Routes

- **Home:** `/` - Navigation page with links to all three versions
- **Park UI:** `/job/park-ui`
- **Mantine:** `/job/mantine`
- **Chakra UI:** `/job/chakra-ui`

## Project Structure

```
resources/js/Pages/Job/
├── Index.jsx      # Navigation/comparison page
├── ParkUI.jsx     # Park UI implementation
├── Mantine.jsx    # Mantine implementation
└── ChakraUI.jsx   # Chakra UI implementation
```

## Comparison Summary

| Feature | Park UI | Mantine | Chakra UI |
|---------|---------|---------|-----------|
| Bundle Size | Small | Large | Medium |
| Component Variety | Limited | Extensive | Good |
| Customization | High | Medium | High |
| Documentation | Good | Excellent | Good |
| Learning Curve | Medium | Low | Low |
| TypeScript Support | Good | Excellent | Good |
| Accessibility | Good | Good | Excellent |
| Form Handling | Manual | Built-in | Manual |
| Date Picker | Manual | Built-in | Add-on |
| Rich Text Editor | Manual | Built-in | Add-on |

## Recommendations

### Choose **Park UI (Ark UI)** if:
- You want full styling control
- You prefer headless components
- Bundle size is critical
- You're comfortable with manual styling

### Choose **Mantine** if:
- You need a comprehensive component library
- You want built-in form validation and utilities
- You prefer opinionated, ready-to-use components
- You're building a feature-rich application quickly

### Choose **Chakra UI** if:
- Accessibility is a top priority
- You want a good balance of customization and pre-built components
- You prefer composition-based architecture
- You need excellent theme support

## License

This is a demonstration project for educational purposes.
