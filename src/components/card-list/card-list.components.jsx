import React from 'react';

import { Card } from '../card/card.components'

import './card-list.styles.css'

export const CardList = props => (
    <article className="card-list">
        {props.monsters.map(monster =>
            <Card key={monster.id} monster={monster} />
        )}
    </article>
);