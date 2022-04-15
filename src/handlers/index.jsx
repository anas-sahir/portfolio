import { useNavigate } from 'react';

export function ToAcceuil() {
    const navigate = useNavigate();
    navigate("/");
}

export function ToCV() {
    const navigate = useNavigate();
    navigate("/cv");
}

export function ToFormation() {
    const navigate = useNavigate();
    navigate("/formation");
}

export function ToExperiance() {
    const navigate = useNavigate();
    navigate("/experiance");
}

export function ToContactMe() {
    const navigate = useNavigate();
    navigate("/contactme");
}
