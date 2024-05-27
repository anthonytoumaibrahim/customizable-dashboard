<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>
<h1 align="center">Customizable Dashboard</h1>

## About This Project

Customizable Dashboard is a Laravel project that allows you to add, position, and delete Widgets in your Dashboard.

## Project Structure

## How to Run

### Prerequisites

-   Node.js and NPM: Ensure you have Node.js and NPM installed. You can download and install them from [nodejs.org](https://www.nodejs.org).
-   Composer: Composer is required for managing PHP dependencies. You can download and install it from [getcomposer.org](https://getcomposer.org).
-   PHP: Make sure you have PHP version 8.2 or higher installed, since Customizable Dashboard uses Laravel 11. You can download the latest version from [php.net](https://php.net).

### Installation

1. Clone the repo:
    ```sh
    git clone https://github.com/anthonytoumaibrahim/customizable-dashboard.git
    ```
2. Navigate to the project repository:
    ```sh
    cd customizable-dashboard
    ```

### Setup

1. Install Node dependencies:

    ```sh
    npm install
    ```

2. Install Composer dependencies:
    ```sh
    composer install
    ```
3. Copy the example environment variables file `.env.example` and rename it as `.env`, either manually or through this command:
    ```sh
    cp .env.example .env
    ```
4. Fill out the information in `.env` with your configuration details, including the database connection settings. You may use SQLite with this project if you desire.

5. Run the migrations:
    ```sh
    php artisan migrate
    ```
6. To start the application, you need to run both of these commands (open each one in a separate terminal):
    ```sh
    php artisan serve
    npm run dev
    ```
