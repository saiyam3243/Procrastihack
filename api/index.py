from flask import Flask, request, jsonify, make_response
from package.persona import ESGPersona, esg_persona_description_mappings
from package.fund_retriever import FundRetriever
from package.llm.llm import LLM
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

llm = LLM()
persona = ESGPersona()

@app.route("/api/python")
def hello_world():
    return "<p>Hello World!</p>"

@app.route("/api/get_top_k_companies/", methods=["GET"])
def get_top_k_companies():
    pass


""" Example:
{
    "top_k_funds": {
        "Invesco Liquidity Funds PLC - Invesco Euro Liquidity Portfolio": 1.0,
        "ODDO BHF Green Bond": 1.0,
        "OekoWorld FCP - OekoWorld OekoVision Classic": 1.0
    }
}
"""
@app.route("/api/get_top_k_funds", methods=["GET"])
def get_top_k_funds(k = 3):
    """
    Get the top k funds for a given persona.

    :param k: The number of top funds to retrieve. Defaults to 3.
    :return: A JSON response containing the top k funds.
    """
    fund_retriever = FundRetriever()

    top_k_funds = fund_retriever.calculate_top_k_funds(persona.name, k)

    return make_response(jsonify({"top_k_funds" : top_k_funds}), 200)

""" Example:
{
    "persona": "Eco-Warrior",
}
"""
@app.route("/api/persona", methods=["GET"])
def get_esg_persona_description_mapping():
    """
    Get the mapping of personas to their factors and descriptions.

    :return: A JSON response containing the mapping of personas to their factors and descriptions.
    """

    return make_response({ persona.name: esg_persona_description_mappings[persona.name]}, 200)

# LLM API endpoints
@app.route("/api/llm", methods=["POST"])
def post_llm():
    """
    Get the response from the LLM model given a prompt.

    :return: A JSON response containing the response from the LLM model.
    """
    prompt = request.json['prompt']
    response = llm.get_response_for_prompt(prompt)

    return make_response(jsonify({"response" : response}), 200)

@app.route("/api/llm_persona", methods=["POST"])
def post_llm_persona():
    """
    Save the persona from the LLM model given a chat history.

    :return: None
    """
    global persona
    chat_history = request.json['chat_history']
    persona = llm.find_persona(chat_history)
    return make_response(jsonify({"persona" : persona}), 200)

    