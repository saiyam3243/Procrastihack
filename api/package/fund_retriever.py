"""Functionality to retrieve top k funds"""
import pandas as pd

class FundRetriever:

    def __init__(self, path_fund_data: str = "./data/EUESGMANUFACTURER.csv") -> None:
        self.fund_data = pd.read_csv(path_fund_data)

    def _calculate_esg_score_per_persona(self, persona: str):
        pass

   # TODO return a dictionary
    def calculate_top_k_funds(self, persona: str, k: int):

        score_fund_mapping = self._calculate_esg_score_per_persona(persona)

        sorted_funds = sorted(score_fund_mapping, key=score_fund_mapping.get, reverse=True)

        return sorted_funds[:k]
    