# README - Airbnb Website Clone

####[Online project](https://rent-ease-ecru.vercel.app)

This project is a clone of the Airbnb website, built using the following technologies: Next.js, React, TypeScript, Supabase, Tailwind CSS, and PostgreSQL.

## Features

1. **Authentication via Google or Facebook**:
   Users can authenticate using their Google or Facebook accounts to access the site's features.

2. **Adding a property to favorites**:
   Users can add properties to their favorites list for easy access later on.

3. **Creating a property listing**:
   Users have the option to create a property listing by providing details such as description, amenities, photos, etc.

4. **Property reservation**:
   Users can book available properties for desired dates.

## Technologies Used

- **Next.js**: React framework for server-side rendering.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: JavaScript-based programming language with static typing.
- **Supabase**: Open-source platform for backend application development.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs.
- **PostgreSQL**: Open-source relational database management system.

## Installation

1. Clone the repository from GitHub:

   ```
   git clone https://github.com/daocam/airbnb-clone.git
   ```

2. Install dependencies:

   ```
   cd clone-airbnb
   npm install
   ```

3. Configure environment variables:

   Create a `.env.local` file at the root of the project and add the following environment variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=Your_Supabase_Database_URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY=Your_Supabase_Anonymous_Access_Key
   GOOGLE_CLIENT_ID=Your_Google_Client_ID
   FACEBOOK_APP_ID=Your_Facebook_App_ID
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Access the project in your browser:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.
