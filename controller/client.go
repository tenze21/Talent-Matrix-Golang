package controller

import (
	"encoding/json"
	"io"
	"myapp/model"
	"myapp/utils/httpresp"
	passwordhash "myapp/utils/passwordHash"
	"net/http"
	"strconv"
)

func Register(w http.ResponseWriter, r *http.Request) {
	var client model.Client
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&client); err != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, "invalid json body")
		return
	}
	defer r.Body.Close()

	hashedPassword, err := passwordhash.HashPassword(client.Password)
	if err != nil {
		httpresp.RespondWithError(w, http.StatusInternalServerError, "there was a problem with password hashing")
		return
	}
	client.Password = hashedPassword

	saveErr := client.Create()
	if saveErr != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, saveErr.Error())
		return
	}
	httpresp.RespondWithJson(w, http.StatusCreated, map[string]string{"status": "Client added successfully"})
}

func AddClientPic(w http.ResponseWriter, r *http.Request) {
	var cp model.ClientPicture
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, "error parsing form")
		return
	}
	file, _, err := r.FormFile("clientpic")
	if err != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, "error retrieving image")
		return
	}
	defer file.Close()
	profilePictureBytes, err := io.ReadAll(file)
	if err != nil {
		httpresp.RespondWithError(w, http.StatusInternalServerError, "error reading image data")
		return
	}

	cid, _ := strconv.Atoi(r.FormValue("cid"))
	cp.ClientId = cid
	cp.ClientPic = profilePictureBytes

	saveErr := cp.Add()
	if saveErr != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, saveErr.Error())
		return
	}

	httpresp.RespondWithJson(w, http.StatusCreated, map[string]string{"status": "Profile added"})
}
