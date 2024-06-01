package model

import (
	"myapp/datastore/postgres"
)

type Talent struct {
	FullName      string `json:"fullname"`
	Email         string `json:"email"`
	Cid           int    `json:"cid"`
	PhoneNumber   int    `json:"pnumber"`
	Dzongkhag     string `json:"dzongkhag"`
	Region        string `json:"region"`
	Password      string `json:"password"`
	PortfolioLink string `json:"portfolio_link"`
}

type TalentProfile struct {
	TalentId       int    `json:"tid"`
	UserName       string `json:"uname"`
	Bio            string `json:"bio"`
	School         string `json:"school"`
	EducationFrom  string `json:"edufrom"`
	EducationTo    string `json:"eduto"`
	FieldOfStudy   string `json:"studyfield"`
	Expertise      string `json:"expertise"`
	Category       string `json:"category"`
	Experience     string `json:"experience"`
	Company        string `json:"company"`
	Title          string `json:"title"`
	EmploymentFrom string `json:"employmentfrom"`
	EmploymentTo   string `json:"employmentto"`
	Facebook       string `json:"facebook"`
	Twitter        string `json:"twitter"`
	Linkedin       string `json:"linkedin"`
}

type TalentPicure struct {
	TalentId  int    `json:"tid"`
	TalentPic []byte `json:"talentpic"`
}

type TalentAll struct {
	TalentId       int    `json:"tid"`
	TalentPic      []byte `json:"talentpic"`
	FullName       string `json:"fullname"`
	Email          string `json:"email"`
	Cid            int    `json:"cid"`
	PhoneNumber    int    `json:"pnumber"`
	Dzongkhag      string `json:"dzongkhag"`
	Region         string `json:"region"`
	PortfolioLink  string `json:"portfolio_link"`
	UserName       string `json:"uname"`
	Bio            string `json:"bio"`
	School         string `json:"school"`
	EducationFrom  string `json:"edufrom"`
	EducationTo    string `json:"eduto"`
	FieldOfStudy   string `json:"studyfield"`
	Expertise      string `json:"expertise"`
	Category       string `json:"category"`
	Experience     string `json:"experience"`
	Company        string `json:"company"`
	Title          string `json:"title"`
	EmploymentFrom string `json:"employmentfrom"`
	EmploymentTo   string `json:"employmentto"`
	Facebook       string `json:"facebook"`
	Twitter        string `json:"twitter"`
	Linkedin       string `json:"linkedin"`
}

const queryInsertTalent = "INSERT INTO talent1 (full_name, email, cid, phone_number, dzongkhag, region, password, portfolio_link) VALUES($1, $2, $3, $4, $5, $6, $7, $8) Returning email;"

func (t *Talent) Create() error {
	row := postgres.Db.QueryRow(queryInsertTalent, t.FullName, t.Email, t.Cid, t.PhoneNumber, t.Dzongkhag, t.Region, t.Password, t.PortfolioLink)
	err := row.Scan(&t.Email)

	return err
}

const queryCreateTalentProfile = "INSERT INTO talent2 (talent_id, user_name, bio, school, education_from, education_to, field_of_study, expertise, category, experience, company, title, employment_from, employment_to, facebook, twitter, linkedin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) Returning talent_id;"

func (tp *TalentProfile) Insert() error {
	row := postgres.Db.QueryRow(queryCreateTalentProfile, tp.TalentId, tp.UserName, tp.Bio, tp.School, tp.EducationFrom, tp.EducationTo, tp.FieldOfStudy, tp.Expertise, tp.Category, tp.Experience, tp.Company, tp.Title, tp.EmploymentFrom, tp.EmploymentTo, tp.Facebook, tp.Twitter, tp.Linkedin)
	err := row.Scan(&tp.TalentId)
	return err
}

const queryAddTalentPic = "INSERT INTO talent_profile (talent_id, profile) VALUES($1, $2) RETURNING profile;"

func (p *TalentPicure) Add() error {
	row := postgres.Db.QueryRow(queryAddTalentPic, p.TalentId, p.TalentPic)
	err := row.Scan(&p.TalentPic)
	return err
}


const queryGetTalent="SELECT t1.talent_id, t1.full_name, t1.email, t1.cid, t1.phone_number, t1.dzongkhag, t1.region, t1.portfolio_link, t2.user_name, t2.bio, t2.school, t2.education_from, t2.education_to, t2.field_of_study, t2.expertise, t2.category, t2.experience, t2.company, t2.title, t2.employment_from, t2.employment_to, t2.facebook, t2.twitter, t2.linkedin, tp.profile FROM  talent1 t1 INNER JOIN  talent2 t2 ON t1.talent_id = t2.talent_id INNER JOIN  talent_profile tp ON t1.talent_id = tp.talent_id WHERE t1.talent_id=$1;"
func (t *TalentAll) Read() error{
	return postgres.Db.QueryRow(queryGetTalent, t.TalentId).Scan(
		&t.TalentId,
		&t.FullName,
		&t.Email,
		&t.Cid,
		&t.PhoneNumber,
		&t.Dzongkhag,
		&t.Region,
		&t.PortfolioLink,
		&t.UserName,
		&t.Bio,
		&t.School,
		&t.EducationFrom,
		&t.EducationTo,
		&t.FieldOfStudy,
		&t.Expertise,
		&t.Category,
		&t.Experience,
		&t.Company,
		&t.Title,
		&t.EmploymentFrom,
		&t.EmploymentTo,
		&t.Facebook,
		&t.Twitter,
		&t.Linkedin,
		&t.TalentPic,)
}