import './card-list.style.css'

import Card from '../card/card.component'
const CardList = ({monsters}) => {
   
    return(
        <div className='card-list'>
            {
                monsters.map(
                    (monster,idx) => <Card 
                                    key = {idx}
                                    id = {monster.id}
                                    name = {monster.name} 
                                    email = {monster.email}
                                />
                )
            }
        </div>
        
    )
}

export default CardList