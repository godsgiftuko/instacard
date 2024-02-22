
import { EProviders } from '../enums/providers';
import { ICanvas } from '../interfaces/canvas';
import PixiCanvas from '../pixiJS/canvas';

const provider = EProviders.PIXI

export default function Canvas() {
    let Canvas: React.FC<ICanvas>;

    if (provider == EProviders.PIXI) {
        Canvas = PixiCanvas;
    }
    // ...

    return <Canvas />

}