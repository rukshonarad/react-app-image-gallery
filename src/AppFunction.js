import { useState, useEffect } from "react";
import { ImageApi } from "./api";

const AppFunction = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [zoomedInImage, setZoomedInImage] = useState({});
    const [showImage, setShowImage] = useState(false);
};
export default AppFunction;
