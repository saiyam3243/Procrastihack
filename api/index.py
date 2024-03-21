from flask import Flask, jsonify, make_response
from package.persona import esg_persona_description_mappings
from package.persona import ESGPersona
from flask_cors import CORS
from package.fund_retriever import FundRetriever

app = Flask(__name__)
CORS(app)
persona = ESGPersona()

@app.route("/api/python")
def hello_world():
    return "<p>Hello World!</p>"

@app.route("/api/get_top_k_companies/", methods=["GET"])
def get_topk_companies():
    pass

# TODO add param
@app.route("/api/get_top_k_funds/", methods=["GET"])
def get_topk_funds(k: 3):
    """
    Get the top k funds for a given persona.

    :param k: The number of top funds to retrieve. Defaults to 3.
    :return: A JSON response containing the top k funds.
    """
    fund_retriever = FundRetriever()
    # TODO determine persona

    top_k_funds = fund_retriever.calculate_top_k_funds(persona.name, k)

    return make_response(jsonify({"top_k_funds" : top_k_funds}), 200)



@app.route("/api/persona", methods=["GET"])
def get_esg_persona_description_mapping():
    """
    Get the mapping of personas to their factors and descriptions.

    :return: A JSON response containing the mapping of personas to their factors and descriptions.
    """

    return make_response({ persona.name: esg_persona_description_mappings[persona.name]}, 200)