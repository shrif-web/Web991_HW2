nginx.conf file for nginx settings is in this folder.</br>
for serving our index.html we use syntax below (```addr``` is address to front folder)
```
location / {
	root addr;
	index index.html;
}
```
<\br>
* important note: each folder in the path used for root must have read premission index.html is not severd correctly and the error "403 forbbiden" is encountered.
