## NGINX Configuration
The following configurations are present in [`nginx.conf`](/assignments/hw1/nginx/nginx.conf).</br>
In order to serve our index.html file to client, the following syntax is used:
```NGINX
location / {
	root <path/to/frontend/files>;
	index index.html;
}
```
**Note:** Every folder in the path used for root must have read permission, otherwise index.html won't be served correctly and the error "403 forbidden" is encountered.
for location /go/ we use code below to pass the command to port `8080` (on which _Go_ service is running).

```NGINX
location /go/ {
	proxy_set_header Host $host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_pass http://127.0.0.1:8080/;
}
```
The same is done for _Nodejs_ service which is running on port `3000`.

```NGINX
location /nodejs/ {
	proxy_set_header Host $host;
	proxy_set_header X-Real-IP $remote_addr;
	proxy_pass http://127.0.0.1:3000/;
}
```
