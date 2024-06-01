package routes

import (
	"log"
	"myapp/controller"
	"net/http"

	"github.com/gorilla/mux"
)

func InitializeRoutes() {
	var port = 8080
	router := mux.NewRouter()

	// Talent Routes----------------------------------------------------------------
	router.HandleFunc("/talent", controller.Apply).Methods("POST")
	router.HandleFunc("/talentprofile", controller.CreateProfile).Methods("POST")
	router.HandleFunc("/addtalentpic", controller.AddTalentPic).Methods("POST")
	router.HandleFunc("/talent/{tid}", controller.GetTalent).Methods("GET")

	// Client Routes----------------------------------------------------------------
	router.HandleFunc("/client", controller.Register).Methods("POST")
	router.HandleFunc("/addclientpic", controller.AddClientPic).Methods("POST")

	fhadler := http.FileServer(http.Dir("./view"))
	router.PathPrefix("/").Handler(fhadler)

	log.Println("Application running on port", port)
	log.Fatal(http.ListenAndServe(":8080", router))
}
