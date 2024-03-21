"""Functionality to retrieve top k funds"""

import pandas as pd
from package.persona import esg_persona_factors_mappings


class FundRetriever:

    def __init__(self, path_fund_data: str = "./data/EUESGMANUFACTURER-LIGHT.csv") -> None:
        self.fund_data = pd.read_csv(path_fund_data)

    def _retrieve_persona_metrics(self, persona: str):
        """Helper function to retrieves relevant ESGFactor metrics for a given Persona."""

        # Make a sorted copy of the DataFrame by date in descending order
        metrics = esg_persona_factors_mappings[persona]
        df = self.fund_data[self.fund_data["ESGClassification"].isin(metrics)]
        sorted_df = df.sort_values(by="ESGDeliveryDate", ascending=False)

        # Initialize an empty dictionary
        result_dict = {}

        # Iterate over sorted DataFrame rows
        for _, row in sorted_df.iterrows():
            company = row["companyLongName"]
            metric = row["ESGFactor"]
            value = row["ESGClassSymbol"]

            if "Yes" in value:
                value = 1
            else:
                value = 0

            # Check if the company already exists in the result_dict
            if company in result_dict:
                # Check if the metric already exists for the company
                if metric not in result_dict[company]:
                    # If metric doesn't exist, add it to the company's dictionary
                    result_dict[company][metric] = value
            else:
                # If company doesn't exist, add it to the result_dict with the metric and value
                result_dict[company] = {metric: value}

        return result_dict

    def _cumulative_score(self, metric_fund_dict: dict, persona: str):
        """Aggregate scores over different metrics."""
        results = {}
        metrics = esg_persona_factors_mappings[persona]
        total_num_factors = len(
            self.fund_data[self.fund_data["ESGClassification"].isin(metrics)][
                "ESGFactor"
            ].unique()
        )
        for k, v in metric_fund_dict.items():

            score = sum(v.values())

            results[k] = score / total_num_factors

        return results

    def _calculate_esg_score_per_persona(self, persona: str):
        """Calculates a score for a given persona."""
        metric_fund_dict = self._retrieve_persona_metrics(persona)
        score_fund_dict = self._cumulative_score(metric_fund_dict, persona)

        return score_fund_dict

    # TODO return a dictionary
    def calculate_top_k_funds(self, persona: str, k: int):

        score_fund_mapping = self._calculate_esg_score_per_persona(persona)

        sorted_funds = sorted(
            score_fund_mapping, key=score_fund_mapping.get, reverse=True
        )

        return sorted_funds[:k]
