import React, { useState } from 'react';
import MsgDeBienvenue from './MsgDeBienvenue';

export default function ParentComponent() {
    const [nomUtilisateur, setNomUtilisateur] = useState('');

    return (
        <div>
            <MsgDeBienvenue nomUtilisateur={nomUtilisateur} setNomUtilisateur={setNomUtilisateur} />
        </div>
    );
}
