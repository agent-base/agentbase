#!/bin/bash

cd web && npm install
pipx install poetry

echo 'alias start-api="cd /workspaces/agentbase/api && poetry run python -m flask run --host 0.0.0.0 --port=5001 --debug"' >> ~/.bashrc
echo 'alias start-worker="cd /workspaces/agentbase/api && poetry run python -m celery -A app.celery worker -P gevent -c 1 --loglevel INFO -Q dataset,generation,mail,ops_trace,app_deletion"' >> ~/.bashrc
echo 'alias start-web="cd /workspaces/agentbase/web && npm run dev"' >> ~/.bashrc
echo 'alias start-containers="cd /workspaces/agentbase/docker && docker-compose -f docker-compose.middleware.yaml -p agentbase up -d"' >> ~/.bashrc

source /home/vscode/.bashrc