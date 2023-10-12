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
              <ImageWithFallback imageUrl={getImageForItem(item.imageUrl)} />
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

// A helper function to get the correct image URL
const getImageForItem = (imageUrl) => {
  switch (imageUrl) {
    case 'monitor.webp':
      return monitorImage;
    case 'keyboard.webp':
      return keyboardImage;
    case 'cpu.jpeg':
      return cpuImage;
    case 'mouse.jpeg':
      return mouseImage;
    case 'ups.webp':
      return upsImage;
    default:
      return null;
  }
};

// A separate component to handle broken image URLs
const ImageWithFallback = ({ imageUrl }) => {
  return (
    <div>
      <img
        src={imageUrl}
        alt="Image not available"
        onError={(e) => {
          e.target.src = 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/en/indhs-Inspiron-3020-Small-desktop.png';
        }}
      />
    </div>
  );
};

export default ReusableCard;
