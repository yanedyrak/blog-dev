package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/blog-dev/database"
	"github.com/yanedyrak/blog-dev/models"

	"golang.org/x/crypto/bcrypt"
)

func Register(c *gin.Context) {
	userName := c.PostForm("username")
	email := c.PostForm("email")
	userPassword := c.PostForm("password")
	var user models.User
	database.DB.Where("email = ?", email).First(&user)
	if user.ID != 0 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "User already exists"})
		return
	}
	password, err := bcrypt.GenerateFromPassword([]byte(userPassword), bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}
	database.DB.Create(&models.User{
		Username: userName,
		Email:    email,
		Password: string(password),
	})
	c.JSON(http.StatusOK, gin.H{"message": "User created"})
}
