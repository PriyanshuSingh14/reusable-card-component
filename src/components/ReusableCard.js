import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';



const ReusableCard = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item, index) => (
        <div className="item-card" key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`./images/${item.imageUrl}`} // Adjust the path as per your project structure
                alt="Image not available"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ReusableCard;
