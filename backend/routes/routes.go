package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/blog-dev/handlers"
	"github.com/yanedyrak/blog-dev/middleware"
)

func InjectRoutes(router *gin.Engine) {
	router.POST("/register", handlers.Register)
	router.POST("/login", handlers.Login)
	router.POST("/logout", handlers.Logout)
	authRoutes := router.Group("/")
	authRoutes.Use(middleware.AuthMiddleware())
	authRoutes.GET("/protected", handlers.Protected)
}
