package config

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

const (
	username = "root"
	password = "tiger@123"
	hostname = "localhost:3306"
	dbName   = "booksdb"
)

var DB *sql.DB

func dsn() string {
	return fmt.Sprintf("%s:%s@tcp(%s)/%s", username, password, hostname, dbName)
}

func Connect() {
	db, err := sql.Open("mysql", dsn())
	if err != nil {
		panic(err.Error())
	}
	DB = db
	fmt.Println("DB Connected!!")
}

func GetDB() *sql.DB {
	return DB
}
