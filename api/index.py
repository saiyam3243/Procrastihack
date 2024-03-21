from flask import Flask, jsonify
from package.persona import esg_persona_description_mappings
from package.fund_retriever import FundRetriever

app = Flask(__name__)


@app.route("/api/python")
def hello_world():
    return "<p>Hello, Welt!</p>"


# get_persona_mapping() -> Persona Mapping
# TODO get_persona() -> Persona
# get_top5_indicators(persona : Persona, personaMapping: dict) -> Top 5 metrics
# get_top3_companies(indicators: List[Indicator]) -> Top 3 companies
# get_bottom3_companies(indicators: List[Indicator]) -> Bott 3 companies
#
# get_persona_mappings() -> Persona Mappings


@app.route("/api/get_top_k_funds")
def get_topk_funds(persona: str, k: 3):

    fund_retriever = FundRetriever()

    top_k_funds = fund_retriever.calculate_top_k_funds(persona, k)

    return jsonify(top_k_funds)


@app.route("/api/persona")
def get_persona_mapping():
    pass


@app.route("/api/persona")
def get_persona_mapping():
    return jsonify(esg_persona_description_mappings), 200
