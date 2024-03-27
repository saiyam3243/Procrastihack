# pre-requisites:
#   - pip install --upgrade openai
import os
import openai
import json
from dotenv import load_dotenv
from _package.persona import esg_persona_description_mappings

class LLM:
    def __init__(self):
        self.messages = []
        load_dotenv()
        openai.api_key = os.getenv('OPENAI_API_KEY')
    

    def get_response_for_prompt(self, prompt):
        self.messages.append({"role": "user", "content": prompt})

        response = openai.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=self.messages
        )
        
        self.messages.append({"role": "assistant", "content": response.choices[0].message.content})
        return response.choices[0].message.content
    

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