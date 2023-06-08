import { useEffect, useState } from "react";
import BASE_URL from "../constants/url.js";
import opportunityTabs from "../constants/opportunitiesTabs.js";
import axios from "axios";

function useGetData(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get(`${BASE_URL}${url}`)
            .then((response) => {
                const data = response.data;

                const res = {
                    engage: data.filter(
                        (val) =>
                            val.funnelCurrentStage.toLowerCase() ===
                            opportunityTabs.ENGAGE.toLowerCase()
                    ),
                    discover: data.filter(
                        (val) =>
                            val.funnelCurrentStage.toLowerCase() ===
                            opportunityTabs.DISCOVER.toLowerCase()
                    ),
                    nurturePrep: data.filter(
                        (val) =>
                            val.funnelCurrentStage.toLowerCase() ===
                            opportunityTabs.NURTURE_PREP.toLowerCase()
                    ),
                    propose: data.filter(
                        (val) =>
                            val.funnelCurrentStage.toLowerCase() ===
                            opportunityTabs.PROPOSE.toLowerCase()
                    ),
                    close: data.filter(
                        (val) =>
                            val.funnelCurrentStage.toLowerCase() ===
                            opportunityTabs.CLOSE.toLowerCase()
                    ),
                };

                setData(res);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.messge);
                setLoading(false);
            });
    }, [url]);

    return { loading, data, error };
}

export default useGetData;
