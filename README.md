# Author
Matan Toledano

If you have any questions or encounter any issues with this project, feel free to contact me at matantoled@gmail.com. I'll be more than happy to help!

# Modern E-commerce Movie Website
![image](https://github.com/matantoled/Movie-Shop/assets/75612523/d1f9106b-878f-4ac1-9743-0c989334d3b7)


This project aims to build a modern e-commerce website allowing customers to browse movies, add them to a cart, and complete a purchase. It's developed using the Spring framework for the backend and React for the frontend. The website leverages the TMDB API to browse products.

![image](https://github.com/matantoled/Movie-Shop/assets/75612523/cfca9b06-e763-416b-9254-76b206399bd0)

## Features

### Frontend
- **Search Page**: Allows users to search for movies/shows using a keyword or by discovering movies with genre and release year as attributes.
- **Search History**: Records every search to the TMDB API and allows users to re-perform previous searches in a single click.
- **Shopping Cart**: Users can add movies to a cart and view its contents, including the total cost.
- **Checkout Page**: Users can complete their purchase by providing essential details.

![image](https://github.com/matantoled/Movie-Shop/assets/75612523/4964098e-cec4-40cf-8e56-cc06e9c3522c)


### Backend
- **REST API**: Developed using Spring, facilitates frontend and backend communication.
- **Shopping Cart Management**: Stored in user sessions using Spring session beans.
- **Database Connectivity**: Connects to a SQL Server database to store completed orders.

![image](https://github.com/matantoled/Movie-Shop/assets/75612523/97365b1b-b48d-4b6c-b788-5b4703379690)

## Getting Started

### Prerequisites
Ensure you have Maven, Java, and Node.js installed on your system.

### Initializing the Backend
1. Open the project in IntelliJ. If prompted, select "Load Maven Project". You can later reload Maven using the "M" icon or by right-clicking on `pom.xml` and selecting "Maven -> Reload project".
2. In case of discrepancies in the code, navigate to File -> Project Structure -> Project Settings -> Project -> SDK and select your Java SDK.
3. Edit the configuration "ex4" at the top right. Ensure the "Main class" is set to "hac.DemoApplication".
4. Run the SQL server as instructed in the project guidelines and create a database named "ex4".
5. Execute the project. There shouldn't be any errors in the IntelliJ console.

### Initializing the React Frontend (`movie-app`)
1. Navigate to the `movie-app` directory in your terminal.
2. Run `npm install` followed by `npm start`. The client should be accessible at http://localhost:3000.

## How to Use
1. Start by searching for movies using keywords or attributes.
2. Add desired movies to your shopping cart.
3. View your cart and proceed to the checkout page.
4. Fill in your details and complete the purchase. The transaction details will be saved in the database.

## Acknowledgments
- Special thanks to my partner, Yitzhak Halevi, for his significant contributions to this project.
- Gratitude to Hadassah College for providing the necessary resources and support.
