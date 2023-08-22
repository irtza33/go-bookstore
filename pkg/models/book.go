package models

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
	"github.com/irtza33/go-bookstore/tree/pure_sql/pkg/config"
)

type Book struct {
	Id          int
	Name        string
	Author      string
	Publication string
}

var DB *sql.DB

func init() {
	config.Connect()
	DB = config.GetDB()
	if _, err := DB.Exec(`CREATE TABLE IF NOT EXISTS books(Id INT NOT NULL AUTO_INCREMENT, Name VARCHAR(25), Author VARCHAR(25), Publication VARCHAR(25), PRIMARY KEY (Id));`); err != nil {
		panic(err)
	}
}

func (b *Book) CreateBook() *Book {

	if _, err := DB.Exec(`INSERT INTO books(Name, Author, Publication) VALUES (?,?,?)`, b.Name, b.Author, b.Publication); err != nil {
		panic(err)
	}
	return b
}

func GetAllBooks() []Book {
	var Books []Book
	var TempBook Book
	rows, err := DB.Query(`SELECT * FROM books`)
	if err != nil {
		panic(err.Error())
	}
	defer rows.Close()
	for rows.Next() {
		rows.Scan(&TempBook.Id, &TempBook.Name, &TempBook.Author, &TempBook.Publication)
		Books = append(Books, TempBook)
	}
	return Books
}

func GetBookById(Id int64) *Book {
	var fetchedBook Book
	rows, err := DB.Query(`SELECT * FROM books WHERE Id = ?;`, Id)
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	for rows.Next() {
		if err := rows.Scan(&fetchedBook.Id, &fetchedBook.Name, &fetchedBook.Author, &fetchedBook.Publication); err != nil {
			panic(err.Error())
		}

	}
	return &fetchedBook
}

func DeleteBook(Id int64) bool {
	_, err := DB.Exec(`DELETE FROM books WHERE Id = ?`, Id)
	if err != nil {
		panic(err)
	}
	return true
}
