package middleware

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/blog-dev/lib"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		_, err := c.Cookie("access_token")
		if err != nil {
			refreshToken, err := c.Cookie("refresh_token")
			if err != nil {
				handleUnauthorized(c, " tokens not found")
				return
			}
			claims, err := lib.ParseToken(refreshToken)
			if err != nil {
				handleUnauthorized(c, "Invalid refresh token")
				return
			}
			newTokens, err := lib.CreateTokens(uint(claims["user_id"].(float64))) // uint(claims["user_id"])
			if err != nil {
				c.JSON(http.StatusOK, gin.H{"message": "Failed to generate new access token"})
				c.Abort()
				return
			}
			c.SetCookie("access_token", newTokens.AccessToken, 900, "/", "localhost", false, true)
			c.SetCookie("refresh_token", newTokens.RefreshToken, 18000, "/", "localhost", false, true)
			c.JSON(http.StatusOK, gin.H{"message": "Access token refreshed"})
		}

		c.Next()
	}
}

func handleUnauthorized(c *gin.Context, message string) {
	c.JSON(http.StatusUnauthorized, gin.H{"error": message})
	c.Abort()
}
