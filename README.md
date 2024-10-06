# E-commerce Clone using FakeStore API

This project is a simple e-commerce website clone built using React and the [FakeStore API](https://fakestoreapi.com/). The app fetches product data from the API and displays it in card format.
This project is deployed on Netlify. You can access the live version of the app [here](https://appscrip-task-suman-kr-ghorai.netlify.app/).

## Features

- **Product Listing:** The app fetches products from FakeStore API and renders them in a list.
- **Reusable Card Component:** Each product is displayed in a custom card layout for a clean and responsive design.
- **Asynchronous API Requests:** The app uses `fetch` for making API requests and handles errors gracefully.
- **React Hooks:** `useState` and `useEffect` are used for state management and data fetching.

## Technologies

- React
- JavaScript (ES6+)
- FakeStore API
- CSS
- Netlify (for deployment)

## Project Structure



## How to Run the Project Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/suman-kr-ghorai/Appscrip-task-Suman-Kumar-Ghorai.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Appscrip-task-Suman-Kumar-Ghorai
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Run the app:

    ```bash
    npm run dev
    ```

5. Visit the app at `http://localhost:5173` in your browser.

## Deployment

To deploy on Netlify:

1. Push your project to a GitHub repository.
2. Log in to [Netlify](https://www.netlify.com/) and select "New Site from Git".
3. Choose your GitHub repository and configure the build settings:
    - Build Command: `npm run build`
    - Publish Directory: `build/`
4. Click "Deploy" and your app will be live in a few minutes.



