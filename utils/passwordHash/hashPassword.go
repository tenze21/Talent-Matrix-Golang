package passwordhash

import "golang.org/x/crypto/bcrypt"


func HashPassword(password string) (string, error) {
	// Generate a bcrypt hash of the password
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	// Convert the byte slice to a string and return it
	return string(hash), nil
}