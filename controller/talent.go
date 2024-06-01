package controller

import (
	"encoding/json"
	"io"
	"myapp/model"
	"myapp/utils/httpresp"
	passwordhash "myapp/utils/passwordHash"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func Apply(w http.ResponseWriter, r *http.Request) {
	var talent model.Talent
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&talent); err != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, "invalid json body")
		return
	}
	defer r.Body.Close()

	hashedPassword, err := passwordhash.HashPassword(talent.Password)
	if err != nil {
		httpresp.RespondWithError(w, http.StatusInternalServerError, "there was a problem with password hashing")
		return
	}
	talent.Password = hashedPassword

	saveErr := talent.Create()
	if saveErr != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, saveErr.Error())
		return
	}
	httpresp.RespondWithJson(w, http.StatusCreated, map[string]string{"status": "Talent added successfully"})
}

func CreateProfile(w http.ResponseWriter, r *http.Request) {
	var talentProfile model.TalentProfile
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&talentProfile); err != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, "invalid json body")
		return
	}
	defer r.Body.Close()

	saveErr := talentProfile.Insert()
	if saveErr != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, saveErr.Error())
		return
	}
	httpresp.RespondWithJson(w, http.StatusCreated, map[string]string{"status": "Talent Profile successfully created"})
}

func AddTalentPic(w http.ResponseWriter, r *http.Request) {
	var tp model.TalentPicure
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, "error parsing form")
		return
	}
	file, _, err := r.FormFile("talentpic")
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

	tid, _ := strconv.Atoi(r.FormValue("tid"))
	tp.TalentId = tid
	tp.TalentPic = profilePictureBytes

	saveErr := tp.Add()
	if saveErr != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, saveErr.Error())
		return
	}

	httpresp.RespondWithJson(w, http.StatusCreated, map[string]string{"status": "Profile added"})
}

func GetTalent(w http.ResponseWriter, r *http.Request) {
	tid := mux.Vars(r)["tid"]
	talentId, _ := strconv.Atoi(tid)

	t := model.TalentAll{TalentId: talentId}
	getErr := t.Read()
	if getErr != nil {
		httpresp.RespondWithError(w, http.StatusBadRequest, getErr.Error())
		return
	}
	httpresp.RespondWithJson(w, http.StatusOK, t)
}
