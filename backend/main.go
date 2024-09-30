package main

import (
	"github.com/gin-gonic/gin"
	"github.com/yanedyrak/blog-dev/database"
	"github.com/yanedyrak/blog-dev/routes"
)

func main() {
	database.InitDB()
	router := gin.Default()
	routes.InjectRoutes(router)
	router.Run(":8082")
}
