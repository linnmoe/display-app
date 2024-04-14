import { useEffect, useState } from "react";

import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { KitchenOccupancyModel } from "../models/kitchenOccupancy.model";
import { Box,  Stack, Typography } from "@mui/material";

interface KitchenOccupancyProps { }

const SOCKET_URL = 'http://localhost:9017/hackit-websocket';

const KitchenOccupancy: React.FC<KitchenOccupancyProps> = () => {
    const [occupancyPercentage, setOccupancyPercentage] = useState<number>(0);
    const [numberOfPeople, setNumberOfPeople] = useState<number>(0);
    const [feelsLikeDescription, setFeelsLikeDescription] = useState<string>('');


    useEffect(() => {
        const socket = new SockJS(SOCKET_URL);
        const stompClient = Stomp.over(socket);

        const connectToWebSocket = () => {
            stompClient.connect({}, () => {
                console.log('Connected to WebSocket');
                subscribeToTopic();
            });
        };

        const subscribeToTopic = () => {
            stompClient.subscribe('/topic/occupancies', (message) => {
                const kitchenOccupancy: KitchenOccupancyModel = JSON.parse(message.body)
                const newNumberOfPeople = kitchenOccupancy.numberOfPeople;
                const newOccupancyPercentage = kitchenOccupancy.occupancy * 100;
                
                setNumberOfPeople(newNumberOfPeople);
                setOccupancyPercentage(newOccupancyPercentage);
         
                console.log('Received message:', JSON.parse(message.body));
            });
        };

        


        connectToWebSocket();

        return () => {
            // Disconnect from WebSocket when component unmounts
            /* stompClient.disconnect(); */
        };

    }, []);
    const selectFeelsLikeDescription = () => {
        const descriptions = [
            { range: [0, 10], description: 'Köket känns övergivet, som ett övergivet serverrum en fredagskväll!' },
            { range: [11, 25], description: 'Köket är fyllt med energi, som en sal full av utvecklare som argumenterar för tabbar kontra mellanslag!' },
            { range: [26, 50], description: 'Köket är som en Git-mergekonflikt - full av spänning och olösta problem!' },
            { range: [51, 75], description: 'Köket är lika trångt som en dåligt skriven legacy-kodbas!' },
            { range: [76, 100], description: 'Köket är lika trångt som en server under en DDoS-attack!' },
            { range: [101, Infinity], description: 'Köket upplever oväntat beteende, som en produktionsbugg mitt i en demonstration!' }
        ];

        const matchedDescription = descriptions.find(desc => numberOfPeople >= desc.range[0] && numberOfPeople <= desc.range[1]);
        console.log(numberOfPeople,"numberofpeople")
        console.log(matchedDescription,"matchedDescription")
        setFeelsLikeDescription( matchedDescription ? matchedDescription.description : '');
    }
    useEffect(() => {
        selectFeelsLikeDescription();
    }, [numberOfPeople]);
    

    return (
        <Box boxShadow={3} p={3} borderRadius={8} >

            <Stack>
                <div >
                <Typography>
        {numberOfPeople !== null ? (
            <span>Antalet ätare: {numberOfPeople}</span>
        ) : (
            <span>Loading...</span>
        )}
        {occupancyPercentage !== null ? (
            <span style={{ marginLeft: '20px' }}>{`Ätkapacitet: ${occupancyPercentage.toFixed(2)}%`}</span>
        ) : (
            <span>Loading...</span>
        )}
    </Typography>
                </div>
                <div>
                    <Typography>
                        {feelsLikeDescription !== null ? (
                            <strong>{feelsLikeDescription}</strong>
                        ) : (
                            'Loading...'
                        )}
                    </Typography>
                </div>
            </Stack>
            
        </Box>
    );
};

export default KitchenOccupancy;