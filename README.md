# Base — Modern SaaS Admin Dashboard

A pixel-faithful, responsive React + Vite implementation of the **Base SaaS Admin Dashboard** designed in Figma.

![Dashboard Preview](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop)

---

## 🚀 Key Features & Implemented Modules

### 1. Dashboard Overview
- **Metric Cards**: 
  - Save Products (`178+`), Stock Products (`20+`), Sales Products (`190+`), Job Application (`12+`).
- **Reports Spline Chart**:
  - Monotone spline curve with cyan-to-purple-to-pink gradient.
  - Active hover point with dark tooltip badge (`Sales: 2,678` at `03am`) and vertical guide line.
- **Analytics Donut Ring Chart**:
  - Multi-segment ring (Sale 55%, Distribute 25%, Return 20%) with bold center callout (`80% Transactions`).
- **Recent Orders Table**:
  - Product thumbnails, price, cyan order count pills (`325`, `53`, `78`, `98`), and Indian-formatted totals (`$1,46,660`, `$3,46,676`).
- **Top Selling Products**:
  - NIKE Shoes Black Pattern (`$87`, ★★★★★) and iPhone 12 (`$987`, ★★★★☆) in soft blue boxes.
- **Header Filters**:
  - Date selector dropdown pills: `10-06-2021 ▾` and `10-10-2021 ▾`.

### 2. Schedule List & Planner
- **Sub-panel Navigation**:
  - `+ Create Schedule` primary action.
  - Interactive Mini Calendar (`December 2, 2021` with day 3 active selection).
  - `People` directory search and quick contact list (Eddie Lobanovskiy, Alexey Stave, Anton Tkachev).
  - `My Schedule` personal filter.
- **Schedule Table**:
  - Date with blue briefcase icon, time with clock, location pill badges (`Office Meeting`, `Home`, `Friends Zone`, `Meeting Outside`).
  - Action buttons: Yellow edit button and red trash button.

### 3. Invoice Management
- **Search & Add**:
  - Real-time search filter and `+ Add New` modal launcher.
- **Interactive Table**:
  - Master and individual row checkboxes with purple active state.
  - Avatars with client names.
  - Verified green check badges with email addresses.
  - Calendar dates with blue calendar icons.
  - Status pill badges (`Complete`, `Pending`, `Cancel`).
  - Favorite star toggles.
  - Row action dropdown with **Edit (Blue Pencil)** and **Delete (Red Trash)**.

### 4. Interactive Sidebar
- **Dual Display Modes**:
  - Expanded (256px) with brand name, labels, and promo card.
  - Collapsed (76px) with centered Base emblem, centered icon navigation, and stacked avatar/logout.
- **Upgrade Promo Card**:
  - 3D blue hanging lamp illustration with light beam and `Upgrade Now` button.
- **User Footer**:
  - Easin Arafat (`Free Account`) with quick logout action.

### 5. Additional Modules
- **Analytics**: Comprehensive fiscal comparison (Revenue vs Operating Cost) and channel breakdown.
- **Calendar**: Month, Week, and Day planner with category tags and event scheduler.
- **Messages / Chat**: Real-time mock conversation stream with send input and unread counters.
- **Settings & Profile**: Profile editing, credentials, billing tier, and preferences.
- **Authentication**: Sign In & Sign Up screens with illustrations and form validation.

---

## 🛠️ Technology Stack

- **React 18** (Functional components, custom hooks, React Router DOM 6)
- **Vite 6** (Fast HMR and Rollup bundle optimization)
- **Tailwind CSS 3** (Custom design tokens and responsive utility styling)
- **Lucide React** (Vector icon library matching the Figma reference)
- **Recharts** (Interactive SVG spline curves, gradients, and donut rings)

---

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "Saas Dashboard"
   ```

2. **Install dependencies**:
   ```bash
   npm install --ignore-scripts
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npx vite build
   ```
   The optimized production bundles will be compiled to the `/dist` directory.

---

## 📱 Responsive Testing Viewports

- **Desktop**: 1440px / 1280px (Preserved sidebar and multi-column grid)
- **Tablet**: 1024px / 768px (Auto-adapting charts and tables)
- **Mobile**: 430px / 390px / 360px (Slide-out drawer navigation and scrollable tables)

---

## 📄 License

MIT License. Designed with reference to Base SaaS Admin Dashboard UI Kit.
