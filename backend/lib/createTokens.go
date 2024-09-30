package lib

import (
	"github.com/golang-jwt/jwt"
	"github.com/yanedyrak/blog-dev/models"
)

func CreateTokens(userID uint) (models.Tokens, error) {
	tokens := models.Tokens{}

	accessTokenClaims := jwt.MapClaims{
		"userID": userID,
	}
	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, accessTokenClaims)
	tokens.AccessToken, _ = accessToken.SignedString([]byte("accessTokenSecret"))

	refreshTokenClaims := jwt.MapClaims{
		"userID": userID,
	}
	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshTokenClaims)
	tokens.RefreshToken, _ = refreshToken.SignedString([]byte("refreshTokenSecret"))

	return tokens, nil
}
