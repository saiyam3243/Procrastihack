from flask import Flask, jsonify
from package.persona import esg_persona_description_mappings
app = Flask(__name__)


@app.route("/api/python")
def hello_world():
    return "<p>Hello, Welt!</p>"

# get_persona_mapping() -> Persona Mapping
# TODO get_persona() -> Persona
# get_top5_indicators(persona : Persona, personaMapping: dict) -> Top 5 metrics 
# get_top3_companies(indicators: List[Indicator]) -> Top 3 companies
# get_bottom3_companies(indicators: List[Indicator]) -> Bott 3 companies
# get_top10_funds(indicators: List[Indicator]) -> Top 10 funds
# get_persona_mappings() -> Persona Mappings
 


@app.route("/api/persona")
def get_persona_mapping():
    return jsonify(esg_persona_description_mappings), 200