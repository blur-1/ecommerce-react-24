import React from 'react';
import { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import Bot from '../assets/bot.png'
import User from '../assets/user.png'


const steps = [
    {
      id: '1',
      message: '¡Hola! ¿Cómo puedo ayudarte hoy?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'Ver productos', trigger: '3' },
        { value: 2, label: 'Contactar soporte', trigger: '4' },
        { value: 3, label: 'Otra consulta', trigger: '5' },
      ],
    },
    {
      id: '3',
      message: 'Puedes ver nuestros productos en la sección de productos.',
      end: true,
    },
    {
      id: '4',
      message: 'Por favor, contacta a soporte@empresa.com.',
      end: true,
    },
    {
      id: '5',
      message: 'Por favor, escribe tu consulta.',
      trigger: '6',
    },
    {
      id: '6',
      user: true,
      trigger: '7',
    },
    {
      id: '7',
      message: 'Gracias por tu consulta. Nos pondremos en contacto contigo pronto.',
      end: true,
    },
  ];
  
  const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleChatbot = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div>
          <button
            onClick={toggleChatbot}
            className="fixed bottom-4 right-4 bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg"
          >
            Chat
          </button>
          {isOpen && (
            <div className="fixed bottom-16 right-4 w-full 
            max-w-xs sm:max-w-sm 
             bg-white border border-gray-300 rounded-lg shadow-lg">
              <ChatBot
                steps={steps}
                botAvatar={Bot}
                userAvatar={User}
                className="p-3"
                contentStyle={{ backgroundColor: '#f5f8fb', borderRadius: '8px', height: '400px', overflow: 'auto' }}
                bubbleStyle={{ backgroundColor: '#00bfff', color: '#fff' }}
                bubbleOptionStyle={{ backgroundColor: '#00bfff', color: '#fff' }}
              />
            </div>
          )}
        </div>
      );
  };

export default Chatbot;
