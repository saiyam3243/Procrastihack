from _package.persona_mappings import esg_persona_factors_mappings, esg_persona_description_mappings

class ESGPersona:
    def __init__(self, name= "Sustainable Development", factors=['Biodiversity', 'Fossil fuels'],
                  description="Aims for investments that support sustainable development, particularly in terms of biodiversity and fossil fuels."):
        self.name = name
        self.factors = factors
        self.description = description
    
    def __str__(self) -> str:
        return f"ESGPersona(name={self.name}, factors={self.factors}, description={self.description})"

personas = [ESGPersona(name, esg_persona_factors_mappings[name], esg_persona_description_mappings[name]) for name in esg_persona_factors_mappings]