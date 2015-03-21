cd /tmp

# try to remove the repo if it already exists
rm -rf reader-server; true

git clone https://github.com/zheshishei/writer-server writer-server

cd writer-server

npm install

node server.js
