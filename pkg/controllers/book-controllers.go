package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/irtza33/go-bookstore/tree/pure_sql/pkg/models"
	"github.com/irtza33/go-bookstore/tree/pure_sql/pkg/utils"
)

func CreateBook(w http.ResponseWriter, r *http.Request) {
	CreateBook := &models.Book{}
	utils.ParseBody(r, CreateBook)
	b := CreateBook.CreateBook()
	res, _ := json.Marshal(b)
	w.WriteHeader(http.StatusOK)
	w.Write((res))
}
