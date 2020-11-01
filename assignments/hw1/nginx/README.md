nginx.conf file for nginx settings is in this folder.</br>
for serving our index.html we use syntax below (`addr` is address to front folder)
```NGINX
location / {
	root addr;
	index index.html;
}
```
**important note:** each folder in the path used for root must have read premission index.html is not severd correctly and the error "403 forbidden" is encountered.
for location /go/ we use code below to pass the command to port `8080`.

```NGINX
location /go/ {
	proxy_set_header Host $host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_pass http://127.0.0.1:8080/;
}
```
the same for nodejs and port `3000`.

```NGINX
location /nodejs/ {
	proxy_set_header Host $host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_pass http://127.0.0.1:3000/;
}
```
