package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/blog-dev/database"
	"github.com/yanedyrak/blog-dev/lib"

	"github.com/yanedyrak/blog-dev/models"

	"golang.org/x/crypto/bcrypt"
)

func Login(c *gin.Context) {
	email := c.PostForm("email")
	userPassword := c.PostForm("password")
	var user models.User
	database.DB.Where("email = ?", email).First(&user)
	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "User does not exist"})
		return
	}
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(userPassword))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Wrong password"})
		return
	}

	td, err := lib.CreateTokens(user.ID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	c.SetCookie("access_token", td.AccessToken, 900, "/", "localhost", false, false)
	c.SetCookie("refresh_token", td.RefreshToken, 18000, "/", "localhost", false, true)

	c.JSON(http.StatusOK, gin.H{"message": "Login successful"})
}
