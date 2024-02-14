import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import useClipboard from "react-use-clipboard";
import { useState } from 'react';


const SpeechRecog = () => {


    const [textForCopy, setTextForCopy] = useState();

    const [isCopied, setCopied] = useClipboard(textForCopy);

    const startListenning = () => SpeechRecognition.startListening({ continuous: true, language: 'en-bn' });

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    console.log({ transcript });
    return (
        <>
            <div className="my-10">
                <h2 className='text-center text-4xl font-semibold'>Speech to Text Converter</h2>
                <br />
                <p className='text-center font-semibold text-2xl'>A React hook that converts speech from the microphone to text and makes it available to your React
                    components.</p>

                <p onClick={() => setTextForCopy(transcript)} className="max-w-3xl w-full min-h-[400px] mx-auto my-5 h-auto p-4 relative resize-none shadow-lg bg-[#FFFFFF] border-2 rounded-lg">
                    {transcript}
                </p>

                <div className="text-center">
                    <button className='btn mx-10 text-white btn-success' onClick={setCopied}>
                         {isCopied ? "Copied to clipboard" : "Copy"}
                    </button>
                    <button className='btn mx-10  text-white btn-success' onClick={startListenning}>Start Listening</button>
                    <button className='btn mx-10 text-white btn-success' onClick={SpeechRecognition.stopListening}>Stop Listening</button>

                </div>

            </div>

        </>
    );
};

export default SpeechRecog;