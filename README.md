# STAGIFY Landing Page

    This project contains the standalone landing page for STAGIFY, built with plain HTML, CSS, and JavaScript, and served using Vite. It also includes Docker configurations for production deployment.

    ## Project Structure

    - `index.html`: The main HTML file defining the landing page structure with sections: Hero, Problème, Comment ça marche (Étudiant / Entreprise), Impact, Vision, and Call to Action.
    - `style.css`: Contains all the CSS for styling the landing page, including responsive design and brand colors.
    - `main.js`: JavaScript for smooth scrolling, tab functionality in "Comment ça marche" section, and optional scroll-reveal animations.
    - `package.json`: Defines project dependencies and scripts for Vite.
    - `Dockerfile`: Multi-stage Dockerfile for building and serving the frontend with Nginx.
    - `nginx.conf`: Nginx configuration file for serving static assets.
    - `docker-compose.yml`: Docker Compose file to define and run the frontend service.
    - `.dockerignore`: Specifies files and directories to be ignored by Docker.

    ## Development

    To run the landing page locally using Vite:

    1.  **Install dependencies:**
        ```bash
        npm install
        ```
    2.  **Start the development server:**
        ```bash
        npm run dev
        ```
        Vite will provide a local URL (e.g., `http://localhost:5173`) to view the landing page.

    ## Docker Deployment

    To build and run the landing page using Docker:

    1.  **Build the Docker image:**
        ```bash
        docker-compose build
        ```
    2.  **Run the Docker container:**
        ```bash
        docker-compose up -d
        ```
        The landing page will be accessible at `http://localhost` (or the port you configured).

    3.  **Stop the Docker container:**
        ```bash
        docker-compose down
        ```

    ## Docker Best Practices Implemented

    -   **Multi-stage build**: Optimizes image size by separating build and runtime environments.
    -   **`.dockerignore`**: Excludes unnecessary files from the Docker build context.
    -   **Caching**: `package.json` and `package-lock.json` are copied and dependencies installed first to leverage Docker layer caching.
    -   **Nginx**: Used as a lightweight and efficient web server for static files.
    -   **Health checks**: Configured in `docker-compose.yml` to ensure the service is running correctly.
    -   **Restart policy**: `unless-stopped` ensures the container restarts automatically if it crashes or the Docker daemon restarts.