package model

import "myapp/datastore/postgres"

type Client struct {
	FullName     string `json:"fullname"`
	Email        string `json:"email"`
	PhoneNumber  int    `json:"pnumber"`
	Dzongkhag    string `json:"dzongkhag"`
	Region       string `json:"region"`
	Organization string `json:"organization"`
	Password     string `json:"password"`
}

type ClientPicture struct {
	ClientId  int    `json:"cid"`
	ClientPic []byte `json:"clientpic"`
}

const queryInsertClient = "INSERT INTO client (full_name, email, phone_number, dzongkhag, region, organization_name, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING email;"

func (c *Client) Create() error {
	row := postgres.Db.QueryRow(queryInsertClient, c.FullName, c.Email, c.PhoneNumber, c.Dzongkhag, c.Region, c.Organization, c.Password)
	err := row.Scan(&c.Email)
	return err
}

const queryInsertClientPic = "INSERT INTO client_profile(client_id, profile) VALUES($1, $2) RETURNING profile;"

func (p *ClientPicture) Add() error {
	row := postgres.Db.QueryRow(queryInsertClientPic, p.ClientId, p.ClientPic)
	err := row.Scan(&p.ClientPic)
	return err
}
