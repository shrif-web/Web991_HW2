import time, random
from locust import HttpUser, task, between, tag

class QuickstartUser(HttpUser):

    @tag('node')
    @tag('sha')
    @task
    def sha256(self):
        self.client.post("/nodejs/sha256", {"num1": "12","num2":"13"})
    
    @tag('node')
    @tag('write')
    @task
    def write_node(self):
        self.client.get("/nodejs/write?lineNumber=12")

    @tag('go')
    @tag('sha')
    @task
    def sha256_go(self):
        self.client.post("/go/sha256", {"num1": "12","num2":"13"})

    @tag('go')
    @tag('write')
    @task
    def write_go(self):
        self.client.get("/go/write?lineNumber=12")
