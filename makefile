.PHONY: start
start:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose down

.PHONY: logs
logs:
	docker logs -f --tail 100 chess-data-api | ./node_modules/.bin/pino-pretty

.PHONY: lint
lint:
	docker-compose run --rm --no-deps api /bin/sh -c 'yarn lint'
