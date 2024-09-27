from flask_restful import Resource

from configs import agentbase_config
from controllers.service_api import api


class IndexApi(Resource):
    def get(self):
        return {
            "welcome": "AgentBase OpenAPI",
            "api_version": "v1",
            "server_version": agentbase_config.CURRENT_VERSION,
        }


api.add_resource(IndexApi, "/")
