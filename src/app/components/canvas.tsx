
import { EProviders } from '../enums/providers';
import PixiCanvas from '../pixiJS/canvas';

const provider = EProviders.PIXI;

export default function Canvas() {
    if (provider == EProviders.PIXI) {
        return <PixiCanvas />
    }
    // ...

}