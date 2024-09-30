package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/blog-dev/lib"
)

func Protected(c *gin.Context) {
	cookie, err := c.Cookie("access_token")
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "cookie is not found"})
		return
	}
	token, err := lib.ParseToken(cookie)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid token"})
		return
	}
	c.JSON(http.StatusUnauthorized, gin.H{"message": token["userID"]})
}
