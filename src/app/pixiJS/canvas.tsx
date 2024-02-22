import { Stage, Text } from '@pixi/react';
import * as PIXI from 'pixi.js';
import { ICanvas } from '../interfaces/canvas';

// const wizard = 'https://pixijs.com/images/logo.svg';

const Canvas: React.FC<ICanvas>  = () => {
  // Define the text style
  const textStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize:  36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness:  5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur:  4,
    dropShadowAngle: Math.PI /  6,
    dropShadowDistance:  6,
  });


  return (
    <Stage width={800} height={600}>
      <Text
        text="Welcome to InstaCard"
        style={textStyle}
        x={400} // Center the text horizontally
        y={300} // Position the text vertically
        anchor={{ x:  0.5, y:  0.5 }} // Anchor to the center
      />
    </Stage>
    // <Stage>
    //   {/* Add PIXI objects here */}
    //   <Sprite image={wizard} x={150} y={150} />
    // </Stage>
  );
};

export default Canvas;
