import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPrincipal from '../src/pages/index';
import IndexData from '../src/pages/data/index';

export default function routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPrincipal/>} />
                <Route path="/data" element={<IndexData/>} />
             
            </Routes>    
        </BrowserRouter>
    )
}