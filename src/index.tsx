import React from 'react';
import {createRoot} from 'react-dom/client';
import App from "./app/ui/App";
import "./app/ui/global.scss";

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(<App/>);
