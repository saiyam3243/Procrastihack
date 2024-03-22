# This is a basic sample to use Azure OpenAI
# 3 configurations are available in the file openAI_config.json
#
# pre-requisites:
#   - pip install --upgrade openai
import os
from openai import AzureOpenAI
import json

class LLM:
    def __init__(self, config_path='openAI_config.json'):
        # Load config values
        dir_path = os.path.dirname(os.path.realpath(__file__))
        config_path = os.path.join(dir_path, config_path)
        with open(config_path) as config_file:
            openAI_config = json.load(config_file)

        my_config = openAI_config['openAIConfigs'][2]

        # print(f"use openAI config {my_config['configName']}")

        # Setting up the deployment name
        self.chatgpt_model_name = my_config['model']
        self.messages = []
        self.client = AzureOpenAI(
            api_key=my_config['apiKey'],
            api_version=my_config['apiVersion'],
            azure_endpoint=my_config['urlBase']
            )

    def get_response_for_prompt(self, prompt):
        self.messages.append({"role": "assistant", "content": prompt})

        response = self.client.chat.completions.create(
            model = self.chatgpt_model_name,
            messages=self.messages)
        
        self.messages.append({"role": "user", "content": response.choices[0].message.content})
        return (response.choices[0].message.content)
    
    # TODO
    def find_persona(self, chat_history):
        # Send a completion call to generate an answer
        prompt = "Hey, what's up?"    
        return self.get_response_for_prompt(prompt)