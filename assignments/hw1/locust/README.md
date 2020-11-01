## Locust
### Install
locust can be installed by use of the command below:
```bash
pip3 install locust
```
after that, installation can be checked by:
```bash
locust --version
```
### Run
this locust script has four tags (as listed):
   - node
   - go
   - write
   - sha

You can run locust script using:
```bash
locust --tags [Tag [Tag ...]] --exclude-tags [Tag [Tag ...]]
```
**Note**: excluding has a higher priority than including if a task has two tags and one of them is excluded and one of them is included then it won't be excecuted.

**Note**: if you want to run locust from outside of the directory you can use:
```bash
locust -f [Path-To-Directory]
```
**Note**: the request for write is:
```python
self.client.get("/[backend]/write?lineNumber=12")
```
**Note**: the request for sha is:
```python
self.client.post("/[backend]/sha256", {"num1": "12","num2":"13"})
```
### Test Results
test results are in included in [tests](assignments/hw1/locust/tests) directory. we have tested programs using 1000 users that 150 of them spawned every second.

- resutl for node/sha256
![](assignments/hw1/locust/tests/node_sha.png)
- result for node/write
![](assignments/hw1/locust/tests/node_write.png)
- result for go/sha256
![](assignments/hw1/locust/tests/go_sha.png)
- result for go/write
![](assignments/hw1/locust/tests/go_write.png)
