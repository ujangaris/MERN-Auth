# Login Page using MERN Stack | Full-Stack Login System with MongoDB, ExpressJS, ReactJS and Node JS

## install react vite

    Todo:
    1.  npm init vite
        - /client
        - cd client
        - npm install
        - npm run dev

## install tools & setup form login

    Todo:
    1.  install bootstrap & axios
        - npm install bootstrap axios
    2.  App.jsx
        - import bootstrap
        - buat form login dengan bootstrap
    3.  kosongkan file App.css & index.css
    4.  pengujian pada browser
        - npm run dev
        - http://localhost:5173/

## server setup

    Todo:
    1.  buat file server diluar client
        - cd client
        - /client : npm init -y
        - npm install express mongoose cors nodemon
    2.  setup server
        - /server/index.js
    3.  pengujian server
        - npm start

## Conection server to client

    Todo:
    1.  buat database pada mongo compas
        - nama database nya: users
        - add satu data :
            - email: 'test@gmail.com'
            - password: '12345'
    2.  connect to database
        - /server/index.js
    3.  install react router dom
        - npm install react-router-dom
    4.  components/Login.jsx
        - Deklarasi hooks for email & passsword
        - import dan pasang handleSumbmit form
    5.  Main.jsx
        - import dan pasang BrowserRouter dari react router dom
    6.  App.jsx
        - import dan pasang Routes & Route dari react router dom
        - import dan pasang Login
    7.  pengujian pada browser
        - client npm run dev
        - server npm start
        - http://localhost:7153
        - coba lakukan login dengan user terdaftar, lihat pada terminal akan ada data user yang berhasil login
        - coba salahkan saat login, akan ada response pada console.log
