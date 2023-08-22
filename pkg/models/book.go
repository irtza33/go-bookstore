package models

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
	"github.com/irtza33/go-bookstore/tree/pure_sql/pkg/config"
)

type Book struct {
	Name        string
	Author      string
	Publication string
}

var DB *sql.DB

func init() {
	config.Connect()
	DB = config.GetDB()
}

func (b *Book) CreateBook() *Book {

	if _, err := DB.Exec(`INSERT INTO books(Name, Author, Publication) VALUES (?,?,?)`, b.Name, b.Author, b.Publication); err != nil {
		panic(err)
	}
	return b
}
