# This is a basic sample to use Azure OpenAI
# 3 configurations are available in the file openAI_config.json
#
# pre-requisites:
#   - pip install --upgrade openai
import os
from openai import AzureOpenAI
import json

from package.persona import esg_persona_description_mappings

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
    

    def find_persona(self, chat_history):
        # create a prompt using chat_history, and the list of personas from personas.py to return exactly 1 word out of the list of personal that describes the user the best
        prompt = ("Act as a marketing professional who wants to profile users based on a chat history. "
                  "You are a given the chat history in the form of a json string with the key as a question and the value as the answer. "
                  "The following is the chat history {chat_history}. "
                  "You have to classify the user into one of the following personas. The personas are provided as a JSON String "
                  "of the form {{\"persona1\": \"description1\", \"persona2\": \"description2\", ...}}. "
                  "The following are the persona descriptions: {persona_descriptions}."
                  "You have to return the persona that best describes the user based on the chat history. Please "
                  "make sure that the output is just the persona classification. The output should be one of the following personas: "
                  "Sustainable Development, Climate Change, Water and Waste Management, Social Matters, Policy Adherence. Please output the "
                  "persona as a json string with the key as \"persona\" and the value as the persona classification. ")
        
        prompt_string = prompt.format(chat_history=chat_history, persona_descriptions=json.dumps(esg_persona_description_mappings))
        return self.get_response_for_prompt(prompt_string)