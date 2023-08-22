# go-bookstore

This application leverages Go to handle API calls while React is used on the frontend. Only one button is functional as of now which displays all the books in the database table called books. The backend API calls work fine and have been tested through postman. The API calls include adding a new book, selecting a specific book, viewing all books and deleting a specific book.

You must have mysql, go and react configured on your system.

For MacOS with homebrew package installer, simply run "brew install mysql" to configure mysql, run "brew install go" to configure go and finally run "brew install node" to configure npm on your system.

In pkg -> config -> app.go, enter your username, password, hostname and DB name in the given variables.
Start mysql server on your system

In the application directory, open the terminal 
1) cd cmd/main
2) go run main.go

If your terminal states "DB Connected!" then your backend server is running as exptected.

Head over to your frontend directory in the react-app folder. Run "npm install" in the terminal to configure required dependencies. 
Finally, run "npm start" which will start your react app.