package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/irtza33/go-bookstore/tree/pure_sql/pkg/routes"
	"github.com/rs/cors"
)

func main() {
	r := mux.NewRouter()
	cors := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{
			http.MethodPost,
			http.MethodGet,
			http.MethodDelete,
		},
		AllowedHeaders:   []string{"*"},
		AllowCredentials: false,
	})
	routes.RegisterBookStoreRoutes(r)
	http.Handle("/", r)
	handler := cors.Handler(r)
	log.Fatal((http.ListenAndServe("localhost:9010", handler)))
}
