.PHONY: start
start:
	docker-compose up -d

.PHONY: logs
logs:
	docker-compose logs -f --tail 100 api 
