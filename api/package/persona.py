from dataclasses import dataclass, field
from typing import List

@dataclass
class ESGPersona:
    name: str
    factors: List[str] = field(default_factory=list)
    description: str = ''

# source: https://www.morganstanley.com/content/dam/msdotcom/infographics/sustainable-investing/Sustainable_Signals_Individual_Investor_White_Paper_Final.pdf

esg_persona_factors_mappings = {
    'Climate change' : ['Greenhouse gas emission', 'Fossil fuels', 'Environment', 'Energy efficiency'],
    'Water and waste management' : ['Water', 'Waste', 'Biodiversity'],
    'Woke' : ['Social and employee matters'],
    'Policy Adherence' : ['Main criterias used for a first screening of ESG related products', 'MiFID/IDD Target Market - Manufacturer angle (from a client perspective)', 'German MiFID Market', 'MiFID Sustainability Preference Flag'],
    'Sustainable Development' : ['Biodiversity', 'Fossil fuels']
}

esg_persona_description_mappings = {
    'Climate change' : 'Focused on the impacts of investments on climate change, including greenhouse gas emissions, fossil fuels, and energy efficiency.',
    'Water and waste management' : 'Interested in how investments affect water usage, waste production, and biodiversity.',
    'Woke' : 'Concerned about social and employee matters in investment decisions.',
    'Policy Adherence' : 'Keen on ensuring investments adhere to ESG-related policies and market regulations.',
    'Sustainable Development' : 'Aims for investments that support sustainable development, particularly in terms of biodiversity and fossil fuels.'
}

personas = [ESGPersona(name, esg_persona_factors_mappings[name], esg_persona_description_mappings[name]) for name in esg_persona_factors_mappings]
print(personas)