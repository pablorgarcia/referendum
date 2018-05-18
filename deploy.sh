#!/bin/bash

rm -rf server/public/*
cd client
ng build --prod --aot=false
cd ..
mv client/dist/* server/public

#rama para subir a heroku desde la carpeta principal
#git subtree push --prefix=server heroku master