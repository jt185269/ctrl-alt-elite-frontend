import { Menu } from "semantic-ui-react"
import { useState } from "react"
export const Homepage = () => {
    const [activeItem, setActiveItem] = useState('home')

    const handleItemClick = (e, {name}) => {
        setActiveItem(name)
    }
    return (
        <Menu>
            <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          
        </Menu>
    )
}