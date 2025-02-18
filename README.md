Food Menu Webpage

This is a Vue.js-based food menu application. The application fetches food items from TheMealDB API and provides filtering, sorting, pagination, and a Swiggy-like UI.

Features

✅ Header

Displays a logo and a non-functional search bar.

✅ Filters Section

Filter By Area: Populates a list of areas from TheMealDB API.

Sorting: Allows users to sort food items alphabetically (A-Z & Z-A).

Dropdown for Filters: Clicking on the 'Filter' button displays a dropdown.

✅ Food Items Section

Displays Indian food items by default.

Shows food item cards with image, name, and random ratings.

Clicking a food item opens a modal with additional details.

Implements pagination for better navigation.

✅ Footer

A simple footer mimicking Swiggy's design.

 Setup Instructions

1️⃣ Clone the Repository

git clone <your-repo-url>
cd <project-folder>

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm run dev

Default: Runs on http://localhost:3000/

4️⃣ Run Cypress Tests

Option 1: Open Cypress UI

npx cypress open

Option 2: Run Tests in Headless Mode

npm run dev:test