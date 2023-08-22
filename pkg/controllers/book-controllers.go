package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/irtza33/go-bookstore/tree/pure_sql/pkg/models"
	"github.com/irtza33/go-bookstore/tree/pure_sql/pkg/utils"
)

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func CreateBook(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	CreateBook := &models.Book{}
	utils.ParseBody(r, CreateBook)
	b := CreateBook.CreateBook()
	res, _ := json.Marshal(b)
	w.WriteHeader(http.StatusOK)
	w.Write((res))
}

func GetBook(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)
	newBooks := models.GetAllBooks()
	res, _ := json.Marshal(newBooks)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader((http.StatusOK))
	w.Write((res))
}

func GetBookById(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	vars := mux.Vars(r)
	bookId := vars["bookId"]
	Id, err := strconv.ParseInt(bookId, 10, 0)
	if err != nil {
		panic(err)
	}
	fetchedBook := models.GetBookById(Id)
	res, _ := json.Marshal(fetchedBook)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}

func DeleteBook(w http.ResponseWriter, r *http.Request) {
	enableCors(&w)

	vars := mux.Vars(r)
	bookId := vars["bookId"]
	Id, err := strconv.ParseInt(bookId, 10, 0)
	if err != nil {
		panic(err)
	}
	fmt.Println(Id)
	if models.DeleteBook(Id) {
		res, _ := json.Marshal("Book has been deleted")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(res)
	} else {
		res, _ := json.Marshal("Book could not be deleted")
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadGateway)
		w.Write(res)
	}
}
