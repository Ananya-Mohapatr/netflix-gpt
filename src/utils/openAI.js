import React from 'react'
import OpenAI from 'openai';
import { OPENAI_KEY } from './Constant';


const openAI = new OpenAI({
    apiKey: OPENAI_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser:true
  });

export default openAI