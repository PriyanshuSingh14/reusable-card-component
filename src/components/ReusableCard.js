import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import monitorImage from './images/monitor.webp';
import keyboardImage from './images/keyboard.webp';
import cpuImage from './images/cpu.jpeg';
import mouseImage from './images/mouse.jpeg';
import upsImage from './images/ups.jpeg';





const ReusableCard = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div className="item-card" key={item.key}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={
                  item.imageUrl === 'monitor.webp'
                    ? monitorImage
                    : item.imageUrl === 'keyboard.webp'
                    ? keyboardImage
                    : item.imageUrl === 'cpu.jpeg'
                    ? cpuImage
                    : item.imageUrl === 'mouse.jpeg'
                    ? mouseImage
                    : item.imageUrl === 'ups.webp'       //the image url passed is incorrect.
                    ? upsImage
                    : null
                }
               
           
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
