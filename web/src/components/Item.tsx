import { ListItem, ListItemText } from '@mui/material';

const Item: React.FC<{ name: string, details: string }> = ({ name, details }) => {
  return (
    <ListItem>
      <ListItemText
        primary={name}
        secondary={details}
      />
    </ListItem>
  )
}

export default Item;